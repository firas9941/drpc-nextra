import { DRPC_ENDPOINT_URL } from "../ethereum/constants";
import { EthereumMethod_getBlockByNumber } from "../ethereum/EthereumMethod_getBlockByNumber";
import { DRPC_ENDPOINT_URL_ARC } from "./constants";

export function ArcMethod_getBlockByNumber() {
  return (
    <EthereumMethod_getBlockByNumber
      replaceCodeSnippetsURLFrom={DRPC_ENDPOINT_URL}
      replaceCodeSnippetsURLTo={DRPC_ENDPOINT_URL_ARC}
      network="arc"
    />
  );
}
