import { DRPC_ENDPOINT_URL } from "../ethereum/constants";
import { EthereumMethod_getCode } from "../ethereum/EthereumMethod_getCode";
import { DRPC_ENDPOINT_URL_ROBINHOOD } from "./constants";

export function RobinhoodMethod_getCode() {
  return (
    <EthereumMethod_getCode
      replaceCodeSnippetsURLFrom={DRPC_ENDPOINT_URL}
      replaceCodeSnippetsURLTo={DRPC_ENDPOINT_URL_ROBINHOOD}
      network="robinhood"
    />
  );
}
