import { DRPC_ENDPOINT_URL } from "../ethereum/constants";
import { EthereumMethod_blockNumber } from "../ethereum/EthereumMethod_blockNumber";
import { DRPC_ENDPOINT_URL_ROBINHOOD } from "./constants";

export function RobinhoodMethod_blockNumber() {
  return (
    <EthereumMethod_blockNumber
      replaceCodeSnippetsURLFrom={DRPC_ENDPOINT_URL}
      replaceCodeSnippetsURLTo={DRPC_ENDPOINT_URL_ROBINHOOD}
      network="robinhood"
    />
  );
}
