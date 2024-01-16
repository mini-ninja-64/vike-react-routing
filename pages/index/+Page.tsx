import { usePageContext } from "vike-react/usePageContext";
import { getDeploymentConfig } from "../../util/deploymentConfigStore";

export default function Page() {
  const pageId = usePageContext().urlPathname.split('/')[1];
  const foundPage = getDeploymentConfig().pages.find(page => page.id === pageId);
  return (
    <>
      <h1>{foundPage?.id}</h1>
      <h2>{foundPage?.type}</h2>
    </>
  );
}
