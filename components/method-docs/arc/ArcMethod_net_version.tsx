import { DRPC_ENDPOINT_URL } from "../ethereum/constants";
import { EthereumMethod_net_version } from "../ethereum/EthereumMethod_net_version";
import { DRPC_ENDPOINT_URL_ARC } from "./constants";

export function ArcMethod_net_version() {
  return (
    <EthereumMethod_net_version
      replaceCodeSnippetsURLFrom={DRPC_ENDPOINT_URL}
      replaceCodeSnippetsURLTo={DRPC_ENDPOINT_URL_ARC}
      network="arc"
    />
  );
}
