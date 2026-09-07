import { DRPC_ENDPOINT_URL } from "../ethereum/constants";
import { EthereumMethod_sendRawTransaction } from "../ethereum/EthereumMethod_sendRawTransaction";
import { DRPC_ENDPOINT_URL_ROBINHOOD } from "./constants";

export function RobinhoodMethod_sendRawTransaction() {
  return (
    <EthereumMethod_sendRawTransaction
      replaceCodeSnippetsURLFrom={DRPC_ENDPOINT_URL}
      replaceCodeSnippetsURLTo={DRPC_ENDPOINT_URL_ROBINHOOD}
      network="robinhood"
    />
  );
}
