import TronMethod from "../../TronMethod/TronMethod";
import { GenericMethodPropsReplacing } from "../../GenericMethod/GenericMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import { DRPC_ENDPOINT_URL_TRON_PAID } from "./constants";

export function TronMethod_triggerconstantcontract(props: GenericMethodPropsReplacing) {
  return (
    <TronMethod
      method="triggerconstantcontract"
      network="tron"
      cu={20}
      description={"Executes a read-only smart contract call without broadcasting a transaction or consuming energy."}
      useCases={USE_CASES}
      constraints={CONSTRAINTS}
      codeSnippets={CODE_SNIPPETS}
      requestParams={REQUEST_PARAMS}
      requestParamsType="object"
      responseJSON={RESPONSE_JSON}
      responseParams={RESPONSE_PARAMS}
      responseParamsType="object"
      responseParamsDescription={
        "Executes a read-only smart contract call without broadcasting a transaction or consuming energy."
      }
      {...props}
    />
  );
}

const CODE_SNIPPETS: Array<CodeSnippetObject> = [
  {
    language: "shell",
    code: () => `curl --request POST \\
     --url ${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/triggerconstantcontract \\
     --header 'accept: application/json' \\
     --header 'content-type: application/json' \\
     --data '{"owner_address": "TZ4UXDV5ZhNW7fb2AMSbgfAEZ7hWsnYS2g", "contract_address": "TZ4UXDV5ZhNW7fb2AMSbgfAEZ7hWsnYS2g", "function_selector": "example", "parameter": "example", "visible": true}'`,
  },
  {
    language: "js",
    code: () => `const url = '${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/triggerconstantcontract';

const data = {"owner_address": "TZ4UXDV5ZhNW7fb2AMSbgfAEZ7hWsnYS2g", "contract_address": "TZ4UXDV5ZhNW7fb2AMSbgfAEZ7hWsnYS2g", "function_selector": "example", "parameter": "example", "visible": true};

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

const url = '${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/triggerconstantcontract';

const data = {"owner_address": "TZ4UXDV5ZhNW7fb2AMSbgfAEZ7hWsnYS2g", "contract_address": "TZ4UXDV5ZhNW7fb2AMSbgfAEZ7hWsnYS2g", "function_selector": "example", "parameter": "example", "visible": true};

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
    url := "${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/triggerconstantcontract"

    data := map[string]interface{}{
       "owner_address": "TZ4UXDV5ZhNW7fb2AMSbgfAEZ7hWsnYS2g",
       "contract_address": "TZ4UXDV5ZhNW7fb2AMSbgfAEZ7hWsnYS2g",
       "function_selector": "example",
       "parameter": "example",
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

url = '${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/triggerconstantcontract'

data = {
    "owner_address": "TZ4UXDV5ZhNW7fb2AMSbgfAEZ7hWsnYS2g",
    "contract_address": "TZ4UXDV5ZhNW7fb2AMSbgfAEZ7hWsnYS2g",
    "function_selector": "example",
    "parameter": "example",
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
  "energy_used": 935,
  "constant_result": ["0000000000000000000000000000000000000000000000000000000040cfcc00"],
  "transaction": {
    "ret": [{}],
    "visible": false,
    "txID": "cff6488e738ce77f7325572fe0aa2470f87dbf1c95eeeb2c25feec59d5afa35c",
    "raw_data": {
      "contract": [
        {
          "parameter": {
            "value": {
              "data":             "70a08231000000000000000000000000dd791d6b49e190062d650e6a23c575510d35f2f9",
              "owner_address":    "41dd791d6b49e190062d650e6a23c575510d35f2f9",
              "contract_address": "41eca9bc828a3005b9a3b909f2cc5c2a54794de05f"
            },
            "type_url": "type.googleapis.com/protocol.TriggerSmartContract"
          },
          "type": "TriggerSmartContract"
        }
      ],
      "ref_block_bytes": "28c0",
      "ref_block_hash":  "9eabbe133123b34c",
      "expiration":      1777447218000,
      "timestamp":       1777447160779
    },
    "raw_data_hex": "0a0228c022089eabbe133123b34c40d0d6f0c0dd335a8e01081f1289010a31747970652e676f6f676c65617069732e636f6d2f70726f746f636f6c2e54726967676572536d617274436f6e747261637412540a1541dd791d6b49e190062d650e6a23c575510d35f2f9121541eca9bc828a3005b9a3b909f2cc5c2a54794de05f222470a08231000000000000000000000000dd791d6b49e190062d650e6a23c575510d35f2f970cb97edc0dd33"
  }
}`;

const REQUEST_PARAMS: RequestParamProp = [
  {
  paramName: "owner_address",
  type: "string",
  paramDescription: "The address initiating the contract call, in Base58 or Hex format. Required.",
},
{
  paramName: "contract_address",
  type: "string",
  paramDescription: "The address of the smart contract being called, in Base58 or Hex format.",
},
{
  paramName: "function_selector",
  type: "string",
  paramDescription: "The function signature to invoke on the contract (e.g. transfer(address,uint256)).",
},
{
  paramName: "parameter",
  type: "string",
  paramDescription: "The hex-encoded, ABI-encoded arguments to pass to the function specified in function_selector.",
},
{
  paramName: "data",
  type: "string",
  paramDescription: "The complete ABI-encoded call payload (function selector plus arguments combined); used as an alternative to supplying function_selector and parameter separately. If both are provided, function_selector and parameter take precedence.",
},
{
  paramName: "call_value",
  type: "integer",
  paramDescription: "The amount of TRX to send along with this call into the contract, in sun.",
},
{
  paramName: "call_token_value",
  type: "integer",
  paramDescription: "The amount of a TRC10 token to send along with this call into the contract.",
},
{
  paramName: "token_id",
  type: "integer",
  paramDescription: "The identifier of the TRC10 token being sent via call_token_value.",
},
    {
  paramName: "Permission_id",
  type: "integer",
  paramDescription: "Multi-sig permission ID",
},
{
  paramName: "visible",
  type: "boolean",
  paramDescription: "Whether addresses in the request/response are formatted as Base58 (true) or hex (false). Defaults to true.",
},
    {
  paramName: "extra_data",
  type: "string",
  paramDescription: "Transaction memo (hex; UTF-8 text when visible=true)",
},
];

const RESPONSE_PARAMS: ReqResParam[] = [
  {
  paramName: "result",
  type: "object",
  childrenParamsType: "object",
  paramDescription: "The outcome of executing this read-only (constant) contract call.",
  childrenParams: [
    {
      paramName: "result",
      type: "boolean",
      paramDescription: "Whether the call executed successfully without reverting.",
    },
  ],
},
{
  paramName: "energy_used",
  type: "integer",
  paramDescription: "The amount of Energy the call would consume if actually broadcast on-chain.",
},
{
  paramName: "constant_result",
  type: "array_of_strings",
  paramDescription: "The hex-encoded return value(s) of the contract's function call.",
},
{
  paramName: "transaction",
  type: "object",
  childrenParamsType: "object",
  paramDescription: "The unsigned transaction object built from the call parameters, used only to simulate execution (never actually broadcast).",
  childrenParams: [
    {
      paramName: "ret",
      type: "array_of_objects",
      paramDescription: "Placeholder for the transaction's execution outcome; empty since this is a simulated, unbroadcast call.",
    },
    {
      paramName: "visible",
      type: "boolean",
      paramDescription: "Indicates whether addresses in this transaction are represented in base58 format (true) or hex format (false).",
    },
    {
      paramName: "txID",
      type: "string",
      paramDescription: "The transaction hash computed for this simulated call, as if it were signed and broadcast.",
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
          paramDescription: "The list of contract instructions represented by this simulated transaction.",
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
                  paramDescription: "The decoded fields of the contract — here, a read-only smart contract invocation.",
                  childrenParams: [
                    {
                      paramName: "data",
                      type: "string",
                      paramDescription: "The hex-encoded ABI-encoded call data, including the function selector and its arguments.",
                    },
                    {
                      paramName: "owner_address",
                      type: "string",
                      paramDescription: "The address on whose behalf the call is simulated, in hex format.",
                    },
                    {
                      paramName: "contract_address",
                      type: "string",
                      paramDescription: "The address of the smart contract being called, in hex format.",
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
          paramName: "expiration",
          type: "integer",
          paramDescription: "Unix timestamp, in ms, after which this simulated transaction would no longer be valid.",
        },
        {
          paramName: "timestamp",
          type: "integer",
          paramDescription: "Unix timestamp, in ms, marking when this simulated transaction was constructed.",
        },
      ],
    },
    {
      paramName: "raw_data_hex",
      type: "string",
      paramDescription: "The hex-encoded serialized bytes of raw_data for this simulated transaction.",
    },
  ],
}
];

const USE_CASES = [
  "Read a TRC20 token's balanceOf, symbol, or decimals without spending energy",
  "Estimate energy_used ahead of a real triggersmartcontract call to size fee_limit",
];

const CONSTRAINTS = [
  "Never modifies chain state and never needs to be broadcast",
  "Maximum execution time per call is 80ms; long-running calls throw OUT_OF_TIME",
  "Also available under /walletsolidity/ for confirmed (solidified) data instead of the latest state",
];
