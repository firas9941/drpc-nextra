import { DRPC_ENDPOINT_URL } from "../ethereum/constants";
import { EthereumMethod_unsubscribe } from "../ethereum/EthereumMethod_unsubscribe";
import {DRPC_ENDPOINT_URL_ROBINHOOD, DRPC_ENDPOINT_URL_ROBINHOOD_WSCAT} from "./constants";

export function RobinhoodMethod_unsubscribe() {
  return (
    <EthereumMethod_unsubscribe
      replaceCodeSnippetsURLFrom={DRPC_ENDPOINT_URL}
      replaceCodeSnippetsURLTo={DRPC_ENDPOINT_URL_ROBINHOOD_WSCAT}
      network="robinhood"
    />
  );
}
