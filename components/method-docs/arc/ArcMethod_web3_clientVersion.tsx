import { DRPC_ENDPOINT_URL } from "../ethereum/constants";
import { EthereumMethod_web3_clientVersion } from "../ethereum/EthereumMethod_web3_clientVersion";
import { DRPC_ENDPOINT_URL_ARC } from "./constants";

export function ArcMethod_web3_clientVersion() {
  return (
    <EthereumMethod_web3_clientVersion
      replaceCodeSnippetsURLFrom={DRPC_ENDPOINT_URL}
      replaceCodeSnippetsURLTo={DRPC_ENDPOINT_URL_ARC}
      network="arc"
    />
  );
}
