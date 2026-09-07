import { DRPC_ENDPOINT_URL } from "../ethereum/constants";
import { EthereumMethod_getBalance } from "../ethereum/EthereumMethod_getBalance";
import { DRPC_ENDPOINT_URL_ARC } from "./constants";

export function ArcMethod_getBalance() {
  return (
    <EthereumMethod_getBalance
      replaceCodeSnippetsURLFrom={DRPC_ENDPOINT_URL}
      replaceCodeSnippetsURLTo={DRPC_ENDPOINT_URL_ARC}
      network="arc"
    />
  );
}
