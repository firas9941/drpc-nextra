import { DRPC_ENDPOINT_URL } from "../ethereum/constants";
import { EthereumMethod_mining } from "../ethereum/EthereumMethod_mining";
import { DRPC_ENDPOINT_URL_ARC } from "./constants";

export function ArcMethod_mining() {
  return (
    <EthereumMethod_mining
      replaceCodeSnippetsURLFrom={DRPC_ENDPOINT_URL}
      replaceCodeSnippetsURLTo={DRPC_ENDPOINT_URL_ARC}
      network="arc"
    />
  );
}
