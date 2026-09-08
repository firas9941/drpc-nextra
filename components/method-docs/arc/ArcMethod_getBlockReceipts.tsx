import { DRPC_ENDPOINT_URL } from "../ethereum/constants";
import { EthereumMethod_getBlockReceipts } from "../ethereum/EthereumMethod_getBlockReceipts";
import { DRPC_ENDPOINT_URL_ARC } from "./constants";

export function ArcMethod_getBlockReceipts() {
  return (
    <EthereumMethod_getBlockReceipts
      replaceCodeSnippetsURLFrom={DRPC_ENDPOINT_URL}
      replaceCodeSnippetsURLTo={DRPC_ENDPOINT_URL_ARC}
      network="arc"
    />
  );
}
