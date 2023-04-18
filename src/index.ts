import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import { Client, Issuer, TokenSet, TokenSetParameters } from 'openid-client'
import { CurrentConfig } from './models/App/CurrentConfig'
import { SkolengoResponse } from './models/Globals'
import { School } from './models/School/School'
import { User, UserIncluded } from './models/App/User'
import { SchoolInfo, SchoolInfoIncluded } from './models/School/SchoolInfo'
import { AuthConfig } from './models/Auth'
import { Evaluation, EvaluationIncluded } from './models/Evaluation/Evaluation'
import { EvaluationDetail, EvaluationDetailIncluded } from './models/Evaluation/EvaluationDetail'
import { EvaluationSettings, EvaluationSettingsIncluded } from './models/Evaluation/EvaluationSettings'
import { UsersMailSettings, UsersMailSettingsIncluded } from './models/Messagerie/UsersMailSettings'
import { Communication, CommunicationIncluded } from './models/Messagerie/Communication'
import { Participation, ParticipationIncluded } from './models/Messagerie/Participation'
import { Homework, HomeworkAssignment, HomeworkAssignmentIncluded } from './models/Homework/HomeworkAssignment'
import { Agenda, AgendaIncluded } from './models/Agenda/Agenda'
import { Lesson, LessonIncluded } from './models/Agenda/Lesson'
export { TokenSet } from 'openid-client'
const BASE_URL = 'https://api.skolengo.com/api/v1/bff-sko-app'

const OID_CLIENT_ID = 'U2tvQXBwLlByb2QuMGQzNDkyMTctOWE0ZS00MWVjLTlhZjktZGY5ZTY5ZTA5NDk0' // base64 du client ID de l'app mobile
const OID_CLIENT_SECRET = 'N2NiNGQ5YTgtMjU4MC00MDQxLTlhZTgtZDU4MDM4NjkxODNm' // base64 du client Secret de l'app mobile

/**
 * Support non officiel de l'API Skolengo. Il s'agit de l'API utilisée par la nouvelle application mobile éponyme.
 * Pour utiliser cette librairie, il est nécessaire de s'authentifier auprès des serveurs de Skolengo. Pour obtenir des jetons de connexion, vous pouvez utiliser [scolengo-token](https://github.com/maelgangloff/scolengo-token).
 * Ce module est destiné à devenir le successeur de [kdecole-api](https://github.com/maelgangloff/kdecole-api) dans l'éventualité où l'accès à l'ancienne API serait définitivement clos.
 *
 *
 * Pour participer et se tenir informé, **rejoins le serveur Discord: https://discord.gg/9u69mxsFT6**
 *
 * **Remarques importantes:**
 *  - Il est clairement mentionné que cette librairie est n'est pas officielle.
 *  - Ce module n'est pas une contrefaçon car il n'existe pas de module similaire édité officiellement.
 *  - Les utilisateurs ne peuvent accéder qu'à leurs propres données. Ils sont soumis au même processus d'authentification que celui implémenté dans l'application.
 *  - Les données des utilisateurs ne sont pas davantage exposées puisqu'un utilisateur ne peut accéder qu'à ses propres données. Personne n'a le contrôle sur cette limitation qui est inhérente au fonctionnement de l'API des serveurs de Skolengo.
 *  - Cette librairie ne se suffit pas à elle-même pour fonctionner. Il est nécessaire de l'importer dans un projet et l'utilisateur est le seul responsable de son code et des éventuelles conséquences.
 *  - Tout utilisateur de cette librairie a *a priori* lu l'entièreté du fichier de licence GPLv3 disponible publiquement [LICENSE](https://github.com/maelgangloff/scolengo-api/blob/master/LICENSE) ainsi que de ce présent fichier de présentation.
 *  - Tout utilisateur de cette librairie a *a priori* lu l'entièreté du code de ce projet avant toute utilisation.
 *  - Eu égard l'ensemble de ces remarques, les contributeurs et *a fortiori* l'auteur du projet ne peuvent être tenus comme responsables de tout dommage potentiel.
 *
 *
 * **Liste des ENT utilisant le CMS Skolengo :**
 * | Nom usuel de l'ENT           | Code ENT | URL OpenID Connect Discovery                               |
 * |------------------------------|----------|------------------------------------------------------------|
 * | Mon Bureau Numérique         | gdest    | https://sso.monbureaunumerique.fr/oidc/.well-known         |
 * | Mon ENT Occitanie            |          | https://sso.mon-ent-occitanie.fr/oidc/.well-known          |
 * | Arsène 76                    |          | https://sso.arsene76.fr/oidc/.well-known                   |
 * | ENT27                        |          | https://sso.ent27.fr/oidc/.well-known                      |
 * | ENT Creuse                   |          | https://sso.entcreuse.fr/oidc/.well-known                  |
 * | ENT Auvergne-Rhône-Alpes     | rra      | https://sso.ent.auvergnerhonealpes.fr/oidc/.well-known     |
 * | Agora 06                     |          | https://sso.agora06.fr/oidc/.well-known                    |
 * | CyberCollèges 42             | cg42     | https://sso.cybercolleges42.fr/oidc/.well-known            |
 * | eCollège 31 Haute-Garonne    |          | https://sso.ecollege.haute-garonne.fr/oidc/.well-known     |
 * | Mon collège en Val d'Oise    | cg95     | https://sso.moncollege.valdoise.fr/oidc/.well-known        |
 * | Webcollège Seine-Saint-Denis |          | https://sso.webcollege.seinesaintdenis.fr/oidc/.well-known |
 * | Eclat-BFC                    | bfc      | https://sso.eclat-bfc.fr/oidc/.well-known                  |
 * | @ucollège84                  |          | https://sso.aucollege84.vaucluse.fr/oidc/.well-known       |
 * | ENT Val de Marne             | cg94     | https://sso.entvaldemarne.skolengo.com/oidc/.well-known    |
 * | Skolengo 1                   | metab    | https://sso1.skolengo.com/oidc/.well-known                 |
 * | Skolengo 2                   | metabam  | https://sso2.skolengo.com/oidc/.well-known                 |
 * | Schulportal Ostbelgien       |          | https://sso.schulen.be/oidc/.well-known                    |
 */
