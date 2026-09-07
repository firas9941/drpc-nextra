import { DRPC_ENDPOINT_URL } from "../ethereum/constants";
import { EthereumMethod_getBlockTransactionCountByNumber } from "../ethereum/EthereumMethod_getBlockTransactionCountByNumber";
import { DRPC_ENDPOINT_URL_ROBINHOOD } from "./constants";

export function RobinhoodMethod_getBlockTransactionCountByNumber() {
  return (
    <EthereumMethod_getBlockTransactionCountByNumber
      replaceCodeSnippetsURLFrom={DRPC_ENDPOINT_URL}
      replaceCodeSnippetsURLTo={DRPC_ENDPOINT_URL_ROBINHOOD}
      network="robinhood"
    />
  );
}
