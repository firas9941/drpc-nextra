import { DRPC_ENDPOINT_URL } from "../ethereum/constants";
import { EthereumMethod_getTransactionByHash } from "../ethereum/EthereumMethod_getTransactionByHash";
import { DRPC_ENDPOINT_URL_ARC } from "./constants";

export function ArcMethod_getTransactionByHash() {
  return (
    <EthereumMethod_getTransactionByHash
      replaceCodeSnippetsURLFrom={DRPC_ENDPOINT_URL}
      replaceCodeSnippetsURLTo={DRPC_ENDPOINT_URL_ARC}
      network="arc"
    />
  );
}
