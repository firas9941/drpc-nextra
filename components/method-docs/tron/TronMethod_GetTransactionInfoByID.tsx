import TronMethod from "../../TronMethod/TronMethod";
import { GenericMethodPropsReplacing } from "../../GenericMethod/GenericMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import { DRPC_ENDPOINT_URL_TRON_PAID } from "./constants";

export function TronMethod_gettransactioninfobyid(props: GenericMethodPropsReplacing) {
  return (
    <TronMethod
      method="gettransactioninfobyid"
      network="tron"
      cu={20}
      description={"Returns the execution result, receipt, and logs for a confirmed transaction by its hash."}
      useCases={USE_CASES}
      constraints={CONSTRAINTS}
      codeSnippets={CODE_SNIPPETS}
      requestParams={REQUEST_PARAMS}
      requestParamsType="object"
      responseJSON={RESPONSE_JSON}
      responseParams={RESPONSE_PARAMS}
      responseParamsType="object"
      responseParamsDescription={
        "Returns the execution result, receipt, and logs for a confirmed transaction by its hash."
      }
      {...props}
    />
  );
}

const CODE_SNIPPETS: Array<CodeSnippetObject> = [
  {
    language: "shell",
    code: () => `curl --request POST \\
     --url ${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/gettransactioninfobyid \\
     --header 'accept: application/json' \\
     --header 'content-type: application/json' \\
     --data '{"value": "example"}'`,
  },
  {
    language: "js",
    code: () => `const url = '${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/gettransactioninfobyid';

const data = {"value": "example"};

fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data)
})
  .then(response => response.json())
  .then(res => console.log(res))
  .catch(error => console.error('Error:', error));
`,
  },
  {
    language: "node",
    code: () => `const fetch = require('node-fetch');

const url = '${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/gettransactioninfobyid';

const data = {"value": "example"};

fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data)
})
  .then(response => response.json())
  .then(res => console.log(res))
  .catch(error => console.error('Error:', error));
`,
  },
  {
    language: "go",
    code: () => `package main

import (
    "bytes"
    "encoding/json"
    "fmt"
    "net/http"
)

func main() {
    url := "${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/gettransactioninfobyid"

    data := map[string]interface{}{
       "value": "example",
    }

    jsonData, err := json.Marshal(data)
    if err != nil {
       fmt.Println("Error marshaling JSON:", err)
       return
    }

    resp, err := http.Post(url, "application/json", bytes.NewBuffer(jsonData))
    if err != nil {
       fmt.Println("Error making request:", err)
       return
    }
    defer resp.Body.Close()

    var result map[string]interface{}
    json.NewDecoder(resp.Body).Decode(&result)

    fmt.Println(result)
}
`,
  },
  {
    language: "python",
    code: () => `import requests
import json

url = '${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/gettransactioninfobyid'

data = {
    "value": "example"
}

response = requests.post(url, headers={'Content-Type': 'application/json'}, data=json.dumps(data))
res = response.json()

print(res)
`,
  },
];

const RESPONSE_JSON = `{
  "id": "d0807adb3c5412aa150787b944c96ee898c997debdc27e2f6a643c771edb5933",
  "fee": 2790,
  "blockNumber": 5467102,
  "blockTimeStamp": 1546455621000,
  "contractResult": [
    ""
  ],
  "receipt": {
    "net_fee": 2790
  }
}`;

const REQUEST_PARAMS: RequestParamProp = [
  {
    paramName: "value",
    type: "string",
    paramDescription: "[Required for GET] The transaction hash to look up",
  },
  {
  paramName: "visible",
  type: "boolean",
  paramDescription: "Set to true to format addresses in Base58; set to false for hex format. (Default: false)",
},
];

const RESPONSE_PARAMS: ReqResParam[] = [
  {
  paramName: "id",
  type: "string",
  paramDescription: "The unique transaction hash (transaction ID) this receipt belongs to.",
},
{
  paramName: "fee",
  type: "integer",
  paramDescription: "The total TRX fee, in sun, actually deducted for this transaction.",
},
{
  paramName: "blockNumber",
  type: "integer",
  paramDescription: "The height of the block in which this transaction was packed.",
},
{
  paramName: "blockTimeStamp",
  type: "integer",
  paramDescription: "Unix timestamp, in ms, of the block in which this transaction was packed.",
},
{
  paramName: "contractResult",
  type: "array_of_strings",
  paramDescription: "The hex-encoded return value(s) of the smart contract call.",
},
{
  paramName: "contract_address",
  type: "string",
  paramDescription: "The address of the smart contract that was deployed or invoked by this transaction.",
},
{
  paramName: "receipt",
  type: "object",
  paramDescription: "The resource consumption details recorded for this transaction, such as Energy and bandwidth usage.",
},
{
  paramName: "log",
  type: "array_of_objects",
  childrenParamsType: "object",
  paramDescription: "The list of event logs emitted by the smart contract during execution.",
  childrenParams: [
    {
      paramName: "address",
      type: "string",
      paramDescription: "The address of the contract that emitted this log entry.",
    },
    {
      paramName: "topics",
      type: "array_of_strings",
      paramDescription: "The indexed event parameters, where the first entry is the event signature hash and the rest are indexed argument values.",
    },
    {
      paramName: "data",
      type: "string",
      paramDescription: "The hex-encoded ABI-encoded non-indexed event parameters.",
    },
  ],
},
{
  paramName: "result",
  type: "string",
  paramDescription: "The overall execution outcome of the transaction, either SUCCESS or FAILED.",
},
{
  paramName: "resMessage",
  type: "string",
  paramDescription: "A hex-encoded explanation of why the transaction failed, present only when result is FAILED.",
},
{
  paramName: "internal_transactions",
  type: "array_of_objects",
  paramDescription: "The list of internal calls and transfers triggered by this transaction's contract execution.",
},
{
  paramName: "withdraw_amount",
  type: "integer",
  paramDescription: "The amount of witness block-production rewards withdrawn, present only for WithdrawBalance transactions.",
},
{
  paramName: "unfreeze_amount",
  type: "integer",
  paramDescription: "The amount of TRX released back to the account, present only for Stake 1.0 UnfreezeBalance transactions.",
},
{
  paramName: "withdraw_expire_amount",
  type: "integer",
  paramDescription: "The amount of matured Stake 2.0 unfrozen TRX withdrawn to the account's liquid balance.",
},
{
  paramName: "cancel_unfreezeV2_amount",
  type: "object",
  paramDescription: "A mapping of resource type to the amount of pending Stake 2.0 unfreeze that was cancelled and restaked.",
},
{
  paramName: "assetIssueID",
  type: "string",
  paramDescription: "The identifier assigned to a newly created TRC10 token, present only for CreateAssetIssue transactions.",
},
{
  paramName: "exchange_id",
  type: "string",
  paramDescription: "Fields related to TRON's on-chain bancor-style Exchange feature, such as the exchange pair identifier or resulting order ID; only present for Exchange-related contract types.",
}
];

const USE_CASES = [
  "Also available as GET",
  "Read event logs emitted by a smart contract call",
];

const CONSTRAINTS = [
  "Only available once the transaction is included in a block (not for pending transactions)",
  "Returns an empty object if the transaction hash is unknown",
  "Also available under /walletsolidity/ for confirmed (solidified) data instead of the latest state",
];
