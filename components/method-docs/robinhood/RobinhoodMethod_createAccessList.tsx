import { DRPC_ENDPOINT_URL } from "../ethereum/constants";
import { EthereumMethod_createAccessList } from "../ethereum/EthereumMethod_createAccessList";
import { DRPC_ENDPOINT_URL_ROBINHOOD } from "./constants";

export function RobinhoodMethod_createAccessList() {
  return (
    <EthereumMethod_createAccessList
      replaceCodeSnippetsURLFrom={DRPC_ENDPOINT_URL}
      replaceCodeSnippetsURLTo={DRPC_ENDPOINT_URL_ROBINHOOD}
      network="robinhood"
    />
  );
}
