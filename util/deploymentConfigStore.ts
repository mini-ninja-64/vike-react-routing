import { ConfigType } from "../hattip-entry";

let deploymentConfig: ConfigType | undefined;

export function setDeploymentConfig(config: ConfigType) {
    if(deploymentConfig !== undefined) throw new Error("Deployment config has already been configured");
    deploymentConfig = config;
}

export function getDeploymentConfig(): ConfigType {
    if(deploymentConfig === undefined) throw new Error("Deployment config has been accessed before being primed");
    return deploymentConfig;
}

export function isDeploymentConfigPrimed(): boolean {
    return deploymentConfig === undefined;
}
