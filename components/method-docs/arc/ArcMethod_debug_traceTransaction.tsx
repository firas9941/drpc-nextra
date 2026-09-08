import { DRPC_ENDPOINT_URL } from "../ethereum/constants";
import { EthereumMethod_debug_traceTransaction } from "../ethereum/EthereumMethod_debug_traceTransaction";
import { DRPC_ENDPOINT_URL_ARC } from "./constants";

export function ArcMethod_debug_traceTransaction() {
  return (
    <EthereumMethod_debug_traceTransaction
      replaceCodeSnippetsURLFrom={DRPC_ENDPOINT_URL}
      replaceCodeSnippetsURLTo={DRPC_ENDPOINT_URL_ARC}
      network="arc"
    />
  );
}
