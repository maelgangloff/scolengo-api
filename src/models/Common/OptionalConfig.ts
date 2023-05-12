import { AxiosInstance } from 'axios'
import { TokenSet } from 'openid-client'

export type OptionalConfig = Partial<{
  onTokenRefresh: (tokenSet: TokenSet) => void
  httpClient: AxiosInstance
  handlePronoteError: boolean
}>
