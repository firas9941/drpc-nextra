import { DRPC_ENDPOINT_URL } from "../ethereum/constants";
import { EthereumMethod_getBlockByHash } from "../ethereum/EthereumMethod_getBlockByHash";
import { DRPC_ENDPOINT_URL_ROBINHOOD } from "./constants";

export function RobinhoodMethod_getBlockByHash() {
  return (
    <EthereumMethod_getBlockByHash
      replaceCodeSnippetsURLFrom={DRPC_ENDPOINT_URL}
      replaceCodeSnippetsURLTo={DRPC_ENDPOINT_URL_ROBINHOOD}
      network="robinhood"
    />
  );
}
