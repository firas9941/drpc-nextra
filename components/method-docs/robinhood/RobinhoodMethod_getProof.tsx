import { DRPC_ENDPOINT_URL } from "../ethereum/constants";
import { EthereumMethod_getProof } from "../ethereum/EthereumMethod_getProof";
import { DRPC_ENDPOINT_URL_ROBINHOOD } from "./constants";

export function RobinhoodMethod_getProof() {
  return (
    <EthereumMethod_getProof
      replaceCodeSnippetsURLFrom={DRPC_ENDPOINT_URL}
      replaceCodeSnippetsURLTo={DRPC_ENDPOINT_URL_ROBINHOOD}
      network="robinhood"
    />
  );
}
