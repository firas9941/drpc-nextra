import { DRPC_ENDPOINT_URL } from "../ethereum/constants";
import { EthereumMethod_getBalance } from "../ethereum/EthereumMethod_getBalance";
import { DRPC_ENDPOINT_URL_ROBINHOOD } from "./constants";

export function RobinhoodMethod_getBalance() {
  return (
    <EthereumMethod_getBalance
      replaceCodeSnippetsURLFrom={DRPC_ENDPOINT_URL}
      replaceCodeSnippetsURLTo={DRPC_ENDPOINT_URL_ROBINHOOD}
      network="robinhood"
    />
  );
}
