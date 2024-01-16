import { OnRenderClientSync } from "vike/types";
import { isDeploymentConfigPrimed, setDeploymentConfig } from "../util/deploymentConfigStore";

export const onRenderClient: OnRenderClientSync = (pageContext) => {
    // Ensure config is stored on the client side by proxying from initial 
    // pageContext on first SSR
    if(isDeploymentConfigPrimed()) {
        if(pageContext.appConfig === undefined) {
            throw new Error("No app config in page context on first render");
        } else {
            setDeploymentConfig(pageContext.appConfig);
        }
    }
}
