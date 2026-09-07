import { DRPC_ENDPOINT_URL } from "../ethereum/constants";
import { EthereumMethod_net_peerCount } from "../ethereum/EthereumMethod_net_peerCount";
import { DRPC_ENDPOINT_URL_ARC } from "./constants";

export function ArcMethod_net_peerCount() {
  return (
    <EthereumMethod_net_peerCount
      replaceCodeSnippetsURLFrom={DRPC_ENDPOINT_URL}
      replaceCodeSnippetsURLTo={DRPC_ENDPOINT_URL_ARC}
      network="arc"
    />
  );
}
