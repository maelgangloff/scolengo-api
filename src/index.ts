import axios, { Axios } from 'axios'
import ClientOAuth2 from 'client-oauth2'
import { Issuer } from 'openid-client'
import jwtDecode from 'jwt-decode'
import { CurrentConfig } from './models/CurrentConfig'
import { Links, Meta, SkolengoResponse } from './models/Globals'
import { School } from './models/School'
import { Included, User } from './models/User'
import { JWT_AT } from './models/Auth'

const BASE_URL = 'https://api.skolengo.com/api/v1/bff-sko-app'

const OID_CLIENT_ID = 'U2tvQXBwLlByb2QuMGQzNDkyMTctOWE0ZS00MWVjLTlhZjktZGY5ZTY5ZTA5NDk0' // base64 du client ID de l'app mobile
const OID_CLIENT_SECRET = 'N2NiNGQ5YTgtMjU4MC00MDQxLTlhZTgtZDU4MDM4NjkxODNm' // base64 du client Secret de l'app mobile

/**
 * Support non officiel de l'API de la nouvelle application mobile Skolengo.
 * Ce module est destiné à devenir le successeur de [kdecole-api](https://github.com/maelgangloff/kdecole-api) dans l'éventualité où l'accès à l'ancienne API serait définitivement clos.
 *
 * **Remarques importantes:**
 *  - Il est clairement mentionné que cette librairie est n'est pas officielle.
 *  - Ce module n'est pas une contrefaçon car il n'existe pas de module similaire édité officiellement.
 *  - Les utilisateurs ne peuvent accéder qu'à leurs propres données. Ils sont soumis au même processus d'authentification que celui implémenté dans l'application.
 *  - Les données des utilisateurs ne sont pas davantage exposées puisqu'un utilisateur ne peut accéder qu'à ses propres données. Personne n'a le contrôle sur cette limitation qui est inhérente au fonctionnement de l'API de l'application Skolengo.
 *  - Cette librairie ne se suffit pas à elle-même pour fonctionner. Il est nécessaire de l'importer dans un projet et l'utilisateur est le seul responsable de son code et des éventuelles conséquences.
 *  - Tout utilisateur de cette librairie a *a priori* lu l'entièreté le fichier de licence GPLv3 disponible publiquement [LICENSE](https://github.com/maelgangloff/scolengo-api/blob/master/LICENSE) ainsi que de ce présent fichier de présentation.
 *  - Tout utilisateur de cette librairie a *a priori* lu l'entièreté du code de ce projet avant toute utilisation.
 *  - Eu égard l'ensemble de ces remarques, les contributeurs et *a fortiori* l'auteur du projet ne peuvent être tenus comme responsables de tout dommage potentiel.
 *
 * Pour participer et se tenir informé, **rejoins le serveur Discord: https://discord.gg/9u69mxsFT6**
 */
export class Skolengo {
  private client: Axios
  private auth: ClientOAuth2.Token

  /**
   * @param {ClientOAuth2.Token} auth Informations d'authentification OAuth 2.0
   * @param {School} school Etablissement
   */
  public constructor (auth: ClientOAuth2.Token, school: School) {
    this.auth = auth
    this.client = axios.create({
      baseURL: BASE_URL,
      withCredentials: true,
      headers: {
        'X-Skolengo-Date-Format': 'utc',
        Authorization: `Bearer ${auth.accessToken}`,
        'X-Skolengo-Ems-Code': school.attributes.emsCode
      }
    })
  }

  /**
   * Informations sur l'utilisateur actuellement authentifié
   */
  public async getUserInfo (): Promise<SkolengoResponse<User, never, never, Included[]>> {
    const accessToken = jwtDecode<JWT_AT>(this.auth.accessToken)
    const id = accessToken.sub
    return (await this.client.request<SkolengoResponse<User, never, never, Included[]>>({
      url: `/users-info/${id}`,
      params: {
        fields: {
          userInfo: 'lastName,firstName,photoUrl,externalMail,mobilephone,permissions',
          school: 'name,timeZone,subscribedServices',
          legalRepresentativeUserInfo: 'addressLines,postalCode,city,country,students',
          studentUserInfo: 'className,dateOfBirth,regime,school',
          student: 'firstName,lastName,photoUrl,className,dateOfBirth,regime,school'
        },
        include: 'school,students,students.school'
      }
    })).data
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
  public static async searchSchool (text: string, limit = 10, offset = 0): Promise<SkolengoResponse<Array<School>, Links, Meta>> {
    return (await axios.request<SkolengoResponse<School[], Links, Meta>>({
      baseURL: BASE_URL,
      url: '/schools',
      params: {
        page: { limit, offset },
        filter: { text }
      }
    })).data
  }

  /**
   * Créer un client OAuth 2.0 permettant l'obtention des jetons (refresh token et access token)
   * @param {School} school L'établissement
   * @example ```js
   * const {Skolengo} = require('scolengo-api')
   *
   * Skolengo.searchSchool('Lycée Louise Weiss').then(schools => {
   *   if(!schools.data.length) throw new Error("Aucun établissement n'a été trouvé.")
   *   const school = schools.data[0]
   *   Skolengo.getOauth2Client(school, 'skoapp-prod://sign-in-callback').then(oauthClient => {
   *     console.log(oauthClient.code.getUri())
   *     // Lorsque l'authentification est effectuée, le CAS redirige vers le callback indiqué avec le code. Ce code permet d'obtenir les refresh token et access token (cf. mécanisme OAuth 2.0)
   *   })
   * })
   * ```
   */
  public static async getOauth2Client (school: School, redirectUri = 'skoapp-prod://sign-in-callback', scopes = ['openid']): Promise<ClientOAuth2> {
    const skolengoIssuer = await Issuer.discover(school.attributes.emsOIDCWellKnownUrl)
    return new ClientOAuth2({
      clientId: Buffer.from(OID_CLIENT_ID, 'base64').toString('ascii'),
      clientSecret: Buffer.from(OID_CLIENT_SECRET, 'base64').toString('ascii'),
      accessTokenUri: skolengoIssuer.metadata.token_endpoint,
      authorizationUri: skolengoIssuer.metadata.authorization_endpoint,
      redirectUri,
      scopes
    })
  }
}
