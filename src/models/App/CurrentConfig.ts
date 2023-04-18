import { BaseResponse } from '../Globals'

export type CurrentConfig = BaseResponse<
{
        latestDeployedSkoAppVersion: string;
        latestSupportedSkoAppVersion: string;
        apiCallRetryDelay: number;
        apiCallMaxRetries: number;
        skoAppDeploymentInfoUrl: string;
}, never>
