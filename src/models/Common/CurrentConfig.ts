export interface AppCurrentConfig {
  id: string
  latestDeployedSkoAppVersion: string
  latestSupportedSkoAppVersion: string
  apiCallRetryDelay: number
  apiCallMaxRetries: number
  skoAppDeploymentInfoUrl: string
}
