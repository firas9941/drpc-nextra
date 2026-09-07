import { DRPC_ENDPOINT_URL } from "../ethereum/constants";
import { EthereumMethod_trace_replayBlockTransactions } from "../ethereum/EthereumMethod_trace_replayBlockTransactions";
import { DRPC_ENDPOINT_URL_ROBINHOOD } from "./constants";

export function RobinhoodMethod_trace_replayBlockTransactions() {
  return (
    <EthereumMethod_trace_replayBlockTransactions
      replaceCodeSnippetsURLFrom={DRPC_ENDPOINT_URL}
      replaceCodeSnippetsURLTo={DRPC_ENDPOINT_URL_ROBINHOOD}
      network="robinhood"
    />
  );
}
