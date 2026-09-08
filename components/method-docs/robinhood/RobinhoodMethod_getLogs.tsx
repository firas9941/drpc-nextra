import { DRPC_ENDPOINT_URL } from "../ethereum/constants";
import { EthereumMethod_getLogs } from "../ethereum/EthereumMethod_getLogs";
import { DRPC_ENDPOINT_URL_ROBINHOOD } from "./constants";

export function RobinhoodMethod_getLogs() {
  return (
    <EthereumMethod_getLogs
      replaceCodeSnippetsURLFrom={DRPC_ENDPOINT_URL}
      replaceCodeSnippetsURLTo={DRPC_ENDPOINT_URL_ROBINHOOD}
      network="robinhood"
    />
  );
}
