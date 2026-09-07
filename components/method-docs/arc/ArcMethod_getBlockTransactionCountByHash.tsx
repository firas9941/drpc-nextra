import { DRPC_ENDPOINT_URL } from "../ethereum/constants";
import { EthereumMethod_getBlockTransactionCountByHash } from "../ethereum/EthereumMethod_getBlockTransactionCountByHash";
import { DRPC_ENDPOINT_URL_ARC } from "./constants";

export function ArcMethod_getBlockTransactionCountByHash() {
  return (
    <EthereumMethod_getBlockTransactionCountByHash
      replaceCodeSnippetsURLFrom={DRPC_ENDPOINT_URL}
      replaceCodeSnippetsURLTo={DRPC_ENDPOINT_URL_ARC}
      network="arc"
    />
  );
}
