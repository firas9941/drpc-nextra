import { DRPC_ENDPOINT_URL } from "../ethereum/constants";
import { EthereumMethod_getProof } from "../ethereum/EthereumMethod_getProof";
import { DRPC_ENDPOINT_URL_ARC } from "./constants";

export function ArcMethod_getProof() {
  return (
    <EthereumMethod_getProof
      replaceCodeSnippetsURLFrom={DRPC_ENDPOINT_URL}
      replaceCodeSnippetsURLTo={DRPC_ENDPOINT_URL_ARC}
      network="arc"
    />
  );
}
