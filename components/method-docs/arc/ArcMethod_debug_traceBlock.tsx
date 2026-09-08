import { DRPC_ENDPOINT_URL_ROBINHOOD } from "../robinhood/constants";
import { RobinhoodMethod_debug_traceBlock } from "../robinhood/RobinhoodMethod_debug_traceBlock";
import { DRPC_ENDPOINT_URL_ARC } from "./constants";

export function ArcMethod_debug_traceBlock() {
  return (
    <RobinhoodMethod_debug_traceBlock
      replaceCodeSnippetsURLFrom={DRPC_ENDPOINT_URL_ROBINHOOD}
      replaceCodeSnippetsURLTo={DRPC_ENDPOINT_URL_ARC}
      network="arc"
    />
  );
}
