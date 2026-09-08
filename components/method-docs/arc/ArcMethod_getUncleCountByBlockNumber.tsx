import { DRPC_ENDPOINT_URL } from "../ethereum/constants";
import { EthereumMethod_getUncleCountByBlockNumber } from "../ethereum/EthereumMethod_getUncleCountByBlockNumber";
import { DRPC_ENDPOINT_URL_ARC } from "./constants";

export function ArcMethod_getUncleCountByBlockNumber() {
  return (
    <EthereumMethod_getUncleCountByBlockNumber
      replaceCodeSnippetsURLFrom={DRPC_ENDPOINT_URL}
      replaceCodeSnippetsURLTo={DRPC_ENDPOINT_URL_ARC}
      network="arc"
    />
  );
}
