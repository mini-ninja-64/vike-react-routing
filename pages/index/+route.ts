import { RouteSync } from "vike/types"
import { getDeploymentConfig } from "../../util/deploymentConfigStore";

export const route: RouteSync = (pageContext): ReturnType<RouteSync> => {
    const path = pageContext.urlPathname.split("/")[1];
    const appConfig = getDeploymentConfig();
    const foundPage = appConfig.pages.find(page => page.id === path);

    if(!foundPage) return false;
    return {}
}
