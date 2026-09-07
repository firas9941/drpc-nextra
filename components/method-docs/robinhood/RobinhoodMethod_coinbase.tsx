import { DRPC_ENDPOINT_URL } from "../ethereum/constants";
import { EthereumMethod_coinbase } from "../ethereum/EthereumMethod_coinbase";
import { DRPC_ENDPOINT_URL_ROBINHOOD } from "./constants";

export function RobinhoodMethod_coinbase() {
  return (
    <EthereumMethod_coinbase
      replaceCodeSnippetsURLFrom={DRPC_ENDPOINT_URL}
      replaceCodeSnippetsURLTo={DRPC_ENDPOINT_URL_ROBINHOOD}
      network="robinhood"
    />
  );
}
