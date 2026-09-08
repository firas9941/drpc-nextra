import { DRPC_ENDPOINT_URL } from "../ethereum/constants";
import { EthereumMethod_trace_get } from "../ethereum/EthereumMethod_trace_get";
import { DRPC_ENDPOINT_URL_ARC } from "./constants";

export function ArcMethod_trace_get() {
  return (
    <EthereumMethod_trace_get
      replaceCodeSnippetsURLFrom={DRPC_ENDPOINT_URL}
      replaceCodeSnippetsURLTo={DRPC_ENDPOINT_URL_ARC}
      network="arc"
    />
  );
}
