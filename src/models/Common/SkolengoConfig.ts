import type { AxiosInstance } from 'axios'
import type { TokenSet, TokenSetParameters } from 'openid-client'

export interface SkolengoConfig {
  /**
   * Callback à appeller lorsque le TokenSet est rafraîchit par le serveur d'authentification
   * @param {TokenSet} tokenSet Nouveau TokenSet
   */
  onTokenRefresh: (tokenSet: TokenSetParameters) => void
  /**
   * Callback à appeller pour rafraîchir le TokenSet
   * @param {TokenSet} tokenSet Ancien TokenSet 
   * @returns {TokenSet} Nouveau TokenSet
   */
  refreshToken?: (tokenSet: TokenSetParameters) => Promise<TokenSetParameters>
  /**
   * Client HTTP pour effectuer les requêtes à l'API
   */
  httpClient: AxiosInstance
  /**
   * Capturer les erreurs Pronote
   */
  handlePronoteError: boolean
}
