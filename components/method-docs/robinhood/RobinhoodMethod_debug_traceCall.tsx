import { DRPC_ENDPOINT_URL } from "../ethereum/constants";
import { EthereumMethod_debug_traceCall } from "../ethereum/EthereumMethod_debug_traceCall";
import { DRPC_ENDPOINT_URL_ROBINHOOD } from "./constants";

export function RobinhoodMethod_debug_traceCall() {
  return (
    <EthereumMethod_debug_traceCall
      replaceCodeSnippetsURLFrom={DRPC_ENDPOINT_URL}
      replaceCodeSnippetsURLTo={DRPC_ENDPOINT_URL_ROBINHOOD}
      network="robinhood"
    />
  );
}
