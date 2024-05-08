import type { TokenSetParameters } from 'openid-client'
import type { School } from '../School'

export interface AuthConfig {
  /**
   * TokenSet OpenID Connect
   */
  tokenSet: TokenSetParameters
  /**
   * Informations sur l'établissement
   */
  school: School
}
