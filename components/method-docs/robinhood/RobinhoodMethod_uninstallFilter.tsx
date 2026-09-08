import { DRPC_ENDPOINT_URL } from "../ethereum/constants";
import { EthereumMethod_uninstallFilter } from "../ethereum/EthereumMethod_uninstallFilter";
import { DRPC_ENDPOINT_URL_ROBINHOOD } from "./constants";

export function RobinhoodMethod_uninstallFilter() {
  return (
    <EthereumMethod_uninstallFilter
      replaceCodeSnippetsURLFrom={DRPC_ENDPOINT_URL}
      replaceCodeSnippetsURLTo={DRPC_ENDPOINT_URL_ROBINHOOD}
      network="robinhood"
    />
  );
}
