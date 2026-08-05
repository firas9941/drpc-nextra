import TronMethod from "../../TronMethod/TronMethod";
import { GenericMethodPropsReplacing } from "../../GenericMethod/GenericMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import { DRPC_ENDPOINT_URL_TRON_PAID } from "./constants";

export function TronMethod_getblockbalance(props: GenericMethodPropsReplacing) {
  return (
    <TronMethod
      method="getblockbalance"
      network="tron"
      cu={20}
      description={"Returns the aggregated balance changes for all accounts within a specific block."}
      useCases={USE_CASES}
      constraints={CONSTRAINTS}
      codeSnippets={CODE_SNIPPETS}
      requestParams={REQUEST_PARAMS}
      requestParamsType="object"
      responseJSON={RESPONSE_JSON}
      responseParams={RESPONSE_PARAMS}
      responseParamsType="object"
      responseParamsDescription={
        "Returns the aggregated balance changes for all accounts within a specific block."
      }
      {...props}
    />
  );
}

const CODE_SNIPPETS: Array<CodeSnippetObject> = [
  {
    language: "shell",
    code: () => `curl --request POST \\
     --url ${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/getblockbalance \\
     --header 'accept: application/json' \\
     --header 'content-type: application/json' \\
     --data '{"hash": "example", "number": 1, "visible": true}'`,
  },
  {
    language: "js",
    code: () => `const url = '${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/getblockbalance';

const data = {"hash": "example", "number": 1, "visible": true};

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

const url = '${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/getblockbalance';

const data = {"hash": "example", "number": 1, "visible": true};

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
    url := "${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/getblockbalance"

    data := map[string]interface{}{
       "hash": "example",
       "number": 1,
       "visible": true,
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

url = '${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/getblockbalance'

data = {
    "hash": "example",
    "number": 1,
    "visible": True
}

response = requests.post(url, headers={'Content-Type': 'application/json'}, data=json.dumps(data))
res = response.json()

print(res)
`,
  },
];

const RESPONSE_JSON = `{
  "block_identifier": {
    "hash": "000000000000dc2a3731e28a75b49ac1379bcc425afc95f6ab3916689fbb0189",
    "number": 56362
  },
  "timestamp": 1530060672000,
  "transaction_balance_trace": [
    {
      "transaction_identifier": "e6cabb1833cd1f795eed39d8dd7689eaa70e5bb217611766c74c7aa9feea80df",
      "operation": [
        {
          "operation_identifier": 0,
          "address": "TPttBLmFuykRi83y9HxDoEWxTQw6CCcQ4p",
          "amount": -100000
        },
        {
          "operation_identifier": 1,
          "address": "TLsV52sRDL79HXGGm9yzwKibb6BeruhUzy",
          "amount": 100000
        },
        {
          "operation_identifier": 2,
          "address": "TPttBLmFuykRi83y9HxDoEWxTQw6CCcQ4p",
          "amount": -10000000
        },
        {
          "operation_identifier": 3,
          "address": "TMrysg7DbwR1M8xqhpaPdVCHCuWFhw7uk1",
          "amount": 10000000
        }
      ],
      "type": "TransferContract",
      "status": "SUCCESS"
    }
  ]
}`;

const REQUEST_PARAMS: RequestParamProp = [
  {
    paramName: "hash",
    type: "string",
    paramDescription: "The block hash to query",
  },
  {
    paramName: "number",
    type: "integer",
    paramDescription: "The block number to query",
  },
  {
    paramName: "visible",
    type: "boolean",
    paramDescription: "When true, addresses are base58check strings; when false (default), hex strings",
  },
];

const RESPONSE_PARAMS: ReqResParam[] = [
  {
  paramName: "block_identifier",
  type: "object",
  childrenParamsType: "object",
  paramDescription: "Identifies the block whose per-account balance changes are being reported.",
  childrenParams: [
    {
      paramName: "hash",
      type: "string",
      paramDescription: "The unique hash identifying this block.",
    },
    {
      paramName: "number",
      type: "integer",
      paramDescription: "The height (sequential number) of this block in the chain.",
    },
  ],
},
{
  paramName: "timestamp",
  type: "integer",
  paramDescription: "Unix timestamp, in ms, at which this block was produced.",
},
{
  paramName: "transaction_balance_trace",
  type: "array_of_objects",
  childrenParamsType: "object",
  paramDescription: "The list of transactions in this block, each broken down into the individual balance movements it caused.",
  childrenParams: [
    {
      paramName: "transaction_identifier",
      type: "string",
      paramDescription: "The unique transaction hash (transaction ID) this balance trace belongs to.",
    },
    {
      paramName: "operation",
      type: "array_of_objects",
      childrenParamsType: "object",
      paramDescription: "The individual debit/credit entries that make up this transaction's net effect on account balances.",
      childrenParams: [
        {
          paramName: "operation_identifier",
          type: "integer",
          paramDescription: "The sequential index of this balance-change entry within the transaction.",
        },
        {
          paramName: "address",
          type: "string",
          paramDescription: "The account address affected by this balance-change entry.",
        },
        {
          paramName: "amount",
          type: "integer",
          paramDescription: "The change in TRX balance for this address, in sun; negative for a debit, positive for a credit.",
        },
      ],
    },
    {
      paramName: "type",
      type: "string",
      paramDescription: "The contract type that produced these balance changes (e.g. TransferContract).",
    },
    {
      paramName: "status",
      type: "string",
      paramDescription: "The execution outcome of the transaction (e.g. SUCCESS, FAILED).",
    },
  ],
}
];

const USE_CASES = [
  "Audit total TRX movement within a specific block",
  "Reconcile fee burn and reward distribution for a block",
];

const CONSTRAINTS = [
  "Requires either hash or number to identify the block; providing both is recommended for verification",
  "Only available on full history / archive nodes for older blocks",
];
