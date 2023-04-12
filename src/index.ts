import axios, { Axios } from 'axios'
import { CurrentConfig } from './models/CurrentConfig'
import { Links, Meta, SkolengoResponse } from './models/Globals'
import { School } from './models/School'
import ClientOAuth2 from 'client-oauth2'
import { Issuer } from 'openid-client'
import { Auth } from './models/Auth'

const BASE_URL = 'https://api.skolengo.com/api/v1/bff-sko-app'

const OID_CLIENT_ID = 'SkoApp.Prod.0d349217-9a4e-41ec-9af9-df9e69e09494' // Client ID de l'app mobile
const OID_CLIENT_SECRET = '7cb4d9a8-2580-4041-9ae8-d5803869183f' // Client Secret de l'app mobile

/**
 * Support non officiel de l'API de la nouvelle application mobile Skolengo.
 * Ce module est destiné à devenir le successeur de [kdecole-api](https://github.com/maelgangloff/kdecole-api) dans l'éventualité où l'accès à l'ancienne API est définitivement clos.
 *
 * Si tu es intéressé par ce projet et son développement : **Tu es le bienvenu sur ce serveur Discord: https://discord.gg/9u69mxsFT6**
 *
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

  /**
   * Configuration actuelle de l'application mobile (dernière version déployée, dernière version supportée, ...)
   */
  public static async getAppCurrentConfig (): Promise<SkolengoResponse<CurrentConfig>> {
    return axios.request({
      baseURL: BASE_URL,
      url: '/sko-app-configs/current'
    })
  }

  /**
   * Rechercher un établissement scolaire
   * @param {string} text Le nom partiel de l'établissement
   * @param {number} limit Nombre max d'éléments
   * @param {number} offset Offset
   */
  public static async searchSchool (text: string, limit = 10, offset = 0): Promise<SkolengoResponse<School[], Links, Meta>> {
    return axios.request({
      baseURL: BASE_URL,
      url: '/schools',
      params: {
        page: { limit, offset, text }
      }
    })
  }

  /**
   * Créer un client OAuth 2.0 permettant l'obtention des jetons (refresh token et access token)
   * @param {School} school L'établissement
   */
  public static async getOauth2Client (school: School): Promise<ClientOAuth2> {
    const skolengoIssuer = await Issuer.discover(school.attributes.emsOIDCWellKnownUrl)
    return new ClientOAuth2({
      clientId: OID_CLIENT_ID,
      clientSecret: OID_CLIENT_SECRET,
      accessTokenUri: skolengoIssuer.metadata.token_endpoint,
      authorizationUri: skolengoIssuer.metadata.authorization_endpoint,
      redirectUri: 'skoapp-prod://sign-in-callback',
      scopes: ['openid']
    })
  }
}
