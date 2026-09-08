import { DRPC_ENDPOINT_URL } from "../ethereum/constants";
import { EthereumMethod_estimateGas } from "../ethereum/EthereumMethod_estimateGas";
import { DRPC_ENDPOINT_URL_ROBINHOOD } from "./constants";

export function RobinhoodMethod_estimateGas() {
  return (
    <EthereumMethod_estimateGas
      replaceCodeSnippetsURLFrom={DRPC_ENDPOINT_URL}
      replaceCodeSnippetsURLTo={DRPC_ENDPOINT_URL_ROBINHOOD}
      network="robinhood"
    />
  );
}
