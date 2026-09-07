import { DRPC_ENDPOINT_URL } from "../ethereum/constants";
import { EthereumMethod_sendRawTransaction } from "../ethereum/EthereumMethod_sendRawTransaction";
import { DRPC_ENDPOINT_URL_ARC } from "./constants";

export function ArcMethod_sendRawTransaction() {
  return (
    <EthereumMethod_sendRawTransaction
      replaceCodeSnippetsURLFrom={DRPC_ENDPOINT_URL}
      replaceCodeSnippetsURLTo={DRPC_ENDPOINT_URL_ARC}
      network="arc"
    />
  );
}
