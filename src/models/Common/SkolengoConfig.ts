import type { AxiosInstance } from 'axios'
import type { TokenSetParameters } from 'openid-client'

export interface SkolengoConfig {
  onTokenRefresh: (tokenSet: TokenSetParameters) => void
  refreshToken?: (tokenSet: TokenSetParameters) => Promise<TokenSetParameters>
  httpClient: AxiosInstance
  handlePronoteError: boolean
}
