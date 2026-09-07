import { DRPC_ENDPOINT_URL_ROBINHOOD } from "../robinhood/constants";
import { RobinhoodMethod_simulateV1 } from "../robinhood/RobinhoodMethod_simulateV1";
import { DRPC_ENDPOINT_URL_ARC } from "./constants";

export function ArcMethod_simulateV1() {
  return (
    <RobinhoodMethod_simulateV1
      replaceCodeSnippetsURLFrom={DRPC_ENDPOINT_URL_ROBINHOOD}
      replaceCodeSnippetsURLTo={DRPC_ENDPOINT_URL_ARC}
      network="arc"
    />
  );
}
