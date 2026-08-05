import TronMethod from "../../TronMethod/TronMethod";
import { GenericMethodPropsReplacing } from "../../GenericMethod/GenericMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import { DRPC_ENDPOINT_URL_TRON_PAID } from "./constants";

export function TronMethod_estimateenergy(props: GenericMethodPropsReplacing) {
  return (
    <TronMethod
      method="estimateenergy"
      network="tron"
      cu={20}
      description={"Estimates the energy required to execute a smart contract call before sending it."}
      useCases={USE_CASES}
      constraints={CONSTRAINTS}
      codeSnippets={CODE_SNIPPETS}
      requestParams={REQUEST_PARAMS}
      requestParamsType="object"
      responseJSON={RESPONSE_JSON}
      responseParams={RESPONSE_PARAMS}
      responseParamsType="object"
      responseParamsDescription={
        "Estimates the energy required to execute a smart contract call before sending it."
      }
      {...props}
    />
  );
}

const CODE_SNIPPETS: Array<CodeSnippetObject> = [
  {
    language: "shell",
    code: () => `curl --request POST \\
     --url ${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/estimateenergy \\
     --header 'accept: application/json' \\
     --header 'content-type: application/json' \\
     --data '{"owner_address": "TZ4UXDV5ZhNW7fb2AMSbgfAEZ7hWsnYS2g", "contract_address": "TZ4UXDV5ZhNW7fb2AMSbgfAEZ7hWsnYS2g", "function_selector": "example", "parameter": "example", "call_value": 1, "visible": true}'`,
  },
  {
    language: "js",
    code: () => `const url = '${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/estimateenergy';

const data = {"owner_address": "TZ4UXDV5ZhNW7fb2AMSbgfAEZ7hWsnYS2g", "contract_address": "TZ4UXDV5ZhNW7fb2AMSbgfAEZ7hWsnYS2g", "function_selector": "example", "parameter": "example", "call_value": 1, "visible": true};

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

const url = '${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/estimateenergy';

const data = {"owner_address": "TZ4UXDV5ZhNW7fb2AMSbgfAEZ7hWsnYS2g", "contract_address": "TZ4UXDV5ZhNW7fb2AMSbgfAEZ7hWsnYS2g", "function_selector": "example", "parameter": "example", "call_value": 1, "visible": true};

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
    url := "${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/estimateenergy"

    data := map[string]interface{}{
       "owner_address": "TZ4UXDV5ZhNW7fb2AMSbgfAEZ7hWsnYS2g",
       "contract_address": "TZ4UXDV5ZhNW7fb2AMSbgfAEZ7hWsnYS2g",
       "function_selector": "example",
       "parameter": "example",
       "call_value": 1,
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

url = '${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/estimateenergy'

data = {
    "owner_address": "TZ4UXDV5ZhNW7fb2AMSbgfAEZ7hWsnYS2g",
    "contract_address": "TZ4UXDV5ZhNW7fb2AMSbgfAEZ7hWsnYS2g",
    "function_selector": "example",
    "parameter": "example",
    "call_value": 1,
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
  "energy_required": 13859
}`;

const REQUEST_PARAMS: RequestParamProp = [
  {
    paramName: "owner_address",
    type: "string",
    paramDescription: "The address that would initiate the call",
  },
  {
    paramName: "contract_address",
    type: "string",
    paramDescription: "[Required] The deployed smart contract's address",
  },
  {
    paramName: "function_selector",
    type: "string",
    paramDescription: "The function signature to call",
  },
  {
    paramName: "parameter",
    type: "string",
    paramDescription: "ABI-encoded, hex-formatted arguments for function_selector",
  },
  {
  paramName: "data",
  type: "string",
  paramDescription: "The complete ABI-encoded call payload (function selector plus arguments combined); used as an alternative to supplying function_selector and parameter separately. If both are provided, function_selector and parameter take precedence.",
},
 {
  paramName: "token_id",
  type: "integer",
  paramDescription: "The identifier of the TRC10 token being sent via call_token_value.",
},
{
  paramName: "call_token_value",
  type: "integer",
  paramDescription: "The amount of a TRC10 token to send along with this call into the contract.",
},
  {
    paramName: "call_value",
    type: "integer",
    paramDescription: "Amount of TRX, in sun, that would be sent with the call",
  },
  {
    paramName: "visible",
    type: "boolean",
    paramDescription: "When true, addresses are base58check strings; when false (default), hex strings",
  },
];

const RESPONSE_PARAMS: ReqResParam[] = [
  {
    paramName: "result.result",
    type: "boolean",
    paramDescription: "Whether the estimate succeeded",
  },
  {
    paramName: "energy_required",
    type: "integer",
    paramDescription: "Estimated energy the real call would consume",
  },
];

const USE_CASES = [
  "Size a triggersmartcontract call's fee_limit accurately before sending it",
  "Warn a user up front if a call would likely run out of energy",
];

const CONSTRAINTS = [
  "The estimate reflects current contract state and may shift slightly by the time the real call executes",
  "Also available under /walletsolidity/ for confirmed (solidified) data instead of the latest state",
];