export class Skolengo {
  private httpClient: AxiosInstance
  private oidClient: Client
  public readonly school: School
  public tokenSet: TokenSet

  /**
   * Il est possible de s'authentifier en possédant au prélable des jetons OAuth 2.0
   * @example ```js
   * const {Skolengo, TokenSet} = require('scolengo-api')
   *
   * Skolengo.searchSchool('Lycée Louise Weiss').then(async schools => {
   *   if(!schools.data.length) throw new Error("Aucun établissement n'a été trouvé.")
   *   const school = schools.data[0]
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
   *   console.log(`Correctement authentifié sous l'identifiant ${infoUser.data.id}`)
   * })
   *
   * ```
   * @param {Client} oidClient Un client OpenID Connect
   * @param {School} school Etablissement
   * @param {TokenSet} tokenSet Jetons d'authentification OpenID Connect
   */
  public constructor (oidClient: Client, school: School, tokenSet: TokenSet) {
    this.oidClient = oidClient
    this.school = school
    this.tokenSet = tokenSet
    this.httpClient = axios.create({
      baseURL: BASE_URL,
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${tokenSet.access_token}`,
        'X-Skolengo-Date-Format': 'utc',
        'X-Skolengo-School-Id': school.id,
        'X-Skolengo-Ems-Code': school.attributes.emsCode
      }
    })
  }

  /**
   * Informations sur l'utilisateur actuellement authentifié (nom, prénom, date de naissance, adresse postale, courriel, téléphone, permissions, ...)
   * @param {string|undefined} userId Identifiant de l'utilisateur
   */
  public async getUserInfo (userId?: string): Promise<SkolengoResponse<User, UserIncluded>> {
    return (await this.request<SkolengoResponse<User, UserIncluded>>({
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
        include: 'school,students,students.school'
      }
    })
    ).data
  }

  /**
   * Statut des services d'évaluation (identifiant des périodes, ...)
   * @param {string} studentId Identifiant d'un étudiant
   */
  public async getEvaluationSettings (studentId: string): Promise<SkolengoResponse<EvaluationSettings[], EvaluationSettingsIncluded>> {
    return (await this.request<SkolengoResponse<EvaluationSettings[], EvaluationSettingsIncluded>>({
      url: '/evaluations-settings',
      responseType: 'json',
      params: {
        filter: {
          'student.id': studentId
        },
        include: 'periods,skillsSetting,skillsSetting.skillAcquisitionColors'
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
    ).data
  }

  /**
   * Récupérer les notes d'un étudiant sur une période
   * @param {string} studentId Identifiant d'un étudiant
   * @param {string} periodId Identifiant de la période de notation
   */
  public async getEvaluation (studentId: string, periodId: string): Promise<SkolengoResponse<Evaluation[], EvaluationIncluded>> {
    return (await this.request<SkolengoResponse<Evaluation[], EvaluationIncluded>>({
      url: '/evaluation-services',
      responseType: 'json',
      params: {
        filter: {
          'student.id': studentId,
          'period.id': periodId
        },
        include: 'subject,evaluations,evaluations.evaluationResult,evaluations.evaluationResult.subSkillsEvaluationResults,evaluations.evaluationResult.subSkillsEvaluationResults.subSkill,evaluations.subSkills,teachers'
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
    ).data
  }

  /**
   * Récupérer le détail d'une note d'un étudiant
   * @param {string} studentId Identifiant d'un étudiant
   * @param {string} markId Identifiant de la note
   */
  public async getEvaluationDetail (studentId: string, markId: string): Promise<SkolengoResponse<EvaluationDetail, EvaluationDetailIncluded>> {
    return (await this.request<SkolengoResponse<EvaluationDetail, EvaluationDetailIncluded>>({
      url: `/evaluations/${markId}`,
      responseType: 'json',
      params: {
        filter: {
          'student.id': studentId
        },
        include: 'evaluationService,evaluationService.subject,evaluationService.teachers,subSubject,subSkills,evaluationResult,evaluationResult.subSkillsEvaluationResults,evaluationResult.subSkillsEvaluationResults.subSkill'
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
    ).data
  }

  /**
   * Récupérer les devoirs d'un étudiant
   * @param {string} studentId Identifiant d'un étudiant
   * @param {string} startDate Date de début - Format : YYYY-MM-DD
   * @param {string} endDate Date de fin - Format : YYYY-MM-DD
  */
  public async getHomeworkAssignments (studentId: string, startDate: string, endDate: string): Promise<SkolengoResponse<HomeworkAssignment[], HomeworkAssignmentIncluded>> {
    return (await this.request<SkolengoResponse<HomeworkAssignment[], HomeworkAssignmentIncluded>>({
      url: '/homework-assignments',
      responseType: 'json',
      params: {
        include: 'subject,teacher,attachments,teacher.person',
        filter: {
          'student.id': studentId,
          dueDate: {
            GE: startDate,
            LE: endDate
          }
        }
      }
    })
    ).data
  }

  /**
   * Récupérer les données d'un devoir
   * @param {string} studentId Identifiant d'un étudiant
   * @param {string} homeworkId Identifiant du devoir
   */
  public async getHomeworkAssignment (studentId: string, homeworkId: string): Promise<SkolengoResponse<HomeworkAssignment, HomeworkAssignmentIncluded>> {
    return (await this.request<SkolengoResponse<HomeworkAssignment, HomeworkAssignmentIncluded>>({
      url: `/homework-assignments/${homeworkId}`,
      responseType: 'json',
      params: {
        include: 'subject,teacher,pedagogicContent,individualCorrectedWork,individualCorrectedWork.attachments,individualCorrectedWork.audio,commonCorrectedWork,commonCorrectedWork.attachments,commonCorrectedWork.audio,commonCorrectedWork.pedagogicContent,attachments,audio,teacher.person',
        filter: {
          'student.id': studentId
        }
      }
    })
    ).data
  }

  /**
   * Modifier le statut d'un travail à faire
   * @param {string} studentId Identifiant d'un étudiant
   * @param {string} homeworkId Identifiant d'un devoir
   * @param {Homework} attributes Attributs du devoir à modifier
   * @example ```js
   * const {Skolengo} = require('scolengo-api')
   *
   * const user = await Skolengo.fromConfigObject(config)
   * user.patchHomeWorkAssignment('ESKO-P-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx', '123456', { done: true }).then(hmw => {
   *   console.log(`Le travail "${hmw.data.attributes.title}" a été marqué ${hmw.data.attributes.done ? 'fait' : 'à faire'}.`)
   * })
   * ```
   */
  public async patchHomeWorkAssignment (studentId: string, homeworkId: string, attributes: Partial<Homework> & {done: boolean}): Promise<SkolengoResponse<HomeworkAssignment, HomeworkAssignmentIncluded>> {
    return (await this.request<SkolengoResponse<HomeworkAssignment, HomeworkAssignmentIncluded>>({
      method: 'patch',
      url: `/homework-assignments/${homeworkId}`,
      responseType: 'json',
      params: {
        include: 'subject,teacher,pedagogicContent,individualCorrectedWork,individualCorrectedWork.attachments,individualCorrectedWork.audio,commonCorrectedWork,commonCorrectedWork.attachments,commonCorrectedWork.audio,commonCorrectedWork.pedagogicContent,attachments,audio,teacher.person',
        filter: {
          'student.id': studentId
        }
      },
      data: {
        data: {
          type: 'homework',
          id: homeworkId,
          attributes
        }
      }
    })
    ).data
  }

  /**
   * Récupérer l'agenda d'un étudiant
   * @param {string} studentId Identifiant d'un étudiant
   * @param {string} startDate Date de début - Format : YYYY-MM-DD
   * @param {string} endDate Date de fin - Format : YYYY-MM-DD
   */
  public async getAgenda (studentId: string, startDate: string, endDate: string): Promise<SkolengoResponse<Agenda[], AgendaIncluded>> {
    return (await this.request<SkolengoResponse<Agenda[], AgendaIncluded>>({
      url: '/agendas',
      responseType: 'json',
      params: {
        include: 'lessons,lessons.subject,lessons.teachers,homeworkAssignments,homeworkAssignments.subject',
        filter: {
          'student.id': studentId,
          date: {
            GE: startDate,
            LE: endDate
          }
        }
      }
    })
    ).data
  }

  /**
   * Récupérer les données d'un cours/leçon
   * @param {string} studentId Identifiant d'un étudiant
   * @param {string} lessonId Identifiant d'un cours/leçon
   */
  public async getLesson (studentId: string, lessonId: string): Promise<SkolengoResponse<Lesson, LessonIncluded>> {
    return (await this.request<SkolengoResponse<Lesson, LessonIncluded>>({
      url: `/lessons/${lessonId}`,
      responseType: 'json',
      params: {
        include: 'teachers,contents,contents.attachments,subject,toDoForTheLesson,toDoForTheLesson.subject,toDoAfterTheLesson,toDoAfterTheLesson.subject',
        filter: {
          'student.id': studentId
        }
      }
    })
    ).data
  }

  /**
   * Récupérer toutes les actualités de l'établissement
   */
  public async getSchoolInfos (): Promise<SkolengoResponse<SchoolInfo[], SchoolInfoIncluded>> {
    return (await this.request<SkolengoResponse<SchoolInfo[], SchoolInfoIncluded>>({
      url: '/schools-info',
      responseType: 'json',
      params: {
        include: 'illustration,school,author,author.person,author.technicalUser,attachments'
      }
    })
    ).data
  }

  /**
   * Récupérer une actualité de l'établissement
   * @param {string} schoolInfoId Identifiant d'une actualité
   */
  public async getSchoolInfo (schoolInfoId: string): Promise<SkolengoResponse<SchoolInfo, SchoolInfoIncluded>> {
    return (await this.request<SkolengoResponse<SchoolInfo, SchoolInfoIncluded>>({
      url: `/schools-info/${schoolInfoId}`,
      responseType: 'json',
      params: {
        include: 'illustration,school,author,author.person,author.technicalUser,attachments'
      }
    })
    ).data
  }

  /**
   * Récupérer les informations du service de communication (identifiants des dossiers, ...)
   * @param {string|undefined} userId Identifiant d'un utilisateur
   */
  public async getUsersMailSettings (userId?: string): Promise<SkolengoResponse<UsersMailSettings, UsersMailSettingsIncluded>> {
    return (await this.request<SkolengoResponse<UsersMailSettings, UsersMailSettingsIncluded>>({
      url: `/users-mail-settings/${userId ?? this.tokenSet.claims().sub}`,
      params: {
        include: 'signature,folders,folders.parent,contacts,contacts.person,contacts.personContacts'
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
    ).data
  }

  /**
   * Récupérer les communication d'un dossier
   * @param {string} folderId Identifiant d'un dossier
   * @param {number|undefined} limit Nombre max d'éléments
   * @param {number|undefined} offset Offset
   */
  public async getCommunicationsFolder (folderId: string, limit = 10, offset = 0): Promise<SkolengoResponse<Communication[], CommunicationIncluded>> {
    return (await this.request<SkolengoResponse<Communication[], CommunicationIncluded>>({
      url: '/communications',
      responseType: 'json',
      params: {
        filter: {
          'folders.id': folderId
        },
        include: 'lastParticipation,lastParticipation.sender,lastParticipation.sender.person,lastParticipation.sender.technicalUser',
        page: { limit, offset }
      }
    })
    ).data
  }

  /**
   * Récupérer les participations d'un fil de discussion (communication)
   * @param {string} communicationId Identifiant d'une communication
   */
  public async getCommunicationParticipations (communicationId: string): Promise<SkolengoResponse<Participation[], ParticipationIncluded>> {
    return (await this.request<SkolengoResponse<Participation[], ParticipationIncluded>>({
      url: `communications/${communicationId}/participations`,
      responseType: 'json',
      params: {
        include: 'sender,sender.person,sender.technicalUser,attachments'
      }
    })
    ).data
  }

  /**
   * Révoquer un jeton
   * @param {Client} oidClient Un client OpenID Connect
   * @param {string} token Un jeton
   */
  public static async revokeToken (oidClient: Client, token: string): Promise<undefined> {
    return oidClient.revoke(token)
  }

  /**
   * Configuration actuelle de l'application mobile (dernière version déployée, dernière version supportée, ...)
   * @example ```js
   * const {Skolengo} = require('scolengo-api')
   *
   * Skolengo.getAppCurrentConfig().then(config => {
   *   console.log(`Dernière version déployée: ${config.data.attributes.latestDeployedSkoAppVersion}`)
   *   console.log(`Dernière version supportée: ${config.data.attributes.latestSupportedSkoAppVersion}`)
   * })
   * ```
   */
  public static async getAppCurrentConfig (): Promise<SkolengoResponse<CurrentConfig>> {
    return (await axios.request<SkolengoResponse<CurrentConfig>>({
      baseURL: BASE_URL,
      url: '/sko-app-configs/current',
      method: 'get',
      responseType: 'json'
    })).data
  }

  /**
   * Rechercher un établissement scolaire
   * @param {string} text Le nom partiel de l'établissement
   * @param {number} limit Nombre max d'éléments
   * @param {number} offset Offset
   * @example ```js
   * const {Skolengo} = require('scolengo-api')
   *
   * Skolengo.searchSchool('Lycée Louise Weiss').then(schools => {
   *   console.log(schools)
   * })
   * ```
   */
  public static async searchSchool (text: string, limit = 10, offset = 0): Promise<SkolengoResponse<Array<School>>> {
    return (await axios.request<SkolengoResponse<School[]>>({
      baseURL: BASE_URL,
      url: '/schools',
      method: 'get',
      responseType: 'json',
      params: {
        page: { limit, offset },
        filter: { text }
      }
    })).data
  }

  /**
   * Créer un client OpenID Connect permettant l'obtention des jetons (refresh token et access token)
   * @param {School} school L'établissement scolaire
   * @example ```js
   * const {Skolengo} = require('scolengo-api')
   *
   * Skolengo.searchSchool('Lycée Louise Weiss').then(async schools => {
   *   if(!schools.data.length) throw new Error("Aucun établissement n'a été trouvé.")
   *   const school = schools.data[0]
   *   const oidClient = await Skolengo.getOIDClient(school, 'skoapp-prod://sign-in-callback')
   *   console.log(oidClient.authorizationUrl())
   *   // Lorsque l'authentification est effectuée, le CAS redirige vers le callback indiqué avec le code. Ce code permet d'obtenir les refresh token et access token (cf. mécanismes OAuth 2.0 et OID Connect)
   * })
   * ```
   * ```js
   * const {Skolengo} = require('scolengo-api')
   *
   * Skolengo.searchSchool('Lycée Louise Weiss').then(async schools => {
   *   if(!schools.data.length) throw new Error("Aucun établissement n'a été trouvé.")
   *   const school = schools.data[0]
   *   const oidClient = await Skolengo.getOIDClient(school, 'skoapp-prod://sign-in-callback')
   *
   *   const params = oidClient.callbackParams('skoapp-prod://sign-in-callback?code=OC-9999-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-X')
   *   const tokenSet = await oidClient.callback('skoapp-prod://sign-in-callback', params)
   *   // 🚨 ATTENTION: Ne communiquez jamais vos jetons à un tiers. Ils vous sont strictement personnels. Si vous pensez que vos jetons ont été dérobés, révoquez-les immédiatement.
   *
   *   const user = new Skolengo(oidClient, school, tokenSet)
   *   const infoUser = await user.getUserInfo()
   *   console.log(`Correctement authentifié sous l'identifiant ${infoUser.data.id}`)
   * })
   * ```
   */
  public static async getOIDClient (school: School, redirectUri = 'skoapp-prod://sign-in-callback'): Promise<Client> {
    const skolengoIssuer = await Issuer.discover(school.attributes.emsOIDCWellKnownUrl)
    const client = new skolengoIssuer.Client({
      client_id: Buffer.from(OID_CLIENT_ID, 'base64').toString('ascii'),
      client_secret: Buffer.from(OID_CLIENT_SECRET, 'base64').toString('ascii'),
      redirect_uris: [redirectUri],
      response_types: ['code']
    })
    return client
  }

  /**
   * Créer un client Skolengo à partir d'un objet contenant les informations d'authentification.
   * Cet objet de configuration peut être généré à partir de l'utilitaire [scolengo-token](https://github.com/maelgangloff/scolengo-token)
   * @param {AuthConfig} config Informations d'authentification
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
   *     "type": "school",
   *     "attributes": {
   *       "name": "<school_name>",
   *       "addressLine1": "<school_address>",
   *       "addressLine2": null,
   *       "addressLine3": null,
   *       "zipCode": "<school_zip_code>",
   *       "city": "<school_city>",
   *       "country": "France",
   *       "homePageUrl": "<cas_login_url>",
   *       "emsCode": "<school_ems_code>",
   *       "emsOIDCWellKnownUrl": "<school_ems_oidc_well_known_url>"
   *     }
   *   }
   * }
   * Skolengo.fromConfigObject(config).then(async user => {
   *   const infoUser = await user.getUserInfo()
   *   console.log(`Correctement authentifié sous l'identifiant ${infoUser.data.id}`)
   * })
   * ```
   */
  public static async fromConfigObject (config: AuthConfig): Promise<Skolengo> {
    const oidClient = await Skolengo.getOIDClient(config.school)
    const tokenSet = new TokenSet(config.tokenSet as TokenSetParameters)
    return new Skolengo(oidClient, config.school, tokenSet)
  }

  /**
   * Effectuer une requête authentifiée auprès de l'API.
   * Si la requête échoue, on rafraichit le jeton et on retente.
   * @param {AxiosRequestConfig} config
   * @private
   */
  private async request<T = any, R = AxiosResponse<T>, D = any> (config: AxiosRequestConfig): Promise<R> {
    try {
      return await this.httpClient.request<T, R, D>(config)
    } catch {
      const tokenSet = await this.oidClient.refresh(this.tokenSet.refresh_token as string)
      this.tokenSet = tokenSet
      this.httpClient.defaults.headers.common.Authorization = `Bearer ${tokenSet.access_token}`
      return await this.httpClient.request<T, R, D>(config)
    }
  }
}
