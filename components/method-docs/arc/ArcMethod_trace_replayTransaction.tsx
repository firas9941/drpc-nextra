import { DRPC_ENDPOINT_URL } from "../ethereum/constants";
import { EthereumMethod_trace_replayTransaction } from "../ethereum/EthereumMethod_trace_replayTransaction";
import { DRPC_ENDPOINT_URL_ARC } from "./constants";

export function ArcMethod_trace_replayTransaction() {
  return (
    <EthereumMethod_trace_replayTransaction
      replaceCodeSnippetsURLFrom={DRPC_ENDPOINT_URL}
      replaceCodeSnippetsURLTo={DRPC_ENDPOINT_URL_ARC}
      network="arc"
    />
  );
}
