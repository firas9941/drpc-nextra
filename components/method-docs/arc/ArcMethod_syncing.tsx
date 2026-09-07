import { DRPC_ENDPOINT_URL } from "../ethereum/constants";
import { EthereumMethod_syncing } from "../ethereum/EthereumMethod_syncing";
import { DRPC_ENDPOINT_URL_ARC } from "./constants";

export function ArcMethod_syncing() {
  return (
    <EthereumMethod_syncing
      replaceCodeSnippetsURLFrom={DRPC_ENDPOINT_URL}
      replaceCodeSnippetsURLTo={DRPC_ENDPOINT_URL_ARC}
      network="arc"
    />
  );
}
