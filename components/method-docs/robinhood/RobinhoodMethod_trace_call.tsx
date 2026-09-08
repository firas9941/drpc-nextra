import { DRPC_ENDPOINT_URL } from "../ethereum/constants";
import { EthereumMethod_trace_call } from "../ethereum/EthereumMethod_trace_call";
import { DRPC_ENDPOINT_URL_ROBINHOOD } from "./constants";

export function RobinhoodMethod_trace_call() {
  return (
    <EthereumMethod_trace_call
      replaceCodeSnippetsURLFrom={DRPC_ENDPOINT_URL}
      replaceCodeSnippetsURLTo={DRPC_ENDPOINT_URL_ROBINHOOD}
      network="robinhood"
    />
  );
}
