import { DRPC_ENDPOINT_URL } from "../ethereum/constants";
import { EthereumMethod_getFilterChanges } from "../ethereum/EthereumMethod_getFilterChanges";
import { DRPC_ENDPOINT_URL_ROBINHOOD } from "./constants";

export function RobinhoodMethod_getFilterChanges() {
  return (
    <EthereumMethod_getFilterChanges
      replaceCodeSnippetsURLFrom={DRPC_ENDPOINT_URL}
      replaceCodeSnippetsURLTo={DRPC_ENDPOINT_URL_ROBINHOOD}
      network="robinhood"
    />
  );
}
