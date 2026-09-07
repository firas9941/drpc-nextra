import { DRPC_ENDPOINT_URL } from "../ethereum/constants";
import { EthereumMethod_getTransactionByBlockNumberAndIndex } from "../ethereum/EthereumMethod_getTransactionByBlockNumberAndIndex";
import { DRPC_ENDPOINT_URL_ARC } from "./constants";

export function ArcMethod_getTransactionByBlockNumberAndIndex() {
  return (
    <EthereumMethod_getTransactionByBlockNumberAndIndex
      replaceCodeSnippetsURLFrom={DRPC_ENDPOINT_URL}
      replaceCodeSnippetsURLTo={DRPC_ENDPOINT_URL_ARC}
      network="arc"
    />
  );
}
