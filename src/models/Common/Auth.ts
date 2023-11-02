import type { TokenSetParameters } from 'openid-client'
import type { School } from '../School'

export interface AuthConfig {
  tokenSet: TokenSetParameters
  school: School
}
