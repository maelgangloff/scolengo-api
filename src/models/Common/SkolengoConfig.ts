import type { AxiosInstance } from 'axios'
import type { TokenSet } from 'openid-client'

export interface SkolengoConfig {
  onTokenRefresh: (tokenSet: TokenSet) => void
  httpClient: AxiosInstance
  handlePronoteError: boolean
}
