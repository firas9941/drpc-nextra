import { DRPC_ENDPOINT_URL_ROBINHOOD } from "../robinhood/constants";
import { RobinhoodMethod_getStorageValues } from "../robinhood/RobinhoodMethod_getStorageValues";
import { DRPC_ENDPOINT_URL_ARC } from "./constants";

export function ArcMethod_getStorageValues() {
  return (
    <RobinhoodMethod_getStorageValues
      replaceCodeSnippetsURLFrom={DRPC_ENDPOINT_URL_ROBINHOOD}
      replaceCodeSnippetsURLTo={DRPC_ENDPOINT_URL_ARC}
      network="arc"
    />
  );
}
