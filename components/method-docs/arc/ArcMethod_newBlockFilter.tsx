import { DRPC_ENDPOINT_URL } from "../ethereum/constants";
import { EthereumMethod_newBlockFilter } from "../ethereum/EthereumMethod_newBlockFilter";
import { DRPC_ENDPOINT_URL_ARC } from "./constants";

export function ArcMethod_newBlockFilter() {
  return (
    <EthereumMethod_newBlockFilter
      replaceCodeSnippetsURLFrom={DRPC_ENDPOINT_URL}
      replaceCodeSnippetsURLTo={DRPC_ENDPOINT_URL_ARC}
      network="arc"
    />
  );
}
