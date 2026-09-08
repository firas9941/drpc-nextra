import { DRPC_ENDPOINT_URL } from "../ethereum/constants";
import { EthereumMethod_net_listening } from "../ethereum/EthereumMethod_net_listening";
import { DRPC_ENDPOINT_URL_ROBINHOOD } from "./constants";

export function RobinhoodMethod_net_listening() {
  return (
    <EthereumMethod_net_listening
      replaceCodeSnippetsURLFrom={DRPC_ENDPOINT_URL}
      replaceCodeSnippetsURLTo={DRPC_ENDPOINT_URL_ROBINHOOD}
      network="robinhood"
    />
  );
}
