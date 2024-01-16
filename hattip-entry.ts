import type { HattipHandler } from "@hattip/core";
import { createRouter } from "@hattip/router";
import { renderPage } from "vike/server";

import { setDeploymentConfig } from "./util/deploymentConfigStore";

// Would be loaded from filesystem at runtime
const appConfig = {
  "pages": [
    { "id": "test1", "type": "enum1", "enum1SpecificSetting": true},
    { "id": "test2", "type": "enum2", "enum2SpecificSetting": 123 }
  ]
};
export type ConfigType = typeof appConfig;
setDeploymentConfig(appConfig);

const router = createRouter();

/**
 * Vike route
 *
 * @link {@see https://vike.dev}
 **/
router.use(async (context) => {
  // console.log(appConfig);
  const pageContextInit = { 
    urlOriginal: context.request.url,
    appConfig
  };
  const pageContext = await renderPage(pageContextInit);
  const response = pageContext.httpResponse;

  return new Response(await response?.getBody(), {
    status: response?.statusCode,
    headers: response?.headers,
  });
});

export default router.buildHandler() as HattipHandler;
