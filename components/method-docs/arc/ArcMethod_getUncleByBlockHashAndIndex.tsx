import { DRPC_ENDPOINT_URL } from "../ethereum/constants";
import { EthereumMethod_getUncleByBlockHashAndIndex } from "../ethereum/EthereumMethod_getUncleByBlockHashAndIndex";
import { DRPC_ENDPOINT_URL_ARC } from "./constants";

export function ArcMethod_getUncleByBlockHashAndIndex() {
  return (
    <EthereumMethod_getUncleByBlockHashAndIndex
      replaceCodeSnippetsURLFrom={DRPC_ENDPOINT_URL}
      replaceCodeSnippetsURLTo={DRPC_ENDPOINT_URL_ARC}
      network="arc"
    />
  );
}
