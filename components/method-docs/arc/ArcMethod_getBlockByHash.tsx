import { DRPC_ENDPOINT_URL } from "../ethereum/constants";
import { EthereumMethod_getBlockByHash } from "../ethereum/EthereumMethod_getBlockByHash";
import { DRPC_ENDPOINT_URL_ARC } from "./constants";

export function ArcMethod_getBlockByHash() {
  return (
    <EthereumMethod_getBlockByHash
      replaceCodeSnippetsURLFrom={DRPC_ENDPOINT_URL}
      replaceCodeSnippetsURLTo={DRPC_ENDPOINT_URL_ARC}
      network="arc"
    />
  );
}
