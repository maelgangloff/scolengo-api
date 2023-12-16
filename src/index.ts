import type { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'
import axios from 'axios'
import type { Client } from 'openid-client'
import { Issuer, TokenSet } from 'openid-client'
import type { DocumentObject } from 'jsonapi-fractal'
import { deserialize, serialize } from 'jsonapi-fractal'
import type { Stream } from 'node:stream'

import type { AppCurrentConfig, BaseObject, User } from './models/Common'
import type { School, SchoolFilter } from './models/School/School'
import type { AuthConfig } from './models/Common/Auth'
import type { Communication, Participation, UsersMailSettings } from './models/Messaging'
import type { Attachment, SchoolInfo } from './models/School'
import type { Evaluation, EvaluationDetail, EvaluationSettings } from './models/Results'
import type { Agenda, Lesson, HomeworkAssignment } from './models/Calendar'
import { AgendaResponse } from './models/Calendar'
import type { AbsenceFile, AbsenceState, AbsenceReason } from './models/SchoolLife'
import { AbsenceFilesResponse } from './models/SchoolLife'
import type { SkolengoErrorBody } from './models/Errors'
import { SkolengoError } from './models/Errors'
import type { SkolengoConfig } from './models/Common/SkolengoConfig'

const BASE_URL = 'https://api.skolengo.com/api/v1/bff-sko-app'
const OID_CLIENT_ID = Buffer.from('U2tvQXBwLlByb2QuMGQzNDkyMTctOWE0ZS00MWVjLTlhZjktZGY5ZTY5ZTA5NDk0', 'base64').toString('ascii') // base64 du client ID de l'app mobile
const OID_CLIENT_SECRET = Buffer.from('N2NiNGQ5YTgtMjU4MC00MDQxLTlhZTgtZDU4MDM4NjkxODNm', 'base64').toString('ascii') // base64 du client Secret de l'app mobile

export class Skolengo {
  public readonly school: School
  public tokenSet: TokenSet
  private readonly oidClient: Client
  private readonly config: SkolengoConfig

  /**
   * Il est possible de s'authentifier en possédant au prélable des jetons OAuth 2.0
   *
   * @example ```js
   * const {Skolengo} = require('scolengo-api')
   *
   * // 🚨 ATTENTION: Ne communiquez jamais vos jetons à un tiers. Ils vous sont strictement personnels. Si vous pensez que vos jetons ont été dérobés, révoquez-les immédiatement.
   * // L'objet de configuration ci-dessous peut être généré à partir de l'utilitaire scolengo-token (https://github.com/maelgangloff/scolengo-token)
   * const config = {
   *   "tokenSet": {
   *     "access_token": "<access_token_here>",
   *     "id_token": "<id_token_here>",
   *     "refresh_token": "RT-<refresh_token_here>",
   *     "token_type": "bearer",
   *     "expires_at": 1234567890,
   *     "scope": "openid"
   *   },
   *   "school": {
   *     "id": "SKO-E-<school_id>",
   *     "name": "<school_name>",
   *     "addressLine1": "<school_address>",
   *     "addressLine2": null,
   *     "addressLine3": null,
   *     "zipCode": "<school_zip_code>",
   *     "city": "<school_city>",
   *     "country": "France",
   *     "homePageUrl": "<cas_login_url>",
   *     "emsCode": "<school_ems_code>",
   *     "emsOIDCWellKnownUrl": "<school_ems_oidc_well_known_url>"
   *   }
   * }
   * Skolengo.fromConfigObject(config).then(async user => {
   *   const infoUser = await user.getUserInfo()
   *   console.log(`Correctement authentifié sous l'identifiant ${infoUser.id}`)
   * })
   * ```
   * ```js
   * const {Skolengo, TokenSet} = require('scolengo-api')
   *
   * Skolengo.searchSchool({ text: 'Lycée Louise Weiss' }).then(async schools => {
   *   if(!schools.length) throw new Error('Aucun établissement n\'a été trouvé.')
   *   const school = schools[0]
   *   const oidClient = await Skolengo.getOIDClient(school)
   *
   *   // 🚨 ATTENTION: Ne communiquez jamais vos jetons à un tiers. Ils vous sont strictement personnels. Si vous pensez que vos jetons ont été dérobés, révoquez-les immédiatement.
   *
   *   const tokenSet = new TokenSet({
   *     access_token: 'ACCESS_TOKEN',
   *     id_token: 'ID_TOKEN',
   *     refresh_token: 'REFRESH_TOKEN',
   *     token_type: 'bearer',
   *     expires_at: 1681486899,
   *     scope: 'openid'
   *   })
   *
   *   const user = new Skolengo(oidClient, school, tokenSet)
   *   const infoUser = await user.getUserInfo()
   *   console.log(`Correctement authentifié sous l'identifiant ${infoUser.id}`)
   * })
   * ```
   * @param {Client} oidClient Un client OpenID Connect
   * @param {School} school Etablissement
   * @param {TokenSet} tokenSet Jetons d'authentification OpenID Connect
   * @param {SkolengoConfig} config Configuration optionnelle (stockage du jeton renouvellé, client HTTP personnalisé, gestion des erreurs Pronote, ...)
   */
  public constructor (oidClient: Client, school: School, tokenSet: TokenSet, config?: Partial<SkolengoConfig>) {
    this.oidClient = oidClient
    this.school = school
    this.tokenSet = tokenSet
    this.config = {
      httpClient: config?.httpClient ?? axios.create({ baseURL: BASE_URL }),
      onTokenRefresh: config?.onTokenRefresh ?? (() => {}),
      handlePronoteError: config?.handlePronoteError ?? false
    }
  }

  /**
   * Révoquer un jeton
   * @param {Client} oidClient Un client OpenID Connect
   * @param {string} token Un jeton
   * @async
   */
  public static async revokeToken (oidClient: Client, token: string): Promise<undefined> {
    return await oidClient.revoke(token)
  }

  /**
   * Configuration actuelle de l'application mobile (dernière version déployée, dernière version supportée, ...)
   * @param {AxiosRequestConfig|undefined} httpConfig Configuration facultative du client HTTP
   * @example ```js
   * const {Skolengo} = require('scolengo-api')
   *
   * Skolengo.getAppCurrentConfig().then(config => {
   *   console.log(`Dernière version déployée: ${config.latestDeployedSkoAppVersion}`)
   *   console.log(`Dernière version supportée: ${config.latestSupportedSkoAppVersion}`)
   * })
   * ```
   * @async
   */
  public static async getAppCurrentConfig (httpConfig?: AxiosRequestConfig): Promise<AppCurrentConfig> {
    return deserialize((await axios.request<DocumentObject>({
      baseURL: BASE_URL,
      url: '/sko-app-configs/current',
      method: 'get',
      responseType: 'json',
      ...httpConfig
    })).data) as AppCurrentConfig
  }

  /**
   * Rechercher un établissement scolaire
   * @param {SchoolFilter} filter Le filtre de recherche
   * @param {number} limit Limite
   * @param {number} offset Offset
   * @param {AxiosRequestConfig|undefined} httpConfig Configuration facultative du client HTTP
   * @example ```js
   * const {Skolengo} = require('scolengo-api')
   *
   * Skolengo.searchSchool({ text: 'Lycée Louise Weiss' }).then(schools => {
   *   console.log(schools)
   * })
   * ```
   * @example ```js
   * const {Skolengo} = require('scolengo-api')
   *
   * Skolengo.searchSchool({ lat: 48.0, lon: 7.0 }).then(schools => {
   *   console.log(schools)
   * })
   * ```
   * @async
   */
  public static async searchSchool (filter: SchoolFilter, limit = 10, offset = 0, httpConfig?: AxiosRequestConfig): Promise<School[]> {
    return deserialize((await axios.request<DocumentObject>({
      baseURL: BASE_URL,
      url: '/schools',
      method: 'get',
      responseType: 'json',
      params: {
        page: {
          limit,
          offset
        },
        filter
      },
      ...httpConfig
    })).data) as School[]
  }

  /**
   * Créer un client OpenID Connect permettant l'obtention des jetons (refresh token et access token)
   * @param {School} school L'établissement scolaire
   * @param {string|undefined} redirectUri Callback
   * @example ```js
   * const {Skolengo} = require('scolengo-api')
   *
   * Skolengo.searchSchool({ text: 'Lycée Louise Weiss' }).then(async schools => {
   *   if(!schools.length) throw new Error('Aucun établissement n\'a été trouvé.')
   *   const school = schools[0]
   *   const oidClient = await Skolengo.getOIDClient(school, 'skoapp-prod://sign-in-callback')
   *   console.log(oidClient.authorizationUrl())
   *   // Lorsque l'authentification est effectuée, le CAS redirige vers le callback indiqué avec le code. Ce code permet d'obtenir les refresh token et access token (cf. mécanismes OAuth 2.0 et OID Connect)
   * })
   * ```
   * ```js
   * const {Skolengo} = require('scolengo-api')
   *
   * Skolengo.searchSchool({ text: 'Lycée Louise Weiss' }).then(async schools => {
   *   if(!schools.length) throw new Error('Aucun établissement n\'a été trouvé.')
   *   const school = schools[0]
   *   const oidClient = await Skolengo.getOIDClient(school, 'skoapp-prod://sign-in-callback')
   *
   *   const params = oidClient.callbackParams('skoapp-prod://sign-in-callback?code=OC-9999-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-X')
   *   const tokenSet = await oidClient.callback('skoapp-prod://sign-in-callback', params)
   *   // 🚨 ATTENTION: Ne communiquez jamais vos jetons à un tiers. Ils vous sont strictement personnels. Si vous pensez que vos jetons ont été dérobés, révoquez-les immédiatement.
   *
   *   const user = new Skolengo(oidClient, school, tokenSet)
   *   const infoUser = await user.getUserInfo()
   *   console.log(`Correctement authentifié sous l'identifiant ${infoUser.id}`)
   * })
   * ```
   */
  public static async getOIDClient (school: School, redirectUri = 'skoapp-prod://sign-in-callback'): Promise<Client> {
    const skolengoIssuer = await Issuer.discover(school.emsOIDCWellKnownUrl)
    return new skolengoIssuer.Client({
      client_id: OID_CLIENT_ID,
      client_secret: OID_CLIENT_SECRET,
      redirect_uris: [redirectUri],
      response_types: ['code']
    })
  }

  /**
   * Créer un client Scolengo à partir d'un objet contenant les informations d'authentification.
   * Cet objet de configuration peut être généré à partir de l'utilitaire [scolengo-token](https://github.com/maelgangloff/scolengo-token).
   * La fonction `onTokenRefresh` est appellée lors du rafraichissement du jeton (pour éventuellement stocker en mémoire le nouveau tokenSet).
   * @param {AuthConfig} config Informations d'authentification
   * @param {SkolengoConfig} skolengoConfig Configuration optionnelle (stockage du jeton renouvellé, client HTTP personnalisé, gestion des erreurs Pronote, ...)
   * @example ```js
   * const {Skolengo} = require('scolengo-api')
   * const config = require('./config.json')
   * const user = await Skolengo.fromConfigObject(config)
   * ```
   * ```js
   * const {Skolengo} = require('scolengo-api')
   *
   * // 🚨 ATTENTION: Ne communiquez jamais vos jetons à un tiers. Ils vous sont strictement personnels. Si vous pensez que vos jetons ont été dérobés, révoquez-les immédiatement.
   * const config = {
   *   "tokenSet": {
   *     "access_token": "<access_token_here>",
   *     "id_token": "<id_token_here>",
   *     "refresh_token": "RT-<refresh_token_here>",
   *     "token_type": "bearer",
   *     "expires_at": 1234567890,
   *     "scope": "openid"
   *   },
   *   "school": {
   *     "id": "SKO-E-<school_id>",
   *     "name": "<school_name>",
   *     "addressLine1": "<school_address>",
   *     "addressLine2": null,
   *     "addressLine3": null,
   *     "zipCode": "<school_zip_code>",
   *     "city": "<school_city>",
   *     "country": "France",
   *     "homePageUrl": "<cas_login_url>",
   *     "emsCode": "<school_ems_code>",
   *     "emsOIDCWellKnownUrl": "<school_ems_oidc_well_known_url>"
   *   }
   * }
   * Skolengo.fromConfigObject(config).then(async user => {
   *   const infoUser = await user.getUserInfo()
   *   console.log(`Correctement authentifié sous l'identifiant ${infoUser.id}`)
   * })
   * ```
   */
  public static async fromConfigObject (config: AuthConfig, skolengoConfig?: Partial<SkolengoConfig>): Promise<Skolengo> {
    const oidClient = await Skolengo.getOIDClient(config.school)
    const tokenSet = new TokenSet(config.tokenSet)
    return new Skolengo(oidClient, config.school, tokenSet, skolengoConfig)
  }

  /**
   * Informations sur l'utilisateur actuellement authentifié (nom, prénom, date de naissance, adresse postale, courriel, téléphone, permissions, ...)
   * @param {string|undefined} userId Identifiant de l'utilisateur
   * @param {object} params Modifier les paramètres de la requête
   * @param {string[]} includes Ressources JSON:API à inclure
   * @async
   */
  public async getUserInfo (userId?: string, params?: object, includes: string[] = ['school', 'students', 'students.school', 'schools', 'prioritySchool']): Promise<User> {
    return deserialize((await this.request<DocumentObject>({
      url: `/users-info/${userId ?? this.tokenSet.claims().sub}`,
      responseType: 'json',
      params: {
        /*
                      fields: {
                        userInfo: 'lastName,firstName,photoUrl,externalMail,mobilephone,permissions',
                        school: 'name,timeZone,subscribedServices',
                        legalRepresentativeUserInfo: 'addressLines,postalCode,city,country,students',
                        studentUserInfo: 'className,dateOfBirth,regime,school',
                        student: 'firstName,lastName,photoUrl,className,dateOfBirth,regime,school'
                      },
                      */
        ...params,
        include: includes.join(',')
      }
    })
    ).data) as User
  }

  /**
   * Télécharger une pièce jointe.
   *
   * Une pièce jointe peut être un fichier inclu dans un courriel, une actualité de l'établissement ou un bulletin périodique.
   *
   * 🚨 ATTENTION: Dans cette requête, votre jeton est envoyé à l'URL du fichier. Assurez-vous que celle-ci provient bien de votre établissement.
   * @async
   * @example ```js
   * const {createWriteStream} = require('node:fs')
   * const {Skolengo} = require('scolengo-api')
   *
   * Skolengo.fromConfigObject(config).then(async user => {
   *   const student = 'ESKO-P-b2c86113-1062-427e-bc7f-0618cbd5d5ec'
   *   const bulletins = await user.getPeriodicReportsFiles(student)
   *   for(const bulletin of bulletins) {
   *     console.log(bulletin.name)
   *     (await user.downloadAttachment(bulletin)).pipe(createWriteStream(bulletin.name));
   *   }
   * })
   * ```
   * @param {Attachment} attachment La pièce jointe
   */
  public async downloadAttachment (attachment: Attachment): Promise<Stream> {
    return (await this.request<Stream>({
      url: attachment.url,
      responseType: 'stream'
    })
    ).data
  }

  /**
   * Récupérer toutes les actualités de l'établissement
   * @param {object} params Modifier les paramètres de la requête
   * @param {string[]} includes Ressources JSON:API à inclure
   * @async
   */
  public async getSchoolInfos (params?: object, includes: string[] = ['illustration', 'school', 'author', 'author.person', 'author.technicalUser', 'attachments']): Promise<SchoolInfo[]> {
    return deserialize((await this.request<DocumentObject>({
      url: '/schools-info',
      responseType: 'json',
      params: {
        include: includes.join(','),
        ...params
      }
    })
    ).data) as SchoolInfo[]
  }

  /**
   * Récupérer une actualité de l'établissement
   * @param {string} schoolInfoId Identifiant d'une actualité
   * @param {object} params Modifier les paramètres de la requête
   * @param {string[]} includes Ressources JSON:API à inclure
   * @async
   */
  public async getSchoolInfo (schoolInfoId: string = this.school.id, params?: object, includes: string[] = ['illustration', 'school', 'author', 'author.person', 'author.technicalUser', 'attachments']): Promise<SchoolInfo> {
    return deserialize((await this.request<DocumentObject>({
      url: `/schools-info/${schoolInfoId}`,
      responseType: 'json',
      params: {
        include: includes.join(','),
        ...params
      }
    })
    ).data) as SchoolInfo
  }

  /**
   * Statut des services d'évaluation (identifiant des périodes, ...)
   * @param {string} studentId Identifiant d'un étudiant
   * @param {number} limit Limite
   * @param {number} offset Offset
   * @param {object} params Modifier les paramètres de la requête
   * @param {string[]} includes Ressources JSON:API à inclure
   * @async
   */
  public async getEvaluationSettings (studentId: string = this.tokenSet.claims().sub, limit = 20, offset = 0, params?: object, includes: string[] = ['periods', 'skillsSetting', 'skillsSetting.skillAcquisitionColors']): Promise<EvaluationSettings[]> {
    return deserialize((await this.request<DocumentObject>({
      url: '/evaluations-settings',
      responseType: 'json',
      params: {
        filter: {
          'student.id': studentId
        },
        page: {
          limit,
          offset
        },
        include: includes.join(','),
        ...params
        /*
                      fields: {
                        evaluationsSetting: 'periodicReportsEnabled,skillsEnabled,evaluationsDetailsAvailable',
                        period: 'label,startDate,endDate',
                        skillsSetting: 'skillAcquisitionLevels,skillAcquisitionColors',
                        skillAcquisitionColors: 'colorLevelMappings'
                      }
                      */
      }
    })
    ).data) as EvaluationSettings[]
  }

  /**
   * Récupérer les notes d'un étudiant sur une période
   * @param {string} studentId Identifiant d'un étudiant
   * @param {string} periodId Identifiant de la période de notation
   * @param {number} limit Limite
   * @param {number} offset Offset
   * @param {object} params Modifier les paramètres de la requête
   * @param {string[]} includes Ressources JSON:API à inclure
   * @async
   */
  public async getEvaluation (studentId: string = this.tokenSet.claims().sub, periodId: string, limit = 20, offset = 0, params?: object, includes: string[] = ['subject', 'evaluations', 'evaluations.evaluationResult', 'evaluations.evaluationResult.subSkillsEvaluationResults', 'evaluations.evaluationResult.subSkillsEvaluationResults.subSkill', 'evaluations.subSkills', 'teachers']): Promise<Evaluation[]> {
    return deserialize((await this.request<DocumentObject>({
      url: '/evaluation-services',
      responseType: 'json',
      params: {
        filter: {
          'student.id': studentId,
          'period.id': periodId
        },
        page: {
          limit,
          offset
        },
        include: includes.join(','),
        ...params
        /*
                      fields: {
                        evaluationService: 'coefficient,average,studentAverage,scale',
                        subject: 'label,color',
                        evaluation: 'dateTime,coefficient,average,scale,evaluationResult,subSkills',
                        evaluationResult: 'mark,nonEvaluationReason,subSkillsEvaluationResults',
                        subSkillEvaluationResult: 'level,subSkill',
                        teacher: 'firstName,lastName,title',
                        subSkill: 'shortLabel'
                      }
                      */
      }
    })
    ).data) as Evaluation[]
  }

  /**
   * Récupérer le détail d'une note d'un étudiant
   * @param {string} studentId Identifiant d'un étudiant
   * @param {string} evaluationId Identifiant de la note
   * @param {object} params Modifier les paramètres de la requête
   * @param {string[]} includes Ressources JSON:API à inclure
   * @async
   */
  public async getEvaluationDetail (studentId: string = this.tokenSet.claims().sub, evaluationId: string, params?: object, includes: string[] = ['evaluationService', 'evaluationService.subject', 'evaluationService.teachers', 'subSubject', 'subSkills', 'evaluationResult', 'evaluationResult.subSkillsEvaluationResults', 'evaluationResult.subSkillsEvaluationResults.subSkill']): Promise<EvaluationDetail> {
    return deserialize((await this.request<DocumentObject>({
      url: `/evaluations/${evaluationId}`,
      responseType: 'json',
      params: {
        filter: {
          'student.id': studentId
        },
        include: includes.join(','),
        ...params
        /*
                      fields: {
                        evaluationService: 'subject,teachers',
                        subject: 'label,color',
                        subSubject: 'label',
                        evaluation: 'title,topic,dateTime,coefficient,min,max,average,scale',
                        evaluationResult: 'subSkillsEvaluationResults,nonEvaluationReason,mark,comment',
                        subSkill: 'shortLabel',
                        subSkillEvaluationResult: 'level,subSkill',
                        teacher: 'firstName,lastName,title'
                      }
                      */
      }
    })
    ).data) as EvaluationDetail
  }

  /**
   * Récupérer la liste des bilans périodiques disponibles pour un étudiant.
   * Pour chaque bulletin, une adresse est disponible pour le téléchargement.
   * @param {string} studentId Identifiant d'un étudiant
   * @param {number} limit Limite
   * @param {number} offset Offset
   * @param {object} params Modifier les paramètres de la requête
   * @param {string[]} includes Ressources JSON:API à inclure
   * @async
   * @example ```js
   * const {Skolengo} = require('scolengo-api')
   *
   * Skolengo.fromConfigObject(config).then(async user => {
   *   const bulletins = await getPeriodicReportsFiles('ESKO-P-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxx');
   *   console.log(bulletins)
   * })
   * ```
   */
  public async getPeriodicReportsFiles (studentId: string = this.tokenSet.claims().sub, limit = 20, offset = 0, params?: object, includes: string[] = ['period']): Promise<Attachment[]> {
    return deserialize((await this.request<DocumentObject>({
      url: '/periodic-reports-files',
      responseType: 'json',
      params: {
        filter: {
          'student.id': studentId
        },
        include: includes.join(','),
        page: {
          limit,
          offset
        },
        ...params
        /*
                  fields: {
                    periodicReportFile: 'name,mimeType,size,url,mimeTypeLabel'
                  }
                   */
      }
    })
    ).data) as Attachment[]
  }

  /**
   * Récupérer l'agenda d'un étudiant.
   * Il est possible de le convertir au format iCalendar.
   * @param {string} studentId Identifiant d'un étudiant
   * @param {string} startDate Date de début - Format : YYYY-MM-DD
   * @param {string} endDate Date de fin - Format : YYYY-MM-DD
   * @param {number} limit Limite
   * @param {number} offset Offset
   * @param {object} params Modifier les paramètres de la requête
   * @param {string[]} includes Ressources JSON:API à inclure
   * @async
   * @example ```js
   * const { writeFileSync } = require('node:fs')
   * const { Skolengo } = require('scolengo-api')
   *
   * Skolengo.fromConfigObject(config).then(async user => {
   *   const studentId = 'ESKO-P-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'
   *   const agenda = await user.getAgenda(studentId, '2023-05-01', '2023-05-30')
   *
   *   writeFileSync('export.ics', agenda.toICalendar())
   * })
   * ```
   */
  public async getAgenda (studentId: string = this.tokenSet.claims().sub, startDate: string, endDate: string, limit = 20, offset = 0, params?: object, includes: string[] = ['lessons', 'lessons.subject', 'lessons.teachers', 'homeworkAssignments', 'homeworkAssignments.subject']): Promise<AgendaResponse> {
    return new AgendaResponse(deserialize((await this.request<DocumentObject>({
      url: '/agendas',
      responseType: 'json',
      params: {
        include: includes.join(','),
        filter: {
          'student.id': studentId,
          date: {
            GE: startDate,
            LE: endDate
          }
        },
        page: {
          limit,
          offset
        },
        ...params
        /*
                  fields: {
                    lesson: 'title,startDateTime,endDateTime,location,canceled,subject,teachers',
                    homework: 'title,done,dueDateTime,subject',
                    cateringService: 'title,startDateTime,endDateTime',
                    teacher: 'firstName,lastName,title',
                    subject: 'label,color'
                  }
                   */
      }
    })
    ).data) as Agenda[])
  }

  /**
   * Récupérer les données d'un cours/leçon
   * @param {string} studentId Identifiant d'un étudiant
   * @param {string} lessonId Identifiant d'un cours/leçon
   * @param {object} params Modifier les paramètres de la requête
   * @param {string[]} includes Ressources JSON:API à inclure
   * @async
   */
  public async getLesson (studentId: string = this.tokenSet.claims().sub, lessonId: string, params?: object, includes: string[] = ['teachers', 'contents', 'contents.attachments', 'subject', 'toDoForTheLesson', 'toDoForTheLesson.subject', 'toDoAfterTheLesson', 'toDoAfterTheLesson.subject']): Promise<Lesson> {
    return deserialize((await this.request<DocumentObject>({
      url: `/lessons/${lessonId}`,
      responseType: 'json',
      params: {
        include: includes.join(','),
        filter: {
          'student.id': studentId
        },
        ...params
      }
    })
    ).data) as Lesson
  }

  /**
   * Récupérer les devoirs d'un étudiant
   * @param {string} studentId Identifiant d'un étudiant
   * @param {string} startDate Date de début - Format : YYYY-MM-DD
   * @param {string} endDate Date de fin - Format : YYYY-MM-DD
   * @param {number} limit Limite
   * @param {number} offset Offset
   * @param {object} params Modifier les paramètres de la requête
   * @param {string[]} includes Ressources JSON:API à inclure
   * @example ```js
   * const {Skolengo} = require('scolengo-api')
   *
   * Skolengo.fromConfigObject(config).then(async user => {
   *   const startDate = new Date().toISOString().split('T')[0] // Aujourd'hui
   *   const endDate = new Date(Date.now() + 15 * 24 * 60 * 60 * 1e3).toISOString().split('T')[0] // Aujourd'hui + 15 jours
   *   const homework = await user.getHomeworkAssignments(user.tokenSet.claims().sub, startDate, endDate)
   *
   *   console.log("Voici les exercices à faire pour les 2 prochaines semaines :", homework)
   * })
   * ```
   * @async
   */
  public async getHomeworkAssignments (studentId: string = this.tokenSet.claims().sub, startDate: string, endDate: string, limit = 20, offset = 0, params?: object, includes: string[] = ['subject', 'teacher', 'teacher.person']): Promise<HomeworkAssignment[]> {
    return deserialize((await this.request<DocumentObject>({
      url: '/homework-assignments',
      responseType: 'json',
      params: {
        include: includes.join(','),
        filter: {
          'student.id': studentId,
          dueDate: {
            GE: startDate,
            LE: endDate
          }
        },
        page: {
          limit,
          offset
        },
        fields: {
          homework: 'title,done,dueDateTime',
          subject: 'label,color'
        },
        ...params
      }
    })
    ).data) as HomeworkAssignment[]
  }

  /**
   * Récupérer les données d'un devoir
   * @param {string} studentId Identifiant d'un étudiant
   * @param {string} homeworkId Identifiant du devoir
   * @param {object} params Modifier les paramètres de la requête
   * @param {string[]} includes Ressources JSON:API à inclure
   * @example ```js
   * const {Skolengo} = require('scolengo-api')
   *
   * const user = await Skolengo.fromConfigObject(config)
   *
   * user.getHomeworkAssignment(user.tokenSet.claims().sub, "123456").then(e => {
   *     console.log(`Pour le ${new Date(e.dueDateTime).toLocaleString()} :`)
   *     console.log(`> ${e.title} (${e.subject.label})`)
   *     console.log(e.html)
   * })
   *
   * ```
   * @async
   */
  public async getHomeworkAssignment (studentId: string = this.tokenSet.claims().sub, homeworkId: string, params?: object, includes: string[] = ['subject', 'teacher', 'pedagogicContent', 'individualCorrectedWork', 'individualCorrectedWork.attachments', 'individualCorrectedWork.audio', 'commonCorrectedWork', 'commonCorrectedWork.attachments', 'commonCorrectedWork.audio', 'commonCorrectedWork.pedagogicContent', 'attachments', 'audio', 'teacher.person']): Promise<HomeworkAssignment> {
    return deserialize((await this.request<DocumentObject>({
      url: `/homework-assignments/${homeworkId}`,
      responseType: 'json',
      params: {
        include: includes.join(','),
        filter: {
          'student.id': studentId
        },
        fields: {
          homework: 'title,done,dueDateTime',
          subject: 'label,color'
        },
        ...params
      }
    })
    ).data) as HomeworkAssignment
  }

  /**
   * Modifier le statut d'un travail à faire
   * @param {string} studentId Identifiant d'un étudiant
   * @param {string} homeworkId Identifiant d'un devoir à modifier
   * @param {Partial<HomeworkAssignment>} attributes Devoir modifié
   * @param {object} params Modifier les paramètres de la requête
   * @param {string[]} includes Ressources JSON:API à inclure
   * @example ```js
   * const {Skolengo} = require('scolengo-api')
   *
   * const user = await Skolengo.fromConfigObject(config)
   * user.patchHomeworkAssignment('ESKO-P-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx', '123456', { done: true }).then(hmw => {
   *   console.log(`Le travail "${hmw.title}" a été marqué ${hmw.done ? 'fait' : 'à faire'}.`)
   * })
   * ```
   * @async
   */
  public async patchHomeworkAssignment (studentId: string = this.tokenSet.claims().sub, homeworkId: string, attributes: Partial<HomeworkAssignment>, params?: object, includes: string[] = ['subject', 'teacher', 'pedagogicContent', 'individualCorrectedWork', 'individualCorrectedWork.attachments', 'individualCorrectedWork.audio', 'commonCorrectedWork', 'commonCorrectedWork.attachments', 'commonCorrectedWork.audio', 'commonCorrectedWork.pedagogicContent', 'attachments', 'audio', 'teacher.person']): Promise<HomeworkAssignment> {
    return deserialize((await this.request<DocumentObject>({
      method: 'patch',
      url: `/homework-assignments/${homeworkId}`,
      responseType: 'json',
      params: {
        include: includes.join(','),
        filter: {
          'student.id': studentId
        },
        ...params
      },
      data: {
        data: {
          type: 'homework',
          id: homeworkId,
          attributes
        }
      }
    })
    ).data) as HomeworkAssignment
  }

  /**
   * Récupérer les informations du service de communication (identifiants des dossiers, ...)
   * @param {string|undefined} userId Identifiant d'un utilisateur
   * @param {object} params Modifier les paramètres de la requête
   * @param {string[]} includes Ressources JSON:API à inclure
   * @async
   */
  public async getUsersMailSettings (userId?: string, params?: object, includes: string[] = ['signature', 'folders', 'folders.parent', 'contacts', 'contacts.person', 'contacts.personContacts']): Promise<UsersMailSettings> {
    return deserialize((await this.request<DocumentObject>({
      url: `/users-mail-settings/${userId ?? this.tokenSet.claims().sub}`,
      params: {
        include: includes.join(','),
        ...params
        /*
                        fields: {
                          personContact: 'person,linksWithUser',
                          groupContact: 'label,personContacts,linksWithUser',
                          person: 'firstName,lastName,title,photoUrl',
                          userMailSetting: 'maxCharsInParticipationContent,maxCharsInCommunicationSubject',
                          signature: 'content',
                          folder: 'name,position,type,parent'
                        }
                        */
      },
      responseType: 'json'
    })
    ).data) as UsersMailSettings
  }

  /**
   * Récupérer les communication d'un dossier
   * @param {string} folderId Identifiant d'un dossier
   * @param {number} limit Limite
   * @param {number} offset Offset
   * @param {object} params Modifier les paramètres de la requête
   * @param {string[]} includes Ressources JSON:API à inclure
   * @async
   */
  public async getCommunicationsFolder (folderId: string, limit = 10, offset = 0, params?: object, includes: string[] = ['lastParticipation', 'lastParticipation.sender', 'lastParticipation.sender.person', 'lastParticipation.sender.technicalUser']): Promise<Communication[]> {
    return deserialize((await this.request<DocumentObject>({
      url: '/communications',
      responseType: 'json',
      params: {
        filter: {
          'folders.id': folderId
        },
        include: includes.join(','),
        page: {
          limit,
          offset
        },
        ...params
      }
    })
    ).data) as Communication[]
  }

  /**
   * Récupérer une communication à partir de son identifiant.
   * @param {string} communicationId Identifiant d'une communication
   * @param {object} params Modifier les paramètres de la requête
   * @async
   */
  public async getCommunication (communicationId: string, params?: object): Promise<Communication> {
    return deserialize((await this.request<DocumentObject>({
      url: `communications/${communicationId}`,
      params,
      responseType: 'json'
    })
    ).data) as Communication
  }

  /**
   * Récupérer les participations d'un fil de discussion (communication)
   * Marque la communication comme lue.
   * @param {string} communicationId Identifiant d'une communication
   * @param {object} params Modifier les paramètres de la requête
   * @param {string[]} includes Ressources JSON:API à inclure
   * @async
   */
  public async getCommunicationParticipations (communicationId: string, params?: object, includes: string[] = ['sender', 'sender.person', 'sender.technicalUser', 'attachments']): Promise<Participation[]> {
    return deserialize((await this.request<DocumentObject>({
      url: `communications/${communicationId}/participations`,
      responseType: 'json',
      params: {
        include: includes.join(','),
        ...params
      }
    })
    ).data) as Participation[]
  }

  /**
   * Récupérer tous les participants d'un fil de discussion (communication)
   * @param {string} communicationId Identifiant d'une communication
   * @param {boolean} fromGroup Afficher le détail des groupes
   * @param {object} params Modifier les paramètres de la requête
   * @param {string[]} includes Ressources JSON:API à inclure
   * @async
   */
  public async getCommunicationParticipants (communicationId: string, fromGroup = true, params?: object, includes: string[] = ['person', 'technicalUser']): Promise<any> {
    return deserialize((await this.request<DocumentObject>({
      url: `communications/${communicationId}/participants`,
      responseType: 'json',
      params: {
        include: includes.join(','),
        filter: { fromGroup },
        ...params
      }
    })
    ).data)
  }

  /**
   * Déplacer une communication dans un dossier
   * @param {string} communicationId Identifiant d'une communication
   * @param folders Liste contenant l'identifiant du dossier
   * @param {string|undefined} userId Identifiant de l'utilisateur
   * @param {object} params Modifier les paramètres de la requête
   * @async
   */
  public async patchCommunicationFolders (communicationId: string, folders: Array<BaseObject<'folders'>>, userId?: string, params?: object): Promise<void> {
    return (await this.request({
      url: `communications/${communicationId}/relationships/folders`,
      method: 'patch',
      responseType: 'json',
      params: {
        filter: {
          'user.id': userId ?? this.tokenSet.claims().sub
        },
        ...params
      },
      data: { data: folders }
    })
    ).data
  }

  /**
   * Envoyer un message dans un nouveau fil de discussion
   * @param {Partial<Communication>} newCommunication La nouvelle communication
   * @param {object} params Modifier les paramètres de la requête
   * @async
   */
  public async postCommunication (newCommunication: Partial<Communication>, params?: object): Promise<Communication> {
    return deserialize((await this.request<DocumentObject>({
      url: 'communications',
      method: 'post',
      params,
      responseType: 'json',
      data: {
        data: newCommunication
      }
    })
    ).data) as Communication
  }

  /**
   * Envoyer un message dans un fil de discussion existant
   * @param {Partial<Participation>} participation La nouvelle participation
   * @param {object} params Modifier les paramètres de la requête
   * @async
   */
  public async postParticipation (participation: Partial<Participation>, params?: object): Promise<Participation> {
    return deserialize((await this.request<DocumentObject>({
      url: 'participations',
      method: 'post',
      responseType: 'json',
      params,
      data: {
        data: participation
      }
    })
    ).data) as Participation
  }

  /**
   * Récupérer les absences et retards d'un étudiant.
   * Il est possible d'exporter les absences au format CSV.
   * @param {string} studentId Identifiant d'un étudiant
   * @param {number} limit Limite
   * @param {offset} offset Offset
   * @param {object} params Modifier les paramètres de la requête
   * @param {string[]} includes Ressources JSON:API à inclure
   * @async
   * @example ```js
   * const { writeFileSync } = require('node:fs')
   * const { Skolengo } = require('scolengo-api')
   *
   * Skolengo.fromConfigObject(config).then(async user => {
   *   const studentId = 'ESKO-P-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'
   *   const absenceFiles = await user.getAbsenceFiles(studentId)
   *
   *   writeFileSync('export.csv', agenda.toCSV())
   * })
   * ```
   */
  public async getAbsenceFiles (studentId: string = this.tokenSet.claims().sub, limit = 20, offset = 0, params?: object, includes: string[] = ['currentState', 'currentState.absenceReason', 'currentState.absenceRecurrence']): Promise<AbsenceFilesResponse> {
    return new AbsenceFilesResponse(deserialize((await this.request<DocumentObject>({
      url: '/absence-files',
      responseType: 'json',
      params: {
        filter: {
          'student.id': studentId
        },
        page: {
          limit,
          offset
        },
        include: includes.join(','),
        ...params
      }
    })
    ).data) as AbsenceFile[])
  }

  /**
   * Récupérer les détails d'une absence
   * @param {string} folderId Identifiant d'un dossier
   * @param {object} params Modifier les paramètres de la requête
   * @param {string[]} includes Ressources JSON:API à inclure
   * @async
   */
  public async getAbsenceFile (folderId: string, params?: object, includes: string[] = ['currentState', 'currentState.absenceReason', 'currentState.absenceRecurrence', 'history', 'history.creator']): Promise<AbsenceFile> {
    return deserialize((await this.request<DocumentObject>({
      url: `/absence-files/${folderId}`,
      responseType: 'json',
      params: {
        include: includes,
        ...params
      }
    })
    ).data) as AbsenceFile
  }

  /**
   * Justifier une absence avec motif et commentaire.
   * _PS: La requête n'a pas été testée._
   * @param {string} folderId Identifiant d'un dossier
   * @param {string} reasonId Identifiant d'un motif
   * @param {string} comment Commentaire
   * @param {object} params Modifier les paramètres de la requête
   */
  public async postAbsenceFileState (folderId: string, reasonId: string, comment: string, params?: object): Promise<AbsenceState> {
    return deserialize((await this.request<DocumentObject>({
      url: '/absence-files-states',
      responseType: 'json',
      params,
      data: serialize({
        comment,
        absenceFile: {
          id: folderId
        },
        absenceReason: {
          id: reasonId
        }
      }, 'absenceFileState', {
        relationships: ['absenceFile', 'absenceReason']
      })
    })).data) as AbsenceState
  }

  /**
   * Récupérer la liste des motifs possibles d'absence.
   * Cette liste peut être différente pour chaque établissement.
   * @param {number} limit Limite
   * @param {number} offset Offset
   * @param {object} params Modifier les paramètres de la requête
   * @async
   * @example ```js
   * const {Skolengo} = require('scolengo-api')
   *
   * Skolengo.fromConfigObject(config).then(async user => {
   *   user.getAbsenceReasons().then(response => {
   *     console.log(`Liste des motifs: ${response.map(r => r.longLabel).join(';')}`)
   *   })
   * })

   * ```
   */
  public async getAbsenceReasons (limit = 20, offset = 0, params?: object): Promise<AbsenceReason[]> {
    return deserialize((await this.request<DocumentObject>({
      url: '/absence-reasons',
      responseType: 'json',
      params: {
        page: {
          limit,
          offset
        },
        ...params
      }
    })
    ).data) as AbsenceReason[]
  }

  /**
   * Demande un renouvellement du jeu de jeton (tokenSet)
   * @param {boolean} triggerListener Si oui, appeler la fonction onTokenRefresh
   */
  public async refreshToken (triggerListener: boolean = true): Promise<TokenSet> {
    const newTokenSet = await this.oidClient.refresh(this.tokenSet)

    if (triggerListener) this.config.onTokenRefresh(newTokenSet)

    this.tokenSet = newTokenSet
    return newTokenSet
  }

  /**
   * Gérer l'erreur *PRONOTE_RESOURCES_NOT_READY* obtenue lorsque Skolengo tente d'obtenir les dernières notes d'un élève.
   * Ce comportement peut être activé en modifiant le paramètre optionnel correspondant.
   * @param {AxiosRequestConfig} requestConfig
   * @param {number} maxRetries
   * @private
   */
  private async onPronoteError<T, R, D>(requestConfig: AxiosRequestConfig, maxRetries: number = 5): Promise<R> {
    for (let i = 0; i < maxRetries - 1; i++) {
      try {
        return await this.config.httpClient.request<T, R, D>(requestConfig)
      } catch (e) {
        const err = e as Error
        if (err.name !== 'PRONOTE_RESOURCES_NOT_READY') throw err
      }
    }
    return await this.config.httpClient.request<T, R, D>(requestConfig)
  }

  /**
   * Effectuer une requête authentifiée auprès de l'API.
   * Si la requête échoue, on rafraichit le jeton et on retente.
   * @param {AxiosRequestConfig} config
   * @private
   */
  private async request<T = any, R = AxiosResponse<T>, D = any> (config: AxiosRequestConfig): Promise<R> {
    const axiosConfig: AxiosRequestConfig = {
      ...config,
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${this.tokenSet.access_token as string}`,
        'X-Skolengo-Date-Format': 'utc',
        'X-Skolengo-School-Id': this.school.id,
        'X-Skolengo-Ems-Code': this.school.emsCode
      }
    }
    try {
      return await this.config.httpClient.request<T, R, D>(axiosConfig)
    } catch (e) {
      const error = e as AxiosError<any>
      const response = error.response
      if (response === undefined) throw error
      if (response.status === 401) {
        const newTokenSet = await this.refreshToken()
        return await this.config.httpClient.request<T, R, D>({
          ...axiosConfig,
          headers: {
            Authorization: `Bearer ${newTokenSet.access_token as string}`,
            'X-Skolengo-Date-Format': 'utc',
            'X-Skolengo-School-Id': this.school.id,
            'X-Skolengo-Ems-Code': this.school.emsCode
          }
        })
      }
      if (response.data.errors instanceof Array && response.data.errors.length > 0) {
        const [firstError] = response.data.errors as SkolengoErrorBody[]
        const skolengoError = new SkolengoError(firstError)
        if (this.config.handlePronoteError && skolengoError.name === 'PRONOTE_RESOURCES_NOT_READY') return await this.onPronoteError<T, R, D>(axiosConfig)
        throw skolengoError
      }
      throw error
    }
  }
}

export { TokenSet }
