import TronMethod from "../../TronMethod/TronMethod";
import { GenericMethodPropsReplacing } from "../../GenericMethod/GenericMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import { DRPC_ENDPOINT_URL_TRON_PAID } from "./constants";

export function TronMethod_freezebalancev2(props: GenericMethodPropsReplacing) {
  return (
    <TronMethod
      method="freezebalancev2"
      network="tron"
      cu={20}
      description={"Creates a transaction to freeze TRX for bandwidth or energy under the Stake 2.0 model."}
      useCases={USE_CASES}
      constraints={CONSTRAINTS}
      codeSnippets={CODE_SNIPPETS}
      requestParams={REQUEST_PARAMS}
      requestParamsType="object"
      responseJSON={RESPONSE_JSON}
      responseParams={RESPONSE_PARAMS}
      responseParamsType="object"
      responseParamsDescription={
        "Creates a transaction to freeze TRX for bandwidth or energy under the Stake 2.0 model."
      }
      {...props}
    />
  );
}

const CODE_SNIPPETS: Array<CodeSnippetObject> = [
  {
    language: "shell",
    code: () => `curl --request POST \\
     --url ${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/freezebalancev2 \\
     --header 'accept: application/json' \\
     --header 'content-type: application/json' \\
     --data '{"owner_address": "TZ4UXDV5ZhNW7fb2AMSbgfAEZ7hWsnYS2g", "frozen_balance": 1, "resource": "example", "visible": true}'`,
  },
  {
    language: "js",
    code: () => `const url = '${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/freezebalancev2';

const data = {"owner_address": "TZ4UXDV5ZhNW7fb2AMSbgfAEZ7hWsnYS2g", "frozen_balance": 1, "resource": "example", "visible": true};

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

const url = '${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/freezebalancev2';

const data = {"owner_address": "TZ4UXDV5ZhNW7fb2AMSbgfAEZ7hWsnYS2g", "frozen_balance": 1, "resource": "example", "visible": true};

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
    url := "${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/freezebalancev2"

    data := map[string]interface{}{
       "owner_address": "TZ4UXDV5ZhNW7fb2AMSbgfAEZ7hWsnYS2g",
       "frozen_balance": 1,
       "resource": "example",
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

url = '${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/freezebalancev2'

data = {
    "owner_address": "TZ4UXDV5ZhNW7fb2AMSbgfAEZ7hWsnYS2g",
    "frozen_balance": 1,
    "resource": "example",
    "visible": True
}

response = requests.post(url, headers={'Content-Type': 'application/json'}, data=json.dumps(data))
res = response.json()

print(res)
`,
  },
];

const RESPONSE_JSON = `{
  "visible": false,
  "txID": "081256264131fbc9f3d4686aab15ae69c0e77b39d276367c11a7ab13e39747ec",
  "raw_data": {
    "contract": [
      {
        "parameter": {
          "value": {
            "resource": "ENERGY",
            "frozen_balance": 1000000000,
            "owner_address": "41dd791d6b49e190062d650e6a23c575510d35f2f9"
          },
          "type_url": "type.googleapis.com/protocol.FreezeBalanceV2Contract"
        },
        "type": "FreezeBalanceV2Contract"
      }
    ],
    "ref_block_bytes": "283b",
    "ref_block_hash": "51bf0b88daaaea37",
    "expiration": 1777446819000,
    "timestamp": 1777446761432
  },
  "raw_data_hex": "0a02283b220851bf0b88daaaea3740b8a9d8c0dd335a5b083612570a34747970652e676f6f676c65617069732e636f6d2f70726f746f636f6c2e467265657a6542616c616e63655632436f6e7472616374121f0a1541dd791d6b49e190062d650e6a23c575510d35f2f9108094ebdc03180170d8e7d4c0dd33"
}`;

const REQUEST_PARAMS: RequestParamProp = [
   {
  paramName: "visible",
  type: "boolean",
  paramDescription: "Indicates whether addresses in this transaction are represented in base58 format (true) or hex format (false).",
},
     {
  paramName: "owner_address",
  type: "string",
  paramDescription: "[Required] Freezing account address",
},
     {
  paramName: "frozen_balance",
  type: "int64",
  paramDescription: "[Required] Frozen amount (sun)",
},
   {
  paramName: "resource",
  type: "enum",
  paramDescription: "BANDWIDTH / ENERGY / TRON_POWER, default BANDWIDTH",
},

{
  paramName: "Permission_id",
  type: "integer",
  paramDescription: "Multi-sig permission ID",
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
              paramDescription: "The decoded fields of the contract — here, a Stake 2.0 freeze request.",
              childrenParams: [
                {
                  paramName: "resource",
                  type: "string",
                  paramDescription: "The resource type being staked for, either BANDWIDTH or ENERGY.",
                },
                {
                  paramName: "frozen_balance",
                  type: "integer",
                  paramDescription: "The amount of TRX, in sun, to freeze (stake) for the specified resource.",
                },
                {
                  paramName: "owner_address",
                  type: "string",
                  paramDescription: "The address performing the freeze, in hex format.",
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
          paramDescription: "The human-readable name of the contract type being executed (here, FreezeBalanceV2Contract).",
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
  "Stake TRX for bandwidth or energy and gain voting rights under Stake 2.0",
  "Grow an account's resource capacity ahead of a busy period",
];

const CONSTRAINTS = [
  "Unfreezing (unfreezebalancev2) starts a waiting period before TRX can be withdrawn",
  "Voting rights from staked TRX must still be cast separately via votewitnessaccount",
];
