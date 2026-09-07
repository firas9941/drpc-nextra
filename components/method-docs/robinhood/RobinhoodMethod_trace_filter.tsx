import { DRPC_ENDPOINT_URL } from "../ethereum/constants";
import { EthereumMethod_trace_filter } from "../ethereum/EthereumMethod_trace_filter";
import { DRPC_ENDPOINT_URL_ROBINHOOD } from "./constants";

export function RobinhoodMethod_trace_filter() {
  return (
    <EthereumMethod_trace_filter
      replaceCodeSnippetsURLFrom={DRPC_ENDPOINT_URL}
      replaceCodeSnippetsURLTo={DRPC_ENDPOINT_URL_ROBINHOOD}
      network="robinhood"
    />
  );
}
