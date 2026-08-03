import TronMethod from "../../TronMethod/TronMethod";
import { GenericMethodPropsReplacing } from "../../GenericMethod/GenericMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import { DRPC_ENDPOINT_URL_TRON_PAID } from "./constants";

export function TronMethod_createassetissue(props: GenericMethodPropsReplacing) {
  return (
    <TronMethod
      method="createassetissue"
      network="tron"
      cu={20}
      description={"Issues a new TRC10 token on the Tron network."}
      useCases={USE_CASES}
      constraints={CONSTRAINTS}
      codeSnippets={CODE_SNIPPETS}
      requestParams={REQUEST_PARAMS}
      requestParamsType="object"
      responseJSON={RESPONSE_JSON}
      responseParams={RESPONSE_PARAMS}
      responseParamsType="object"
      responseParamsDescription={
        "Issues a new TRC10 token on the Tron network."
      }
      {...props}
    />
  );
}

const CODE_SNIPPETS: Array<CodeSnippetObject> = [
  {
    language: "shell",
    code: () => `curl --request POST \\
     --url ${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/createassetissue \\
     --header 'accept: application/json' \\
     --header 'content-type: application/json' \\
     --data '{"owner_address": "TZ4UXDV5ZhNW7fb2AMSbgfAEZ7hWsnYS2g", "name": "example", "abbr": "example", "total_supply": 1, "trx_num": 1, "num": 1, "start_time": 1, "end_time": 1, "description": "example", "url": "example", "free_asset_net_limit": 1, "public_free_asset_net_limit": 1, "visible": true}'`,
  },
  {
    language: "js",
    code: () => `const url = '${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/createassetissue';

const data = {"owner_address": "TZ4UXDV5ZhNW7fb2AMSbgfAEZ7hWsnYS2g", "name": "example", "abbr": "example", "total_supply": 1, "trx_num": 1, "num": 1, "start_time": 1, "end_time": 1, "description": "example", "url": "example", "free_asset_net_limit": 1, "public_free_asset_net_limit": 1, "visible": true};

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

const url = '${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/createassetissue';

const data = {"owner_address": "TZ4UXDV5ZhNW7fb2AMSbgfAEZ7hWsnYS2g", "name": "example", "abbr": "example", "total_supply": 1, "trx_num": 1, "num": 1, "start_time": 1, "end_time": 1, "description": "example", "url": "example", "free_asset_net_limit": 1, "public_free_asset_net_limit": 1, "visible": true};

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
    url := "${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/createassetissue"

    data := map[string]interface{}{
       "owner_address": "TZ4UXDV5ZhNW7fb2AMSbgfAEZ7hWsnYS2g",
       "name": "example",
       "abbr": "example",
       "total_supply": 1,
       "trx_num": 1,
       "num": 1,
       "start_time": 1,
       "end_time": 1,
       "description": "example",
       "url": "example",
       "free_asset_net_limit": 1,
       "public_free_asset_net_limit": 1,
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

url = '${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/createassetissue'

data = {
    "owner_address": "TZ4UXDV5ZhNW7fb2AMSbgfAEZ7hWsnYS2g",
    "name": "example",
    "abbr": "example",
    "total_supply": 1,
    "trx_num": 1,
    "num": 1,
    "start_time": 1,
    "end_time": 1,
    "description": "example",
    "url": "example",
    "free_asset_net_limit": 1,
    "public_free_asset_net_limit": 1,
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
  "txID": "a9c125300a5e5c6fa9490ab599b3f37db756aa1e421d883167955c91e4cfe409",
  "raw_data": {
    "contract": [
      {
        "parameter": {
          "value": {
            "owner_address": "41dd791d6b49e190062d650e6a23c575510d35f2f9",
            "name": "44494345",
            "abbr": "44494345",
            "total_supply": 1000000000,
            "trx_num": 1,
            "num": 1,
            "start_time": 1900000000000,
            "end_time": 2000000000000,
            "description": "44494345",
            "url": "68747470733a2f2f747261782e696f"
          },
          "type_url": "type.googleapis.com/protocol.AssetIssueContract"
        },
        "type": "AssetIssueContract"
      }
    ],
    "ref_block_bytes": "275a",
    "ref_block_hash": "8aeea897e90cdc79",
    "expiration": 1777446138000,
    "timestamp": 1777446080622
  },
  "raw_data_hex": "0a02275a22088aeea897e90cdc794090e1aec0dd335a8c0108061287010a2f747970652e676f6f676c65617069732e636f6d2f70726f746f636f6c2e41737365744973737565436f6e747261637412540a1541dd791d6b49e190062d650e6a23c575510d35f2f91204444943451a0444494345208094ebdc03300140014880f0cc86a6375080c0a8ca9a3aa2010444494345aa010f68747470733a2f2f747261782e696f70eea0abc0dd33"
}`;

const REQUEST_PARAMS: RequestParamProp = [
  {
  paramName: "owner_address",
  type: "string",
  paramDescription: "[Required] The address of the account issuing this TRC10 token.",
},
{
  paramName: "name",
  type: "string",
  paramDescription: "[Required] The token's display name, UTF-8 encoded as a hex string.",
},
{
  paramName: "abbr",
  type: "string",
  paramDescription: "The token's ticker/abbreviation, UTF-8 encoded as a hex string.",
},
{
  paramName: "total_supply",
  type: "integer",
  paramDescription: "[Required] The total number of units of this token that will ever be issued.",
},
{
  paramName: "frozen_supply",
  type: "array_of_objects",
  childrenParamsType: "object",
  paramDescription: "The portion(s) of the total supply locked up by the issuer for a fixed duration before becoming transferable.",
  childrenParams: [
    {
      paramName: "frozen_amount",
      type: "integer",
      paramDescription: "The number of token units locked in this frozen portion.",
    },
    {
      paramName: "frozen_days",
      type: "integer",
      paramDescription: "The number of days this portion remains locked before it can be released.",
    },
  ],
},
{
  paramName: "trx_num",
  type: "integer",
  paramDescription: "[Required] The denominator of the TRX-to-token exchange ratio: this many TRX buys `num` tokens during fundraising.",
},
{
  paramName: "num",
  type: "integer",
  paramDescription: "[Required] The numerator of the TRX-to-token exchange ratio: `trx_num` TRX buys this many tokens during fundraising.",
},
{
  paramName: "precision",
  type: "integer",
  paramDescription: "The number of decimal places used to display this token's amounts.",
},
{
  paramName: "start_time",
  type: "integer",
  paramDescription: "[Required] Unix timestamp, in ms, at which the token's fundraising period begins.",
},
{
  paramName: "end_time",
  type: "integer",
  paramDescription: "[Required] Unix timestamp, in ms, at which the token's fundraising period ends.",
},
{
  paramName: "description",
  type: "string",
  paramDescription: "A free-text description of the token or project, UTF-8 encoded as a hex string.",
},
{
  paramName: "url",
  type: "string",
  paramDescription: "[Required] The project's website URL, UTF-8 encoded as a hex string, limited to 256 bytes.",
},
{
  paramName: "free_asset_net_limit",
  type: "integer",
  paramDescription: "The free bandwidth quota granted per account for transactions involving this token.",
},
{
  paramName: "public_free_asset_net_limit",
  type: "integer",
  paramDescription: "The shared free bandwidth quota available to all accounts collectively for transactions involving this token.",
},
{
  paramName: "Permission_id",
  type: "integer",
  paramDescription: "The ID of the multi-sig permission group authorizing this operation, if the issuer account uses multi-sig.",
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
              paramDescription: "The decoded fields of the contract — here, a request to issue a new TRC10 token.",
              childrenParams: [
                {
                  paramName: "owner_address",
                  type: "string",
                  paramDescription: "The address of the account issuing this token, in hex format.",
                },
                {
                  paramName: "name",
                  type: "string",
                  paramDescription: "The token's display name, UTF-8 encoded as a hex string.",
                },
                {
                  paramName: "abbr",
                  type: "string",
                  paramDescription: "The token's ticker/abbreviation, UTF-8 encoded as a hex string.",
                },
                {
                  paramName: "total_supply",
                  type: "integer",
                  paramDescription: "The total number of units of this token that will be issued.",
                },
                {
                  paramName: "trx_num",
                  type: "integer",
                  paramDescription: "The denominator of the TRX-to-token exchange ratio: this many TRX buys `num` tokens during fundraising.",
                },
                {
                  paramName: "num",
                  type: "integer",
                  paramDescription: "The numerator of the TRX-to-token exchange ratio: `trx_num` TRX buys this many tokens during fundraising.",
                },
                {
                  paramName: "start_time",
                  type: "integer",
                  paramDescription: "Unix timestamp, in ms, at which the token's fundraising period begins.",
                },
                {
                  paramName: "end_time",
                  type: "integer",
                  paramDescription: "Unix timestamp, in ms, at which the token's fundraising period ends.",
                },
                {
                  paramName: "description",
                  type: "string",
                  paramDescription: "A free-text description of the token, UTF-8 encoded as a hex string.",
                },
                {
                  paramName: "url",
                  type: "string",
                  paramDescription: "The project's website URL, UTF-8 encoded as a hex string.",
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
          paramDescription: "The human-readable name of the contract type being executed (here, AssetIssueContract).",
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
  "Launch a new TRC10 token with a fixed total supply",
  "Run a TRX-priced token sale with a defined start/end window",
];

const CONSTRAINTS = [
  "Each account can only issue one TRC10 token at a time",
  "The returned transaction is unsigned and must be broadcast separately",
];
