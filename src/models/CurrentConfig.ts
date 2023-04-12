export interface CurrentConfig {
    id: string;
    type: string;
    attributes: {
        latestDeployedSkoAppVersion: string;
        latestSupportedSkoAppVersion: string;
        apiCallRetryDelay: number;
        apiCallMaxRetries: number;
        skoAppDeploymentInfoUrl: string;
    };
}
