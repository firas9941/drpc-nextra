import TronMethod from "../../TronMethod/TronMethod";
import { GenericMethodPropsReplacing } from "../../GenericMethod/GenericMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import { DRPC_ENDPOINT_URL_TRON_PAID } from "./constants";

export function TronMethod_triggersmartcontract(props: GenericMethodPropsReplacing) {
  return (
    <TronMethod
      method="triggersmartcontract"
      network="tron"
      cu={20}
      description={"Creates an unsigned transaction that calls a function on a deployed smart contract."}
      useCases={USE_CASES}
      constraints={CONSTRAINTS}
      codeSnippets={CODE_SNIPPETS}
      requestParams={REQUEST_PARAMS}
      requestParamsType="object"
      responseJSON={RESPONSE_JSON}
      responseParams={RESPONSE_PARAMS}
      responseParamsType="object"
      responseParamsDescription={
        "Creates an unsigned transaction that calls a function on a deployed smart contract."
      }
      {...props}
    />
  );
}

const CODE_SNIPPETS: Array<CodeSnippetObject> = [
  {
    language: "shell",
    code: () => `curl --request POST \\
     --url ${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/triggersmartcontract \\
     --header 'accept: application/json' \\
     --header 'content-type: application/json' \\
     --data '{"owner_address": "TZ4UXDV5ZhNW7fb2AMSbgfAEZ7hWsnYS2g", "contract_address": "TZ4UXDV5ZhNW7fb2AMSbgfAEZ7hWsnYS2g", "function_selector": "example", "parameter": "example", "data": "example", "fee_limit": 1, "call_value": 1, "call_token_value": 1, "token_id": 1, "visible": true}'`,
  },
  {
    language: "js",
    code: () => `const url = '${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/triggersmartcontract';

const data = {"owner_address": "TZ4UXDV5ZhNW7fb2AMSbgfAEZ7hWsnYS2g", "contract_address": "TZ4UXDV5ZhNW7fb2AMSbgfAEZ7hWsnYS2g", "function_selector": "example", "parameter": "example", "data": "example", "fee_limit": 1, "call_value": 1, "call_token_value": 1, "token_id": 1, "visible": true};

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

const url = '${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/triggersmartcontract';

const data = {"owner_address": "TZ4UXDV5ZhNW7fb2AMSbgfAEZ7hWsnYS2g", "contract_address": "TZ4UXDV5ZhNW7fb2AMSbgfAEZ7hWsnYS2g", "function_selector": "example", "parameter": "example", "data": "example", "fee_limit": 1, "call_value": 1, "call_token_value": 1, "token_id": 1, "visible": true};

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
    url := "${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/triggersmartcontract"

    data := map[string]interface{}{
       "owner_address": "TZ4UXDV5ZhNW7fb2AMSbgfAEZ7hWsnYS2g",
       "contract_address": "TZ4UXDV5ZhNW7fb2AMSbgfAEZ7hWsnYS2g",
       "function_selector": "example",
       "parameter": "example",
       "data": "example",
       "fee_limit": 1,
       "call_value": 1,
       "call_token_value": 1,
       "token_id": 1,
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

url = '${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/triggersmartcontract'

data = {
    "owner_address": "TZ4UXDV5ZhNW7fb2AMSbgfAEZ7hWsnYS2g",
    "contract_address": "TZ4UXDV5ZhNW7fb2AMSbgfAEZ7hWsnYS2g",
    "function_selector": "example",
    "parameter": "example",
    "data": "example",
    "fee_limit": 1,
    "call_value": 1,
    "call_token_value": 1,
    "token_id": 1,
    "visible": True
}

response = requests.post(url, headers={'Content-Type': 'application/json'}, data=json.dumps(data))
res = response.json()

print(res)
`,
  },
];

const RESPONSE_JSON = `{
  "result": { "result": true },
  "energy_used": 13859,
  "constant_result": ["0000000000000000000000000000000000000000000000000000000000000001"],
  "transaction": {
    "visible": true,
    "txID": "fbc18aa61f0ef6feed8683d44fe9b854bcc0000000000000000000000000000",
    "raw_data": {
      "contract": [{
        "parameter": {
          "value": {
            "data": "a9059cbb00000000000000000000000041a614f89f8a93d7f8824f607c7b2a3c3e0d5e190000000000000000000000000000000000000000000000000000000000000064",
            "owner_address": "TZ4UXDV5ZhNW7fb2AMSbgfAEZ7hWsnYS2g",
            "contract_address": "TG3XXyExBkPp9nzdajDZsozEu4BkaSJozs"
          },
          "type_url": "type.googleapis.com/protocol.TriggerSmartContract"
        },
        "type": "TriggerSmartContract"
      }],
      "ref_block_bytes": "5e4b",
      "ref_block_hash": "47c9dc89341b300d",
      "expiration": 1591089627000,
      "fee_limit": 100000000,
      "timestamp": 1591089567635
    },
    "raw_data_hex": "0a025e4b220847c9dc89341b300d..."
  }
}`;

