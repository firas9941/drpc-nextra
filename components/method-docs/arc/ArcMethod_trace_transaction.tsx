import { DRPC_ENDPOINT_URL } from "../ethereum/constants";
import { EthereumMethod_trace_transaction } from "../ethereum/EthereumMethod_trace_transaction";
import { DRPC_ENDPOINT_URL_ARC } from "./constants";

export function ArcMethod_trace_transaction() {
  return (
    <EthereumMethod_trace_transaction
      replaceCodeSnippetsURLFrom={DRPC_ENDPOINT_URL}
      replaceCodeSnippetsURLTo={DRPC_ENDPOINT_URL_ARC}
      network="arc"
    />
  );
}
