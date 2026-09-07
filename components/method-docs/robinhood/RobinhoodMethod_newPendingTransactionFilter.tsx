import { DRPC_ENDPOINT_URL } from "../ethereum/constants";
import { EthereumMethod_newPendingTransactionFilter } from "../ethereum/EthereumMethod_newPendingTransactionFilter";
import { DRPC_ENDPOINT_URL_ROBINHOOD } from "./constants";

export function RobinhoodMethod_newPendingTransactionFilter() {
  return (
    <EthereumMethod_newPendingTransactionFilter
      replaceCodeSnippetsURLFrom={DRPC_ENDPOINT_URL}
      replaceCodeSnippetsURLTo={DRPC_ENDPOINT_URL_ROBINHOOD}
      network="robinhood"
    />
  );
}