const REQUEST_PARAMS: RequestParamProp = [
  {
    paramName: "owner_address",
    type: "string",
    paramDescription: "[Required] The deploying account's address",
  },
  {
    paramName: "contract_address",
    type: "string",
    paramDescription: "[Required]Contract address. (Format: Base58 or Hex)",
  },
  {
    paramName: "function_selector",
    type: "string",
    paramDescription: "Function selector. Example: transfer(address,uint256)",
  },
  {
    paramName: "data",
    type: "string",
    paramDescription: "This field transmits the necessary data for smart contract interaction, including the function being called and its parameters. You may choose to use the data field, which contains the complete ABI-encoded information, or use the function_selector and parameter fields separately. Note that if both data and function_selector are present, the system will prioritize using the function_selector and parameter fields for the contract interaction.",
  },
  {
    paramName: "parameter",
    type: "string",
    paramDescription: "Constructor parameters (hex, appended to bytecode)",
  },
  {
    paramName: "fee_limit",
    type: "integer",
    paramDescription: "[Required] Maximum TRX, in sun, the caller will burn for energy on this deployment",
  },
  {
    paramName: "call_value",
    type: "integer",
    paramDescription: "Amount of TRX, in sun, sent to the contract's constructor",
  },
  {
    paramName: "token_id",
    type: "int64",
    paramDescription: "TRC-10 token id sent with the deployment",
  },
  {
    paramName: "call_token_value",
    type: "int64",
    paramDescription: "TRC-10 amount sent with the deployment",
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
  paramName: "result",
  type: "object",
  childrenParamsType: "object",
  paramDescription: "The outcome of constructing (and, for read-only calls, executing) this transaction.",
  childrenParams: [
    {
      paramName: "result",
      type: "boolean",
      paramDescription: "Whether the transaction was successfully built without errors.",
    },
  ],
},
{
  paramName: "transaction",
  type: "object",
  childrenParamsType: "object",
  paramDescription: "The unsigned transaction object built from the call parameters, ready to be signed and broadcast.",
  childrenParams: [
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
                  paramDescription: "The decoded fields of the contract — here, a smart contract call (e.g. a TRC20 token transfer).",
                  childrenParams: [
                    {
                      paramName: "data",
                      type: "string",
                      paramDescription: "The hex-encoded ABI-encoded call data, including the function selector and its arguments.",
                    },
                    {
                      paramName: "owner_address",
                      type: "string",
                      paramDescription: "The address initiating the smart contract call, in hex format.",
                    },
                    {
                      paramName: "contract_address",
                      type: "string",
                      paramDescription: "The address of the smart contract being invoked, in hex format.",
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
              paramDescription: "The human-readable name of the contract type being executed (here, TriggerSmartContract).",
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
          paramName: "fee_limit",
          type: "integer",
          paramDescription: "The maximum amount of TRX, in sun, the caller is willing to spend on Energy fees for this contract call.",
        },
        {
          paramName: "expiration",
          type: "integer",
          paramDescription: "Unix timestamp, in ms, after which this transaction is no longer valid and will be rejected by the network.",
        },
        {
          paramName: "timestamp",
          type: "integer",
          paramDescription: "Unix timestamp, in ms, marking when the transaction was constructed.",
        },
      ],
    },
    {
      paramName: "raw_data_hex",
      type: "string",
      paramDescription: "The hex-encoded serialized bytes of raw_data, used as the actual payload to sign and broadcast.",
    },
  ],
}
];

const USE_CASES = [
  "Build a TRC20 token transfer transaction before signing and broadcasting",
  "Call a state-changing DeFi contract method (swap, stake, claim)",
];

const CONSTRAINTS = [
  "fee_limit is required and capped at the protocol maximum (1,500,000 TRX)",
  "The returned transaction is unsigned and must be broadcast separately",
];
