import { DRPC_ENDPOINT_URL } from "../ethereum/constants";
import { EthereumMethod_trace_filter } from "../ethereum/EthereumMethod_trace_filter";
import { DRPC_ENDPOINT_URL_ARC } from "./constants";

export function ArcMethod_trace_filter() {
  return (
    <EthereumMethod_trace_filter
      replaceCodeSnippetsURLFrom={DRPC_ENDPOINT_URL}
      replaceCodeSnippetsURLTo={DRPC_ENDPOINT_URL_ARC}
      network="arc"
    />
  );
}
