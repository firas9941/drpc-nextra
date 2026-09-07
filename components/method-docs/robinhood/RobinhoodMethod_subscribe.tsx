import { DRPC_ENDPOINT_URL } from "../ethereum/constants";
import { EthereumMethod_subscribe } from "../ethereum/EthereumMethod_subscribe";
import {DRPC_ENDPOINT_URL_ROBINHOOD, DRPC_ENDPOINT_URL_ROBINHOOD_WSCAT} from "./constants";

export function RobinhoodMethod_subscribe() {
  return (
    <EthereumMethod_subscribe
      replaceCodeSnippetsURLFrom={DRPC_ENDPOINT_URL}
      replaceCodeSnippetsURLTo={DRPC_ENDPOINT_URL_ROBINHOOD_WSCAT}
      network="robinhood"
    />
  );
}
