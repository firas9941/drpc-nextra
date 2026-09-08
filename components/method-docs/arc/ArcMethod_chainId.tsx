import { DRPC_ENDPOINT_URL } from "../ethereum/constants";
import { EthereumMethod_chainId } from "../ethereum/EthereumMethod_chainId";
import { DRPC_ENDPOINT_URL_ARC } from "./constants";

export function ArcMethod_chainId() {
  return (
    <EthereumMethod_chainId
      replaceCodeSnippetsURLFrom={DRPC_ENDPOINT_URL}
      replaceCodeSnippetsURLTo={DRPC_ENDPOINT_URL_ARC}
      network="arc"
    />
  );
}
