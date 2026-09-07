import { DRPC_ENDPOINT_URL } from "../ethereum/constants";
import { EthereumMethod_blockNumber } from "../ethereum/EthereumMethod_blockNumber";
import { DRPC_ENDPOINT_URL_ARC } from "./constants";

export function ArcMethod_blockNumber() {
  return (
    <EthereumMethod_blockNumber
      replaceCodeSnippetsURLFrom={DRPC_ENDPOINT_URL}
      replaceCodeSnippetsURLTo={DRPC_ENDPOINT_URL_ARC}
      network="arc"
    />
  );
}
