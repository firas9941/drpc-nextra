import { DRPC_ENDPOINT_URL } from "../ethereum/constants";
import { EthereumMethod_protocolVersion } from "../ethereum/EthereumMethod_protocolVersion";
import { DRPC_ENDPOINT_URL_ROBINHOOD } from "./constants";

export function RobinhoodMethod_protocolVersion() {
  return (
    <EthereumMethod_protocolVersion
      replaceCodeSnippetsURLFrom={DRPC_ENDPOINT_URL}
      replaceCodeSnippetsURLTo={DRPC_ENDPOINT_URL_ROBINHOOD}
      network="robinhood"
    />
  );
}
