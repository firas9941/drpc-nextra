import { DRPC_ENDPOINT_URL } from "../ethereum/constants";
import { EthereumMethod_web3_clientVersion } from "../ethereum/EthereumMethod_web3_clientVersion";
import { DRPC_ENDPOINT_URL_ROBINHOOD } from "./constants";

export function RobinhoodMethod_web3_clientVersion() {
  return (
    <EthereumMethod_web3_clientVersion
      replaceCodeSnippetsURLFrom={DRPC_ENDPOINT_URL}
      replaceCodeSnippetsURLTo={DRPC_ENDPOINT_URL_ROBINHOOD}
      network="robinhood"
    />
  );
}
