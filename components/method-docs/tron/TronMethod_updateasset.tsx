import TronMethod from "../../TronMethod/TronMethod";
import { GenericMethodPropsReplacing } from "../../GenericMethod/GenericMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import { DRPC_ENDPOINT_URL_TRON_PAID } from "./constants";

export function TronMethod_updateasset(props: GenericMethodPropsReplacing) {
  return (
    <TronMethod
      method="updateasset"
      network="tron"
      cu={20}
      description={"Updates the description, URL, and limits of an issued TRC10 token."}
      useCases={USE_CASES}
      constraints={CONSTRAINTS}
      codeSnippets={CODE_SNIPPETS}
      requestParams={REQUEST_PARAMS}
      requestParamsType="object"
      responseJSON={RESPONSE_JSON}
      responseParams={RESPONSE_PARAMS}
      responseParamsType="object"
      responseParamsDescription={
        "Updates the description, URL, and limits of an issued TRC10 token."
      }
      {...props}
    />
  );
}

const CODE_SNIPPETS: Array<CodeSnippetObject> = [
  {
    language: "shell",
    code: () => `curl --request POST \\
     --url ${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/updateasset \\
     --header 'accept: application/json' \\
     --header 'content-type: application/json' \\
     --data '{"owner_address": "TZ4UXDV5ZhNW7fb2AMSbgfAEZ7hWsnYS2g", "description": "example", "url": "example", "new_limit": 1, "new_public_limit": 1, "visible": true}'`,
  },
  {
    language: "js",
    code: () => `const url = '${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/updateasset';

const data = {"owner_address": "TZ4UXDV5ZhNW7fb2AMSbgfAEZ7hWsnYS2g", "description": "example", "url": "example", "new_limit": 1, "new_public_limit": 1, "visible": true};

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

const url = '${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/updateasset';

const data = {"owner_address": "TZ4UXDV5ZhNW7fb2AMSbgfAEZ7hWsnYS2g", "description": "example", "url": "example", "new_limit": 1, "new_public_limit": 1, "visible": true};

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
    url := "${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/updateasset"

    data := map[string]interface{}{
       "owner_address": "TZ4UXDV5ZhNW7fb2AMSbgfAEZ7hWsnYS2g",
       "description": "example",
       "url": "example",
       "new_limit": 1,
       "new_public_limit": 1,
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

url = '${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/updateasset'

data = {
    "owner_address": "TZ4UXDV5ZhNW7fb2AMSbgfAEZ7hWsnYS2g",
    "description": "example",
    "url": "example",
    "new_limit": 1,
    "new_public_limit": 1,
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
  "txID": "6c1b46170308da102f2b70b4976ead59b3c9c02bba044c18da27f7e25779e10d",
  "raw_data": {
    "contract": [
      {
        "parameter": {
          "value": {
            "owner_address": "41088a2bfcb1c7271029fd69a66859d55560895884",
            "description": "44494345",
            "url": "68747470733a2f2f747261782e696f",
            "new_limit": 5000,
            "new_public_limit": 10000
          },
          "type_url": "type.googleapis.com/protocol.UpdateAssetContract"
        },
        "type": "UpdateAssetContract"
      }
    ],
    "ref_block_bytes": "2799",
    "ref_block_hash": "0734893a1ba1ff5e",
    "expiration": 1777446327000,
    "timestamp": 1777446269173
  },
  "raw_data_hex": "0a02279922080734893a1ba1ff5e40d8a5bac0dd335a6c080f12680a30747970652e676f6f676c65617069732e636f6d2f70726f746f636f6c2e5570646174654173736574436f6e747261637412340a1541088a2bfcb1c7271029fd69a66859d555608958841204444943451a0f68747470733a2f2f747261782e696f20882728904e70f5e1b6c0dd33"
}`;

const REQUEST_PARAMS: RequestParamProp = [
  {
    paramName: "owner_address",
    type: "string",
    paramDescription: "[Required] The issuing account's address",
  },
  {
    paramName: "description",
    type: "string",
    paramDescription: "New free-text description of the token",
  },
  {
    paramName: "url",
    type: "string",
    paramDescription: "New URL with more information about the token/project",
  },
  {
    paramName: "new_limit",
    type: "integer",
    paramDescription: "New free bandwidth each holder gets per day for this token",
  },
  {
    paramName: "new_public_limit",
    type: "integer",
    paramDescription: "New total free bandwidth shared across all holders per day",
  },
  {
    paramName: "visible",
    type: "boolean",
    paramDescription: "When true, addresses/strings are human-readable; when false (default), hex-encoded",
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
  paramDescription: "Indicates whether addresses and text fields in this transaction are represented in base58/UTF-8 (true) or hex (false).",
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
              paramDescription: "The decoded fields of the contract — here, a request by a TRC10 issuer to update their token's description, URL, and bandwidth quotas.",
              childrenParams: [
                {
                  paramName: "owner_address",
                  type: "string",
                  paramDescription: "The address of the TRC10 token issuer updating these fields, in hex format.",
                },
                {
                  paramName: "description",
                  type: "string",
                  paramDescription: "The token's new description, UTF-8 encoded as a hex string.",
                },
                {
                  paramName: "url",
                  type: "string",
                  paramDescription: "The token's new project URL, UTF-8 encoded as a hex string.",
                },
                {
                  paramName: "new_limit",
                  type: "integer",
                  paramDescription: "The new free bandwidth quota granted per account for transactions involving this token.",
                },
                {
                  paramName: "new_public_limit",
                  type: "integer",
                  paramDescription: "The new shared free bandwidth quota available to all accounts collectively for transactions involving this token.",
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
          paramDescription: "The human-readable name of the contract type being executed (here, UpdateAssetContract).",
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
  "Update a TRC10 token's project URL or description after issuance",
  "Adjust the free bandwidth quota granted to token holders",
];

const CONSTRAINTS = [
  "Only the token's issuing owner_address can update it",
  "Cannot change immutable fields like name, abbr, or total_supply",
];
