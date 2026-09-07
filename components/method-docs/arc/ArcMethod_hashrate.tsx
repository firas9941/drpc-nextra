import { DRPC_ENDPOINT_URL } from "../ethereum/constants";
import { EthereumMethod_hashrate } from "../ethereum/EthereumMethod_hashrate";
import { DRPC_ENDPOINT_URL_ARC } from "./constants";

export function ArcMethod_hashrate() {
  return (
    <EthereumMethod_hashrate
      replaceCodeSnippetsURLFrom={DRPC_ENDPOINT_URL}
      replaceCodeSnippetsURLTo={DRPC_ENDPOINT_URL_ARC}
      network="arc"
    />
  );
}
