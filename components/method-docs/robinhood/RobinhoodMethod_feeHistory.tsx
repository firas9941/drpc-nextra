import { DRPC_ENDPOINT_URL } from "../ethereum/constants";
import { EthereumMethod_feeHistory } from "../ethereum/EthereumMethod_feeHistory";
import { DRPC_ENDPOINT_URL_ROBINHOOD } from "./constants";

export function RobinhoodMethod_feeHistory() {
  return (
    <EthereumMethod_feeHistory
      replaceCodeSnippetsURLFrom={DRPC_ENDPOINT_URL}
      replaceCodeSnippetsURLTo={DRPC_ENDPOINT_URL_ROBINHOOD}
      network="robinhood"
    />
  );
}
