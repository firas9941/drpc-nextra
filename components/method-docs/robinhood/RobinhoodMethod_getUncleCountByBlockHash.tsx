import { DRPC_ENDPOINT_URL } from "../ethereum/constants";
import { EthereumMethod_getUncleCountByBlockHash } from "../ethereum/EthereumMethod_getUncleCountByBlockHash";
import { DRPC_ENDPOINT_URL_ROBINHOOD } from "./constants";

export function RobinhoodMethod_getUncleCountByBlockHash() {
  return (
    <EthereumMethod_getUncleCountByBlockHash
      replaceCodeSnippetsURLFrom={DRPC_ENDPOINT_URL}
      replaceCodeSnippetsURLTo={DRPC_ENDPOINT_URL_ROBINHOOD}
      network="robinhood"
    />
  );
}
