import { DRPC_ENDPOINT_URL } from "../ethereum/constants";
import { EthereumMethod_trace_callMany } from "../ethereum/EthereumMethod_trace_callMany";
import { DRPC_ENDPOINT_URL_ARC } from "./constants";

export function ArcMethod_trace_callMany() {
  return (
    <EthereumMethod_trace_callMany
      replaceCodeSnippetsURLFrom={DRPC_ENDPOINT_URL}
      replaceCodeSnippetsURLTo={DRPC_ENDPOINT_URL_ARC}
      network="arc"
    />
  );
}
