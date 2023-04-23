import { BaseResponseAttributes } from '../Global'

export interface CurrentConfigAttributes {
  latestDeployedSkoAppVersion: string
  latestSupportedSkoAppVersion: string
  apiCallRetryDelay: number
  apiCallMaxRetries: number
  skoAppDeploymentInfoUrl: string
}

export type CurrentConfig = BaseResponseAttributes<CurrentConfigAttributes, 'skoAppConfig'>
