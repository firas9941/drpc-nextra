import { DRPC_ENDPOINT_URL } from "../ethereum/constants";
import { EthereumMethod_createAccessList } from "../ethereum/EthereumMethod_createAccessList";
import { DRPC_ENDPOINT_URL_ARC } from "./constants";

export function ArcMethod_createAccessList() {
  return (
    <EthereumMethod_createAccessList
      replaceCodeSnippetsURLFrom={DRPC_ENDPOINT_URL}
      replaceCodeSnippetsURLTo={DRPC_ENDPOINT_URL_ARC}
      network="arc"
    />
  );
}
