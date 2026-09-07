import { DRPC_ENDPOINT_URL } from "../ethereum/constants";
import { EthereumMethod_hashrate } from "../ethereum/EthereumMethod_hashrate";
import { DRPC_ENDPOINT_URL_ROBINHOOD } from "./constants";

export function RobinhoodMethod_hashrate() {
  return (
    <EthereumMethod_hashrate
      replaceCodeSnippetsURLFrom={DRPC_ENDPOINT_URL}
      replaceCodeSnippetsURLTo={DRPC_ENDPOINT_URL_ROBINHOOD}
      network="robinhood"
    />
  );
}
