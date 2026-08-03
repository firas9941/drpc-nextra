import TronMethod from "../../TronMethod/TronMethod";
import { GenericMethodPropsReplacing } from "../../GenericMethod/GenericMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import { DRPC_ENDPOINT_URL_TRON_PAID } from "./constants";

export function TronMethod_updateaccount(props: GenericMethodPropsReplacing) {
  return (
    <TronMethod
      method="updateaccount"
      network="tron"
      cu={20}
      description={"Updates the account name associated with a Tron address."}
      useCases={USE_CASES}
      constraints={CONSTRAINTS}
      codeSnippets={CODE_SNIPPETS}
      requestParams={REQUEST_PARAMS}
      requestParamsType="object"
      responseJSON={RESPONSE_JSON}
      responseParams={RESPONSE_PARAMS}
      responseParamsType="object"
      responseParamsDescription={
        "Updates the account name associated with a Tron address."
      }
      {...props}
    />
  );
}

const CODE_SNIPPETS: Array<CodeSnippetObject> = [
  {
    language: "shell",
    code: () => `curl --request POST \\
     --url ${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/updateaccount \\
     --header 'accept: application/json' \\
     --header 'content-type: application/json' \\
     --data '{"account_name": "example", "owner_address": "TZ4UXDV5ZhNW7fb2AMSbgfAEZ7hWsnYS2g", "visible": true}'`,
  },
  {
    language: "js",
    code: () => `const url = '${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/updateaccount';

const data = {"account_name": "example", "owner_address": "TZ4UXDV5ZhNW7fb2AMSbgfAEZ7hWsnYS2g", "visible": true};

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

const url = '${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/updateaccount';

const data = {"account_name": "example", "owner_address": "TZ4UXDV5ZhNW7fb2AMSbgfAEZ7hWsnYS2g", "visible": true};

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
    url := "${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/updateaccount"

    data := map[string]interface{}{
       "account_name": "example",
       "owner_address": "TZ4UXDV5ZhNW7fb2AMSbgfAEZ7hWsnYS2g",
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

url = '${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/updateaccount'

data = {
    "account_name": "example",
    "owner_address": "TZ4UXDV5ZhNW7fb2AMSbgfAEZ7hWsnYS2g",
    "visible": True
}

response = requests.post(url, headers={'Content-Type': 'application/json'}, data=json.dumps(data))
res = response.json()

print(res)
`,
  },
];

const RESPONSE_JSON = `{
  "visible": true,
  "txID": "f3c9aa2b4d122979f92a658be1804560f949a89c8b5d30e15b2d003712d72c92",
  "raw_data": {
    "contract": [{
      "parameter": {
        "value": {
          "account_name": "4d794163636f756e74",
          "owner_address": "TZ4UXDV5ZhNW7fb2AMSbgfAEZ7hWsnYS2g"
        },
        "type_url": "type.googleapis.com/protocol.AccountUpdateContract"
      },
      "type": "AccountUpdateContract"
    }],
    "ref_block_bytes": "63c3",
    "ref_block_hash": "0d248c2bc3eb218c",
    "expiration": 1580983653000,
    "timestamp": 1580983593572
  },
  "raw_data_hex": "0a0263c322080d248c2bc3eb218c..."
}`;

const REQUEST_PARAMS: RequestParamProp = [
  {
    paramName: "account_name",
    type: "string",
    paramDescription: "[Required] The new account name, UTF-8 encoded (hex if visible is false)",
  },
  {
    paramName: "owner_address",
    type: "string",
    paramDescription: "[Required] The account address to update",
  },
  {
    paramName: "permission_id",
    type: "integer",
    paramDescription: "Multi-sig permission ID",
  },
  {
    paramName: "visible",
    type: "boolean",
    paramDescription: "When true, addresses/strings are human-readable; when false (default), hex-encoded",
  },
];

const RESPONSE_PARAMS: ReqResParam[] = [
  {
  paramName: "visible",
  type: "boolean",
  paramDescription: "Indicates whether addresses in this transaction are represented in base58 format (true) or hex format (false).",
},
{
  paramName: "txID",
  type: "string",
  paramDescription: "The unique transaction hash (transaction ID), computed as the SHA256 of raw_data.",
},
{
  paramName: "raw_data",
  type: "object",
  childrenParamsType: "object",
  paramDescription: "The unsigned transaction body containing the contract instruction and blockchain reference data.",
  childrenParams: [
    {
      paramName: "contract",
      type: "array_of_objects",
      childrenParamsType: "object",
      paramDescription: "The list of contract instructions to be executed by this transaction.",
      childrenParams: [
        {
          paramName: "parameter",
          type: "object",
          childrenParamsType: "object",
          paramDescription: "The typed payload describing the specific contract call being made.",
          childrenParams: [
            {
              paramName: "value",
              type: "object",
              childrenParamsType: "object",
              paramDescription: "The decoded fields of the contract — here, a request to set an account's display name.",
              childrenParams: [
                {
                  paramName: "account_name",
                  type: "string",
                  paramDescription: "The new name to assign to the account, UTF-8 encoded as a hex string.",
                },
                {
                  paramName: "owner_address",
                  type: "string",
                  paramDescription: " The address of the account whose name is being updated, in hex format.",
                },
              ],
            },
            {
              paramName: "type_url",
              type: "string",
              paramDescription: "The fully qualified protobuf type identifier describing which contract schema `value` should be decoded with.",
            },
          ],
        },
        {
          paramName: "type",
          type: "string",
          paramDescription: "The human-readable name of the contract type being executed (here, AccountUpdateContract).",
        },
      ],
    },
    {
      paramName: "ref_block_bytes",
      type: "string",
      paramDescription: "The last two bytes of the reference block number, used for transaction expiration and replay protection.",
    },
    {
      paramName: "ref_block_hash",
      type: "string",
      paramDescription: "The last eight bytes of the reference block's hash, paired with ref_block_bytes for replay protection.",
    },
    {
      paramName: "expiration",
      type: "integer",
      paramDescription: "Unix timestamp, in ms, after which this transaction is no longer valid and will be rejected by the network.",
    },
    {
      paramName: "timestamp",
      type: "integer",
      paramDescription: "Unix timestamp, in ms, marking when the transaction was created/signed by the client.",
    },
  ],
},
{
  paramName: "raw_data_hex",
  type: "string",
  paramDescription: "The hex-encoded serialized bytes of raw_data, used as the actual payload to sign and broadcast.",
}
];

const USE_CASES = [
  "Set a human-readable display name for an account once, on-chain",
];

const CONSTRAINTS = [
  "An account name can only be set once and cannot be changed afterward",
  "The returned transaction is unsigned and must be broadcast separately",
];
