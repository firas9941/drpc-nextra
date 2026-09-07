import { DRPC_ENDPOINT_URL } from "../ethereum/constants";
import { EthereumMethod_getTransactionByBlockHashAndIndex } from "../ethereum/EthereumMethod_getTransactionByBlockHashAndIndex";
import { DRPC_ENDPOINT_URL_ARC } from "./constants";

export function ArcMethod_getTransactionByBlockHashAndIndex() {
  return (
    <EthereumMethod_getTransactionByBlockHashAndIndex
      replaceCodeSnippetsURLFrom={DRPC_ENDPOINT_URL}
      replaceCodeSnippetsURLTo={DRPC_ENDPOINT_URL_ARC}
      network="arc"
    />
  );
}
