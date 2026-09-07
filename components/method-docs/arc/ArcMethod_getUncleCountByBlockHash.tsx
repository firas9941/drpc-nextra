import { DRPC_ENDPOINT_URL } from "../ethereum/constants";
import { EthereumMethod_getUncleCountByBlockHash } from "../ethereum/EthereumMethod_getUncleCountByBlockHash";
import { DRPC_ENDPOINT_URL_ARC } from "./constants";

export function ArcMethod_getUncleCountByBlockHash() {
  return (
    <EthereumMethod_getUncleCountByBlockHash
      replaceCodeSnippetsURLFrom={DRPC_ENDPOINT_URL}
      replaceCodeSnippetsURLTo={DRPC_ENDPOINT_URL_ARC}
      network="arc"
    />
  );
}
