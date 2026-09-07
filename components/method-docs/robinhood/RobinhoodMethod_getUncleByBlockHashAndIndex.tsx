import { DRPC_ENDPOINT_URL } from "../ethereum/constants";
import { EthereumMethod_getUncleByBlockHashAndIndex } from "../ethereum/EthereumMethod_getUncleByBlockHashAndIndex";
import { DRPC_ENDPOINT_URL_ROBINHOOD } from "./constants";

export function RobinhoodMethod_getUncleByBlockHashAndIndex() {
  return (
    <EthereumMethod_getUncleByBlockHashAndIndex
      replaceCodeSnippetsURLFrom={DRPC_ENDPOINT_URL}
      replaceCodeSnippetsURLTo={DRPC_ENDPOINT_URL_ROBINHOOD}
      network="robinhood"
    />
  );
}
