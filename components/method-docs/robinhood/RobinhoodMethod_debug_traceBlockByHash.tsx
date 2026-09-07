import { DRPC_ENDPOINT_URL } from "../ethereum/constants";
import { EthereumMethod_debug_traceBlockByHash } from "../ethereum/EthereumMethod_debug_traceBlockByHash";
import { DRPC_ENDPOINT_URL_ROBINHOOD } from "./constants";

export function RobinhoodMethod_debug_traceBlockByHash() {
  return (
    <EthereumMethod_debug_traceBlockByHash
      replaceCodeSnippetsURLFrom={DRPC_ENDPOINT_URL}
      replaceCodeSnippetsURLTo={DRPC_ENDPOINT_URL_ROBINHOOD}
      network="robinhood"
    />
  );
}
