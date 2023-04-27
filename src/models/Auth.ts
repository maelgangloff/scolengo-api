import { TokenSetParameters } from 'openid-client'
import { School } from './School/School'

export interface AuthConfig {
  tokenSet: TokenSetParameters
  school: School
}
