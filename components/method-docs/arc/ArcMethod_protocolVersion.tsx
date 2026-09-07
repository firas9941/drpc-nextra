import { DRPC_ENDPOINT_URL } from "../ethereum/constants";
import { EthereumMethod_protocolVersion } from "../ethereum/EthereumMethod_protocolVersion";
import { DRPC_ENDPOINT_URL_ARC } from "./constants";

export function ArcMethod_protocolVersion() {
  return (
    <EthereumMethod_protocolVersion
      replaceCodeSnippetsURLFrom={DRPC_ENDPOINT_URL}
      replaceCodeSnippetsURLTo={DRPC_ENDPOINT_URL_ARC}
      network="arc"
    />
  );
}
