import { DRPC_ENDPOINT_URL } from "../ethereum/constants";
import { EthereumMethod_getFilterLogs } from "../ethereum/EthereumMethod_getFilterLogs";
import { DRPC_ENDPOINT_URL_ROBINHOOD } from "./constants";

export function RobinhoodMethod_getFilterLogs() {
  return (
    <EthereumMethod_getFilterLogs
      replaceCodeSnippetsURLFrom={DRPC_ENDPOINT_URL}
      replaceCodeSnippetsURLTo={DRPC_ENDPOINT_URL_ROBINHOOD}
      network="robinhood"
    />
  );
}
