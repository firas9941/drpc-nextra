import { DRPC_ENDPOINT_URL } from "../ethereum/constants";
import { EthereumMethod_chainId } from "../ethereum/EthereumMethod_chainId";
import { DRPC_ENDPOINT_URL_ROBINHOOD } from "./constants";

export function RobinhoodMethod_chainId() {
  return (
    <EthereumMethod_chainId
      replaceCodeSnippetsURLFrom={DRPC_ENDPOINT_URL}
      replaceCodeSnippetsURLTo={DRPC_ENDPOINT_URL_ROBINHOOD}
      network="robinhood"
    />
  );
}
