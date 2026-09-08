import { DRPC_ENDPOINT_URL } from "../ethereum/constants";
import { EthereumMethod_trace_block } from "../ethereum/EthereumMethod_trace_block";
import { DRPC_ENDPOINT_URL_ARC } from "./constants";

export function ArcMethod_trace_block() {
  return (
    <EthereumMethod_trace_block
      replaceCodeSnippetsURLFrom={DRPC_ENDPOINT_URL}
      replaceCodeSnippetsURLTo={DRPC_ENDPOINT_URL_ARC}
      network="arc"
    />
  );
}
