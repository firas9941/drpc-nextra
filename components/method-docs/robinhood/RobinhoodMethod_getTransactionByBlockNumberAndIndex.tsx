import { DRPC_ENDPOINT_URL } from "../ethereum/constants";
import { EthereumMethod_getTransactionByBlockNumberAndIndex } from "../ethereum/EthereumMethod_getTransactionByBlockNumberAndIndex";
import { DRPC_ENDPOINT_URL_ROBINHOOD } from "./constants";

export function RobinhoodMethod_getTransactionByBlockNumberAndIndex() {
  return (
    <EthereumMethod_getTransactionByBlockNumberAndIndex
      replaceCodeSnippetsURLFrom={DRPC_ENDPOINT_URL}
      replaceCodeSnippetsURLTo={DRPC_ENDPOINT_URL_ROBINHOOD}
      network="robinhood"
    />
  );
}
