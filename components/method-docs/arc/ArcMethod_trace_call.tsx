import { DRPC_ENDPOINT_URL } from "../ethereum/constants";
import { EthereumMethod_trace_call } from "../ethereum/EthereumMethod_trace_call";
import { DRPC_ENDPOINT_URL_ARC } from "./constants";

export function ArcMethod_trace_call() {
  return (
    <EthereumMethod_trace_call
      replaceCodeSnippetsURLFrom={DRPC_ENDPOINT_URL}
      replaceCodeSnippetsURLTo={DRPC_ENDPOINT_URL_ARC}
      network="arc"
    />
  );
}
