import { DRPC_ENDPOINT_URL } from "../ethereum/constants";
import { EthereumMethod_getTransactionReceipt } from "../ethereum/EthereumMethod_getTransactionReceipt";
import { DRPC_ENDPOINT_URL_ARC } from "./constants";

export function ArcMethod_getTransactionReceipt() {
  return (
    <EthereumMethod_getTransactionReceipt
      replaceCodeSnippetsURLFrom={DRPC_ENDPOINT_URL}
      replaceCodeSnippetsURLTo={DRPC_ENDPOINT_URL_ARC}
      network="arc"
    />
  );
}
