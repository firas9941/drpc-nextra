import { DRPC_ENDPOINT_URL_ROBINHOOD } from "../robinhood/constants";
import { RobinhoodMethod_blobBaseFee } from "../robinhood/RobinhoodMethod_blobBaseFee";
import { DRPC_ENDPOINT_URL_ARC } from "./constants";

export function ArcMethod_blobBaseFee() {
  return (
    <RobinhoodMethod_blobBaseFee
      replaceCodeSnippetsURLFrom={DRPC_ENDPOINT_URL_ROBINHOOD}
      replaceCodeSnippetsURLTo={DRPC_ENDPOINT_URL_ARC}
      network="arc"
    />
  );
}
