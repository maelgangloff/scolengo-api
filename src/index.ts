import axios, { Axios } from 'axios'
import { CurrentConfig } from './models/CurrentConfig'
import { Links, Meta, SkolengoResponse } from './models/Globals'
import { School } from './models/School'
import ClientOAuth2 from 'client-oauth2'
import { Issuer } from 'openid-client'
import { Auth } from './models/Auth'
import { Included, User } from './models/User'

const BASE_URL = 'https://api.skolengo.com/api/v1/bff-sko-app'

const OID_CLIENT_ID = 'SkoApp.Prod.0d349217-9a4e-41ec-9af9-df9e69e09494' // Client ID de l'app mobile
const OID_CLIENT_SECRET = '7cb4d9a8-2580-4041-9ae8-d5803869183f' // Client Secret de l'app mobile

/**
 * Support non officiel de l'API de la nouvelle application mobile Skolengo.
 * Ce module est destiné à devenir le successeur de [kdecole-api](https://github.com/maelgangloff/kdecole-api) dans l'éventualité où l'accès à l'ancienne API serait définitivement clos.
 *
 * Pour participer et se tenir informé, **rejoins le serveur Discord: https://discord.gg/9u69mxsFT6**
 */
export class Skolengo {
  public client: Axios
  private auth: Auth

  public constructor (auth: Auth) {
    this.auth = auth
    this.client = axios.create({
      baseURL: BASE_URL,
      withCredentials: true,
      headers: {
        'X-Skolengo-Date-Format': 'utc',
        Authorization: `Bearer ${auth.access_token}`
      }
    })
  }

  public async getUserInfo (id: string): Promise<SkolengoResponse<User, never, never, Included>> {
    return (await this.client.request<SkolengoResponse<User, never, never, Included>>({
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
   * @returns {Promise<SkolengoResponse<CurrentConfig>>} La configuration actuelle de l'app
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
   * @returns {Promise<SkolengoResponse<School[], Links, Meta>>} Les établissements cherchés
   */
  public static async searchSchool (text: string, limit = 10, offset = 0): Promise<SkolengoResponse<School[], Links, Meta>> {
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
   *     console.log(code.getUri())
   *     // Lorsque l'authentification est effectuée, le CAS redirige vers le callback indiqué avec le code. Ce code permet d'obtenir les refresh token et access token (cf. mécanisme OAuth 2.0)
   *   })
   * })
   * ```
   * @returns {Promise<ClientOAuth2>} Le client OAuth 2.0
   */
  public static async getOauth2Client (school: School, redirectUri = 'skoapp-prod://sign-in-callback', scopes = ['openid']): Promise<ClientOAuth2> {
    const skolengoIssuer = await Issuer.discover(school.attributes.emsOIDCWellKnownUrl)
    return new ClientOAuth2({
      clientId: OID_CLIENT_ID,
      clientSecret: OID_CLIENT_SECRET,
      accessTokenUri: skolengoIssuer.metadata.token_endpoint,
      authorizationUri: skolengoIssuer.metadata.authorization_endpoint,
      redirectUri,
      scopes
    })
  }
}
