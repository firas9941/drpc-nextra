import { DRPC_ENDPOINT_URL } from "../ethereum/constants";
import { EthereumMethod_getCode } from "../ethereum/EthereumMethod_getCode";
import { DRPC_ENDPOINT_URL_ARC } from "./constants";

export function ArcMethod_getCode() {
  return (
    <EthereumMethod_getCode
      replaceCodeSnippetsURLFrom={DRPC_ENDPOINT_URL}
      replaceCodeSnippetsURLTo={DRPC_ENDPOINT_URL_ARC}
      network="arc"
    />
  );
}
