import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import { Client, Issuer, TokenSet } from 'openid-client'
import { CurrentConfig } from './models/CurrentConfig'
import { SkolengoResponse } from './models/Globals'
import { School } from './models/School'
import { User, UserIncluded } from './models/User'
import { EvaluationsIncluded, EvaluationsSettings } from './models/EvaluationsSettings'

const BASE_URL = 'https://api.skolengo.com/api/v1/bff-sko-app'

const OID_CLIENT_ID = 'U2tvQXBwLlByb2QuMGQzNDkyMTctOWE0ZS00MWVjLTlhZjktZGY5ZTY5ZTA5NDk0' // base64 du client ID de l'app mobile
const OID_CLIENT_SECRET = 'N2NiNGQ5YTgtMjU4MC00MDQxLTlhZTgtZDU4MDM4NjkxODNm' // base64 du client Secret de l'app mobile

/**
 * Support non officiel de l'API de la nouvelle application mobile Skolengo.
 * Ce module est destiné à devenir le successeur de [kdecole-api](https://github.com/maelgangloff/kdecole-api) dans l'éventualité où l'accès à l'ancienne API serait définitivement clos.
 * Pour participer et se tenir informé, **rejoins le serveur Discord: https://discord.gg/9u69mxsFT6**
 *
 * **Remarques importantes:**
 *  - Il est clairement mentionné que cette librairie est n'est pas officielle.
 *  - Ce module n'est pas une contrefaçon car il n'existe pas de module similaire édité officiellement.
 *  - Les utilisateurs ne peuvent accéder qu'à leurs propres données. Ils sont soumis au même processus d'authentification que celui implémenté dans l'application.
 *  - Les données des utilisateurs ne sont pas davantage exposées puisqu'un utilisateur ne peut accéder qu'à ses propres données. Personne n'a le contrôle sur cette limitation qui est inhérente au fonctionnement de l'API de l'application Skolengo.
 *  - Cette librairie ne se suffit pas à elle-même pour fonctionner. Il est nécessaire de l'importer dans un projet et l'utilisateur est le seul responsable de son code et des éventuelles conséquences.
 *  - Tout utilisateur de cette librairie a *a priori* lu l'entièreté du fichier de licence GPLv3 disponible publiquement [LICENSE](https://github.com/maelgangloff/scolengo-api/blob/master/LICENSE) ainsi que de ce présent fichier de présentation.
 *  - Tout utilisateur de cette librairie a *a priori* lu l'entièreté du code de ce projet avant toute utilisation.
 *  - Eu égard l'ensemble de ces remarques, les contributeurs et *a fortiori* l'auteur du projet ne peuvent être tenus comme responsables de tout dommage potentiel.
 */
export class Skolengo {
  private httpClient: AxiosInstance
  private oidClient: Client
  private school: School
  private tokenSet: TokenSet

  /**
   * @param {Client} oidClient Un client OpenID Connect
   * @param {School} school Etablissement
   * @param {TokenSet} tokenSet Jetons d'authentification Open ID Connect
   */
  public constructor (oidClient: Client, school: School, tokenSet: TokenSet) {
    this.oidClient = oidClient
    this.school = school
    this.tokenSet = tokenSet
    this.httpClient = axios.create({
      baseURL: BASE_URL,
      withCredentials: true,
      headers: {
        'X-Skolengo-Date-Format': 'utc',
        'X-Skolengo-School-Id': school.id,
        'X-Skolengo-Ems-Code': school.attributes.emsCode,
        Authorization: `Bearer ${tokenSet.access_token}`
      }
    })
  }

  /**
   * Informations sur l'utilisateur actuellement authentifié (nom, prénom, date de naissance, adresse postale, courriel, téléphone, permissions, ...)
   */
  public async getUserInfo (): Promise<SkolengoResponse<User, UserIncluded>> {
    const id = this.tokenSet.claims().sub
    return (await this.request<SkolengoResponse<User, UserIncluded>>({
      url: `/users-info/${id}`
    })).data
  }

  /**
   * Statut des services d'évaluation
   * @param {string} studentId Identifiant d'un étudiant
   */
  public async getEvaluationsSettings (studentId: string): Promise<SkolengoResponse<EvaluationsSettings[], EvaluationsIncluded>> {
    return (await this.request<SkolengoResponse<EvaluationsSettings[], EvaluationsIncluded>>({
      url: '/evaluations-settings',
      params: {
        filter: {
          'student.id': studentId
        }
      }
    })).data
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
      url: '/sko-app-configs/current'
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
      params: {
        page: { limit, offset },
        filter: { text }
      }
    })).data
  }

  /**
   * Créer un client Open ID Connect permettant l'obtention des jetons (refresh token et access token)
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
   * Effectuer une requête authentifiée auprès de l'API.
   * Si la requête échoue, on rafraichit le jeton et on retente.
   * @param {AxiosRequestConfig} config
   * @private
   */
  private async request<T = any, R = AxiosResponse<T>, D = any> (config: AxiosRequestConfig): Promise<R> {
    try {
      return this.httpClient.request<T, R, D>(config)
    } catch {
      const tokenSet = await this.oidClient.refresh(this.tokenSet.refresh_token as string)
      this.tokenSet = tokenSet
      this.httpClient.defaults.headers.common.Authorization = `Bearer ${tokenSet.access_token}`
      return this.httpClient.request<T, R, D>(config)
    }
  }
}
