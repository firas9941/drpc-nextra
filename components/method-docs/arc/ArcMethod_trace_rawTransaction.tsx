import { DRPC_ENDPOINT_URL } from "../ethereum/constants";
import { EthereumMethod_trace_rawTransaction } from "../ethereum/EthereumMethod_trace_rawTransaction";
import { DRPC_ENDPOINT_URL_ARC } from "./constants";

export function ArcMethod_trace_rawTransaction() {
  return (
    <EthereumMethod_trace_rawTransaction
      replaceCodeSnippetsURLFrom={DRPC_ENDPOINT_URL}
      replaceCodeSnippetsURLTo={DRPC_ENDPOINT_URL_ARC}
      network="arc"
    />
  );
}
