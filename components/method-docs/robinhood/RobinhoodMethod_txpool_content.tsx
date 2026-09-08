import { DRPC_ENDPOINT_URL } from "../ethereum/constants";
import { EthereumMethod_txpool_content } from "../ethereum/EthereumMethod_txpool_content";
import { DRPC_ENDPOINT_URL_ROBINHOOD } from "./constants";

export function RobinhoodMethod_txpool_content() {
  return (
    <EthereumMethod_txpool_content
      replaceCodeSnippetsURLFrom={DRPC_ENDPOINT_URL}
      replaceCodeSnippetsURLTo={DRPC_ENDPOINT_URL_ROBINHOOD}
      network="robinhood"
    />
  );
}
