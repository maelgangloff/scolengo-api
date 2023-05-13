import { AxiosInstance } from 'axios'
import { TokenSet } from 'openid-client'

export interface SkolengoConfig {
  onTokenRefresh: (tokenSet: TokenSet) => void
  httpClient: AxiosInstance
  handlePronoteError: boolean
}
