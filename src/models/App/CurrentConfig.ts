import { BaseResponse } from '../Globals'

export interface CurrentConfigAttributes {
  latestDeployedSkoAppVersion: string
  latestSupportedSkoAppVersion: string
  apiCallRetryDelay: number
  apiCallMaxRetries: number
  skoAppDeploymentInfoUrl: string
}

export type CurrentConfig = BaseResponse<CurrentConfigAttributes, undefined, 'skoAppConfig'>
