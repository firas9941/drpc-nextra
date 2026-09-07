import { DRPC_ENDPOINT_URL } from "../ethereum/constants";
import { EthereumMethod_maxPriorityFeePerGas } from "../ethereum/EthereumMethod_maxPriorityFeePerGas";
import { DRPC_ENDPOINT_URL_ARC } from "./constants";

export function ArcMethod_maxPriorityFeePerGas() {
  return (
    <EthereumMethod_maxPriorityFeePerGas
      replaceCodeSnippetsURLFrom={DRPC_ENDPOINT_URL}
      replaceCodeSnippetsURLTo={DRPC_ENDPOINT_URL_ARC}
      network="arc"
    />
  );
}
