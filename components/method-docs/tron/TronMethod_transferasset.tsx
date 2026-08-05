import TronMethod from "../../TronMethod/TronMethod";
import { GenericMethodPropsReplacing } from "../../GenericMethod/GenericMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import { DRPC_ENDPOINT_URL_TRON_PAID } from "./constants";

export function TronMethod_transferasset(props: GenericMethodPropsReplacing) {
  return (
    <TronMethod
      method="transferasset"
      network="tron"
      cu={20}
      description={"Creates a transaction to transfer a TRC10 token between two addresses."}
      useCases={USE_CASES}
      constraints={CONSTRAINTS}
      codeSnippets={CODE_SNIPPETS}
      requestParams={REQUEST_PARAMS}
      requestParamsType="object"
      responseJSON={RESPONSE_JSON}
      responseParams={RESPONSE_PARAMS}
      responseParamsType="object"
      responseParamsDescription={
        "Creates a transaction to transfer a TRC10 token between two addresses."
      }
      {...props}
    />
  );
}

const CODE_SNIPPETS: Array<CodeSnippetObject> = [
  {
    language: "shell",
    code: () => `curl --request POST \\
     --url ${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/transferasset \\
     --header 'accept: application/json' \\
     --header 'content-type: application/json' \\
     --data '{"owner_address": "TZ4UXDV5ZhNW7fb2AMSbgfAEZ7hWsnYS2g", "to_address": "TZ4UXDV5ZhNW7fb2AMSbgfAEZ7hWsnYS2g", "asset_name": "example", "amount": 1, "visible": true}'`,
  },
  {
    language: "js",
    code: () => `const url = '${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/transferasset';

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

const url = '${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/transferasset';

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
    url := "${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/transferasset"

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

url = '${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/transferasset'

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
  "txID": "7a8b50753079977b2cc0ddc19309c568e5bcaa8d2d865b3d96b40719b1b8df6f",
  "raw_data": {
    "contract": [
      {
        "parameter": {
          "value": {
            "amount": 100,
            "asset_name": "31303035343136",
            "owner_address": "41dd791d6b49e190062d650e6a23c575510d35f2f9",
            "to_address": "4192ad11c1bf16b3b14b0bd6b5c7e2db73a0b5e83a"
          },
          "type_url": "type.googleapis.com/protocol.TransferAssetContract"
        },
        "type": "TransferAssetContract"
      }
    ],
    "ref_block_bytes": "2765",
    "ref_block_hash": "d2e724f76534cfc4",
    "expiration": 1777446171000,
    "timestamp": 1777446111063
  },
  "raw_data_hex": "0a0227652208d2e724f76534cfc440f8e2b0c0dd335a730802126f0a32747970652e676f6f676c65617069732e636f6d2f70726f746f636f6c2e5472616e736665724173736574436f6e747261637412390a0731303035343136121541dd791d6b49e190062d650e6a23c575510d35f2f91a154192ad11c1bf16b3b14b0bd6b5c7e2db73a0b5e83a206470d78eadc0dd33"
}`;

const REQUEST_PARAMS: RequestParamProp = [
  {
  paramName: "owner_address",
  type: "string",
  paramDescription: "[Required] The address sending the TRC10 token.",
},
{
  paramName: "to_address",
  type: "string",
  paramDescription: "[Required] The address receiving the TRC10 token.",
},
{
  paramName: "asset_name",
  type: "string",
  paramDescription: "[Required] The identifier of the TRC10 token being transferred. Since the ALLOW_SAME_TOKEN_NAME proposal, this is the token's numeric id represented as a string (e.g. 1000001), UTF-8 encoded as a hex string.",
},
{
  paramName: "amount",
  type: "integer",
  paramDescription: "[Required] The quantity of the token to transfer, expressed in its smallest unit.",
},
{
  paramName: "extra_data",
  type: "string",
  paramDescription: "A memo attached to the transfer; hex-encoded, or plain UTF-8 text when visible=true.",
},
{
  paramName: "Permission_id",
  type: "integer",
  paramDescription: "The ID of the multi-sig permission group authorizing this operation, if the sender account uses multi-sig.",
},
{
  paramName: "visible",
  type: "boolean",
  paramDescription: "Whether addresses and text fields in the request/response are formatted as Base58/UTF-8 (true) or hex (false).",
}
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
              paramDescription: "The decoded fields of the contract — here, a TRC10 asset transfer.",
              childrenParams: [
                {
                  paramName: "amount",
                  type: "integer",
                  paramDescription: "[Required] The quantity of the token being transferred, expressed in its smallest unit.",
                },
                {
                  paramName: "asset_name",
                  type: "string",
                  paramDescription: "[Required] The identifier of the TRC10 token being transferred, UTF-8 encoded as a hex string.",
                },
                {
                  paramName: "owner_address",
                  type: "string",
                  paramDescription: "[Required] The address sending the TRC10 token, in hex format.",
                },
                {
                  paramName: "to_address",
                  type: "string",
                  paramDescription: "[Required] The address receiving the TRC10 token, in hex format.",
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
          paramDescription: "The human-readable name of the contract type being executed (here, TransferAssetContract).",
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
  "Send a TRC10 token payment from one address to another",
];

const CONSTRAINTS = [
  "The sending address must already hold a balance of the specified TRC10 token",
];
