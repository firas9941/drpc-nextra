import { DRPC_ENDPOINT_URL } from "../ethereum/constants";
import { EthereumMethod_feeHistory } from "../ethereum/EthereumMethod_feeHistory";
import { DRPC_ENDPOINT_URL_ARC } from "./constants";

export function ArcMethod_feeHistory() {
  return (
    <EthereumMethod_feeHistory
      replaceCodeSnippetsURLFrom={DRPC_ENDPOINT_URL}
      replaceCodeSnippetsURLTo={DRPC_ENDPOINT_URL_ARC}
      network="arc"
    />
  );
}
