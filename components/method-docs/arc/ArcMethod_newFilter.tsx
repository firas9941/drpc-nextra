import { DRPC_ENDPOINT_URL } from "../ethereum/constants";
import { EthereumMethod_newFilter } from "../ethereum/EthereumMethod_newFilter";
import { DRPC_ENDPOINT_URL_ARC } from "./constants";

export function ArcMethod_newFilter() {
  return (
    <EthereumMethod_newFilter
      replaceCodeSnippetsURLFrom={DRPC_ENDPOINT_URL}
      replaceCodeSnippetsURLTo={DRPC_ENDPOINT_URL_ARC}
      network="arc"
    />
  );
}
