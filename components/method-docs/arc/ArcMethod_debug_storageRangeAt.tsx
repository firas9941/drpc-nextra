import { DRPC_ENDPOINT_URL_ROBINHOOD } from "../robinhood/constants";
import { RobinhoodMethod_debug_storageRangeAt } from "../robinhood/RobinhoodMethod_debug_storageRangeAt";
import { DRPC_ENDPOINT_URL_ARC } from "./constants";

export function ArcMethod_debug_storageRangeAt() {
  return (
    <RobinhoodMethod_debug_storageRangeAt
      replaceCodeSnippetsURLFrom={DRPC_ENDPOINT_URL_ROBINHOOD}
      replaceCodeSnippetsURLTo={DRPC_ENDPOINT_URL_ARC}
      network="arc"
    />
  );
}
