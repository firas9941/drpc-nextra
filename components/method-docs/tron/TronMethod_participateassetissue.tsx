import TronMethod from "../../TronMethod/TronMethod";
import { GenericMethodPropsReplacing } from "../../GenericMethod/GenericMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import { DRPC_ENDPOINT_URL_TRON_PAID } from "./constants";

export function TronMethod_participateassetissue(props: GenericMethodPropsReplacing) {
  return (
    <TronMethod
      method="participateassetissue"
      network="tron"
      cu={20}
      description={"Creates a transaction to purchase a TRC10 token during its issuance period."}
      useCases={USE_CASES}
      constraints={CONSTRAINTS}
      codeSnippets={CODE_SNIPPETS}
      requestParams={REQUEST_PARAMS}
      requestParamsType="object"
      responseJSON={RESPONSE_JSON}
      responseParams={RESPONSE_PARAMS}
      responseParamsType="object"
      responseParamsDescription={
        "Creates a transaction to purchase a TRC10 token during its issuance period."
      }
      {...props}
    />
  );
}

const CODE_SNIPPETS: Array<CodeSnippetObject> = [
  {
    language: "shell",
    code: () => `curl --request POST \\
     --url ${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/participateassetissue \\
     --header 'accept: application/json' \\
     --header 'content-type: application/json' \\
     --data '{"owner_address": "TZ4UXDV5ZhNW7fb2AMSbgfAEZ7hWsnYS2g", "to_address": "TZ4UXDV5ZhNW7fb2AMSbgfAEZ7hWsnYS2g", "asset_name": "example", "amount": 1, "visible": true}'`,
  },
  {
    language: "js",
    code: () => `const url = '${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/participateassetissue';

const data = {"owner_address": "TZ4UXDV5ZhNW7fb2AMSbgfAEZ7hWsnYS2g", "to_address": "TZ4UXDV5ZhNW7fb2AMSbgfAEZ7hWsnYS2g", "asset_name": "example", "amount": 1, "visible": true};

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

const url = '${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/participateassetissue';

const data = {"owner_address": "TZ4UXDV5ZhNW7fb2AMSbgfAEZ7hWsnYS2g", "to_address": "TZ4UXDV5ZhNW7fb2AMSbgfAEZ7hWsnYS2g", "asset_name": "example", "amount": 1, "visible": true};

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
    url := "${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/participateassetissue"

    data := map[string]interface{}{
       "owner_address": "TZ4UXDV5ZhNW7fb2AMSbgfAEZ7hWsnYS2g",
       "to_address": "TZ4UXDV5ZhNW7fb2AMSbgfAEZ7hWsnYS2g",
       "asset_name": "example",
       "amount": 1,
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

url = '${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/participateassetissue'

data = {
    "owner_address": "TZ4UXDV5ZhNW7fb2AMSbgfAEZ7hWsnYS2g",
    "to_address": "TZ4UXDV5ZhNW7fb2AMSbgfAEZ7hWsnYS2g",
    "asset_name": "example",
    "amount": 1,
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
  "txID": "1c2d37ad679f720266a0565d0170bcce2b4d096953badf5c848b85137005b5d4",
  "raw_data": {
    "contract": [
      {
        "parameter": {
          "value": {
            "amount": 1000000,
            "asset_name": "31303035343136",
            "owner_address": "41dd791d6b49e190062d650e6a23c575510d35f2f9",
            "to_address": "41088a2bfcb1c7271029fd69a66859d55560895884"
          },
          "type_url": "type.googleapis.com/protocol.ParticipateAssetIssueContract"
        },
        "type": "ParticipateAssetIssueContract"
      }
    ],
    "ref_block_bytes": "2794",
    "ref_block_hash": "ba3c3fb8fa06d426",
    "expiration": 1777446312000,
    "timestamp": 1777446253445
  },
  "raw_data_hex": "0a0227942208ba3c3fb8fa06d42640c0b0b9c0dd335a7d080912790a3a747970652e676f6f676c65617069732e636f6d2f70726f746f636f6c2e506172746963697061746541737365744973737565436f6e7472616374123b0a1541dd791d6b49e190062d650e6a23c575510d35f2f9121541088a2bfcb1c7271029fd69a66859d555608958841a073130303534313620c0843d7085e7b5c0dd33"
}`;

const REQUEST_PARAMS: RequestParamProp = [
  {
    paramName: "owner_address",
    type: "string",
    paramDescription: "[Required] The buyer's address",
  },
  {
    paramName: "to_address",
    type: "string",
    paramDescription: "[Required] The token issuer's address",
  },
  {
    paramName: "asset_name",
    type: "string",
    paramDescription: "[Required] The TRC10 token's numeric asset ID",
  },
  {
    paramName: "amount",
    type: "integer",
    paramDescription: "[Required] Amount of TRX to spend, in sun",
  },
{
  paramName: "Permission_id",
  type: "integer",
  paramDescription: "Multi-sig permission ID",
},
  {
    paramName: "visible",
    type: "boolean",
    paramDescription: "When true, addresses are base58check strings; when false (default), hex strings",
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
              paramDescription: "The decoded fields of the contract — here, a request to buy into an ongoing TRC10 fundraising.",
              childrenParams: [
                {
                  paramName: "amount",
                  type: "integer",
                  paramDescription: "The amount of TRX, in sun, being contributed to purchase the token during its fundraising period.",
                },
                {
                  paramName: "asset_name",
                  type: "string",
                  paramDescription: "The hex-encoded identifier of the TRC10 token being purchased.",
                },
                {
                  paramName: "owner_address",
                  type: "string",
                  paramDescription: "The address contributing TRX to participate in the fundraising, in hex format.",
                },
                {
                  paramName: "to_address",
                  type: "string",
                  paramDescription: "The address of the token's issuer, in hex format.",
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
          paramDescription: "The human-readable name of the contract type being executed (here, ParticipateAssetIssueContract).",
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
  "Buy into a TRC10 token sale at its fixed TRX exchange rate",
];

const CONSTRAINTS = [
  "Only works while the token's issuance start_time/end_time window is active",
];
