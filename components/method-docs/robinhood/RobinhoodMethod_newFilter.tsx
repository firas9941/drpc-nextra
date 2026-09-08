import { DRPC_ENDPOINT_URL } from "../ethereum/constants";
import { EthereumMethod_newFilter } from "../ethereum/EthereumMethod_newFilter";
import { DRPC_ENDPOINT_URL_ROBINHOOD } from "./constants";

export function RobinhoodMethod_newFilter() {
  return (
    <EthereumMethod_newFilter
      replaceCodeSnippetsURLFrom={DRPC_ENDPOINT_URL}
      replaceCodeSnippetsURLTo={DRPC_ENDPOINT_URL_ROBINHOOD}
      network="robinhood"
    />
  );
}
