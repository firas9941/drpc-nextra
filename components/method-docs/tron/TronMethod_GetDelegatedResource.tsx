import TronMethod from "../../TronMethod/TronMethod";
import { GenericMethodPropsReplacing } from "../../GenericMethod/GenericMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import { DRPC_ENDPOINT_URL_TRON_PAID } from "./constants";

export function TronMethod_getdelegatedresource(props: GenericMethodPropsReplacing) {
  return (
    <TronMethod
      method="getdelegatedresource"
      network="tron"
      cu={20}
      description={"Returns the resource delegation details between two specific accounts."}
      useCases={USE_CASES}
      constraints={CONSTRAINTS}
      codeSnippets={CODE_SNIPPETS}
      requestParams={REQUEST_PARAMS}
      requestParamsType="object"
      responseJSON={RESPONSE_JSON}
      responseParams={RESPONSE_PARAMS}
      responseParamsType="object"
      responseParamsDescription={
        "Returns the resource delegation details between two specific accounts."
      }
      {...props}
    />
  );
}

const CODE_SNIPPETS: Array<CodeSnippetObject> = [
  {
    language: "shell",
    code: () => `curl --request POST \\
     --url ${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/getdelegatedresource \\
     --header 'accept: application/json' \\
     --header 'content-type: application/json' \\
     --data '{"fromAddress": "TZ4UXDV5ZhNW7fb2AMSbgfAEZ7hWsnYS2g", "toAddress": "TZ4UXDV5ZhNW7fb2AMSbgfAEZ7hWsnYS2g", "visible": true}'`,
  },
  {
    language: "js",
    code: () => `const url = '${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/getdelegatedresource';

const data = {"fromAddress": "TZ4UXDV5ZhNW7fb2AMSbgfAEZ7hWsnYS2g", "toAddress": "TZ4UXDV5ZhNW7fb2AMSbgfAEZ7hWsnYS2g", "visible": true};

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

const url = '${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/getdelegatedresource';

const data = {"fromAddress": "TZ4UXDV5ZhNW7fb2AMSbgfAEZ7hWsnYS2g", "toAddress": "TZ4UXDV5ZhNW7fb2AMSbgfAEZ7hWsnYS2g", "visible": true};

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
    url := "${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/getdelegatedresource"

    data := map[string]interface{}{
       "fromAddress": "TZ4UXDV5ZhNW7fb2AMSbgfAEZ7hWsnYS2g",
       "toAddress": "TZ4UXDV5ZhNW7fb2AMSbgfAEZ7hWsnYS2g",
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

url = '${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/getdelegatedresource'

data = {
    "fromAddress": "TZ4UXDV5ZhNW7fb2AMSbgfAEZ7hWsnYS2g",
    "toAddress": "TZ4UXDV5ZhNW7fb2AMSbgfAEZ7hWsnYS2g",
    "visible": True
}

response = requests.post(url, headers={'Content-Type': 'application/json'}, data=json.dumps(data))
res = response.json()

print(res)
`,
  },
];

const RESPONSE_JSON = `{
  "delegatedResource": [
    { "from": "41608f8da72479edc7dd921e4c30bb7e7cddbe722e", "to": "414c8967080d86f3d0e1352a42f9213c7b9dd03b0f", "frozen_balance_for_bandwidth": 1000000 }
  ]
}`;

const REQUEST_PARAMS: RequestParamProp = [
  {
    paramName: "fromAddress",
    type: "string",
    paramDescription: "[Required for GET] The delegating account's address",
  },
  {
    paramName: "toAddress",
    type: "string",
    paramDescription: "[Required for GET] The receiving account's address",
  },
  {
    paramName: "visible",
    type: "boolean",
    paramDescription: "When true, addresses are base58check strings; when false (default), hex strings",
  },
];

const RESPONSE_PARAMS: ReqResParam[] = [
  {
    paramName: "delegatedResource",
    type: "array_of_objects",
    paramDescription: "List of active delegations between the two addresses (legacy model)",
  },
];

const USE_CASES = [
  "Also available as GET",
  "Check how much bandwidth/energy one account currently delegates to another",
];

const CONSTRAINTS = [
  "Covers the legacy (Stake 1.0) delegation model; use getdelegatedresourcev2 for Stake 2.0",
  "Also available under /walletsolidity/ for confirmed (solidified) data instead of the latest state",
];
