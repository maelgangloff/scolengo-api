import { BaseResponse } from '../Globals'

export type CurrentConfigAttributes = {
        latestDeployedSkoAppVersion: string;
        latestSupportedSkoAppVersion: string;
        apiCallRetryDelay: number;
        apiCallMaxRetries: number;
        skoAppDeploymentInfoUrl: string;
}

export type CurrentConfig = BaseResponse<CurrentConfigAttributes, never>
