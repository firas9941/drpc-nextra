import { DRPC_ENDPOINT_URL } from "../ethereum/constants";
import { EthereumMethod_accounts } from "../ethereum/EthereumMethod_accounts";
import { DRPC_ENDPOINT_URL_ARC } from "./constants";

export function ArcMethod_accounts() {
  return (
    <EthereumMethod_accounts
      replaceCodeSnippetsURLFrom={DRPC_ENDPOINT_URL}
      replaceCodeSnippetsURLTo={DRPC_ENDPOINT_URL_ARC}
      network="arc"
    />
  );
}
