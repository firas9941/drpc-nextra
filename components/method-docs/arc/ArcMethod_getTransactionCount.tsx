import { DRPC_ENDPOINT_URL } from "../ethereum/constants";
import { EthereumMethod_getTransactionCount } from "../ethereum/EthereumMethod_getTransactionCount";
import { DRPC_ENDPOINT_URL_ARC } from "./constants";

export function ArcMethod_getTransactionCount() {
  return (
    <EthereumMethod_getTransactionCount
      replaceCodeSnippetsURLFrom={DRPC_ENDPOINT_URL}
      replaceCodeSnippetsURLTo={DRPC_ENDPOINT_URL_ARC}
      network="arc"
    />
  );
}
