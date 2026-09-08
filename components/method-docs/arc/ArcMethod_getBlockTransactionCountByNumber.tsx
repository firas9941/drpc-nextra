import { DRPC_ENDPOINT_URL } from "../ethereum/constants";
import { EthereumMethod_getBlockTransactionCountByNumber } from "../ethereum/EthereumMethod_getBlockTransactionCountByNumber";
import { DRPC_ENDPOINT_URL_ARC } from "./constants";

export function ArcMethod_getBlockTransactionCountByNumber() {
  return (
    <EthereumMethod_getBlockTransactionCountByNumber
      replaceCodeSnippetsURLFrom={DRPC_ENDPOINT_URL}
      replaceCodeSnippetsURLTo={DRPC_ENDPOINT_URL_ARC}
      network="arc"
    />
  );
}
