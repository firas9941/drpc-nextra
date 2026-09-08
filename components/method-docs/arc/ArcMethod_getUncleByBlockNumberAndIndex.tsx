import { DRPC_ENDPOINT_URL } from "../ethereum/constants";
import { EthereumMethod_getUncleByBlockNumberAndIndex } from "../ethereum/EthereumMethod_getUncleByBlockNumberAndIndex";
import { DRPC_ENDPOINT_URL_ARC } from "./constants";

export function ArcMethod_getUncleByBlockNumberAndIndex() {
  return (
    <EthereumMethod_getUncleByBlockNumberAndIndex
      replaceCodeSnippetsURLFrom={DRPC_ENDPOINT_URL}
      replaceCodeSnippetsURLTo={DRPC_ENDPOINT_URL_ARC}
      network="arc"
    />
  );
}
