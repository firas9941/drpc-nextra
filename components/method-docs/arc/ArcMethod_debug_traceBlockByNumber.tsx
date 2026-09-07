import { DRPC_ENDPOINT_URL } from "../ethereum/constants";
import { EthereumMethod_debug_traceBlockByNumber } from "../ethereum/EthereumMethod_debug_traceBlockByNumber";
import { DRPC_ENDPOINT_URL_ARC } from "./constants";

export function ArcMethod_debug_traceBlockByNumber() {
  return (
    <EthereumMethod_debug_traceBlockByNumber
      replaceCodeSnippetsURLFrom={DRPC_ENDPOINT_URL}
      replaceCodeSnippetsURLTo={DRPC_ENDPOINT_URL_ARC}
      network="arc"
    />
  );
}
