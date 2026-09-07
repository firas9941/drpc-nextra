import { DRPC_ENDPOINT_URL } from "../ethereum/constants";
import { EthereumMethod_gasPrice } from "../ethereum/EthereumMethod_gasPrice";
import { DRPC_ENDPOINT_URL_ROBINHOOD } from "./constants";

export function RobinhoodMethod_gasPrice() {
  return (
    <EthereumMethod_gasPrice
      replaceCodeSnippetsURLFrom={DRPC_ENDPOINT_URL}
      replaceCodeSnippetsURLTo={DRPC_ENDPOINT_URL_ROBINHOOD}
      network="robinhood"
    />
  );
}
