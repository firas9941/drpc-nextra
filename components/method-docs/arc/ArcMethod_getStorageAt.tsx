import { DRPC_ENDPOINT_URL } from "../ethereum/constants";
import { EthereumMethod_getStorageAt } from "../ethereum/EthereumMethod_getStorageAt";
import { DRPC_ENDPOINT_URL_ARC } from "./constants";

export function ArcMethod_getStorageAt() {
  return (
    <EthereumMethod_getStorageAt
      replaceCodeSnippetsURLFrom={DRPC_ENDPOINT_URL}
      replaceCodeSnippetsURLTo={DRPC_ENDPOINT_URL_ARC}
      network="arc"
    />
  );
}
