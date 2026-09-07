import { DRPC_ENDPOINT_URL } from "../ethereum/constants";
import { EthereumMethod_getBlockTransactionCountByHash } from "../ethereum/EthereumMethod_getBlockTransactionCountByHash";
import { DRPC_ENDPOINT_URL_ROBINHOOD } from "./constants";

export function RobinhoodMethod_getBlockTransactionCountByHash() {
  return (
    <EthereumMethod_getBlockTransactionCountByHash
      replaceCodeSnippetsURLFrom={DRPC_ENDPOINT_URL}
      replaceCodeSnippetsURLTo={DRPC_ENDPOINT_URL_ROBINHOOD}
      network="robinhood"
    />
  );
}
