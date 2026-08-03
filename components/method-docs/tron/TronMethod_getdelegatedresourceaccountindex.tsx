import TronMethod from "../../TronMethod/TronMethod";
import { GenericMethodPropsReplacing } from "../../GenericMethod/GenericMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import { DRPC_ENDPOINT_URL_TRON_PAID } from "./constants";

export function TronMethod_getdelegatedresourceaccountindex(props: GenericMethodPropsReplacing) {
  return (
    <TronMethod
      method="getdelegatedresourceaccountindex"
      network="tron"
      cu={20}
      description={"Returns the list of accounts an address has delegated resources to or from (legacy index)."}
      useCases={USE_CASES}
      constraints={CONSTRAINTS}
      codeSnippets={CODE_SNIPPETS}
      requestParams={REQUEST_PARAMS}
      requestParamsType="object"
      responseJSON={RESPONSE_JSON}
      responseParams={RESPONSE_PARAMS}
      responseParamsType="object"
      responseParamsDescription={
        "Returns the list of accounts an address has delegated resources to or from (legacy index)."
      }
      {...props}
    />
  );
}

const CODE_SNIPPETS: Array<CodeSnippetObject> = [
  {
    language: "shell",
    code: () => `curl --request POST \\
     --url ${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/getdelegatedresourceaccountindex \\
     --header 'accept: application/json' \\
     --header 'content-type: application/json' \\
     --data '{"value": "example", "visible": true}'`,
  },
  {
    language: "js",
    code: () => `const url = '${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/getdelegatedresourceaccountindex';

const data = {"value": "example", "visible": true};

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

const url = '${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/getdelegatedresourceaccountindex';

const data = {"value": "example", "visible": true};

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
    url := "${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/getdelegatedresourceaccountindex"

    data := map[string]interface{}{
       "value": "example",
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

url = '${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/getdelegatedresourceaccountindex'

data = {
    "value": "example",
    "visible": True
}

response = requests.post(url, headers={'Content-Type': 'application/json'}, data=json.dumps(data))
res = response.json()

print(res)
`,
  },
];

const RESPONSE_JSON = `{
  "account": "41608f8da72479edc7dd921e4c30bb7e7cddbe722e",
  "toAccounts": ["414c8967080d86f3d0e1352a42f9213c7b9dd03b0f"],
  "fromAccounts": []
}`;

const REQUEST_PARAMS: RequestParamProp = [
  {
    paramName: "value",
    type: "string",
    paramDescription: "[Required for GET] The account address to look up",
  },
  {
    paramName: "visible",
    type: "boolean",
    paramDescription: "When true, addresses are base58check strings; when false (default), hex strings",
  },
];

const RESPONSE_PARAMS: ReqResParam[] = [
  {
    paramName: "account",
    type: "string",
    paramDescription: "The queried account's address",
  },
  {
    paramName: "toAccounts",
    type: "array_of_strings",
    paramDescription: "Accounts this address has delegated resources to",
  },
  {
    paramName: "fromAccounts",
    type: "array_of_strings",
    paramDescription: "Accounts that have delegated resources to this address",
  },
];

const USE_CASES = [
  "Also available as GET",
  "Discover all counterparties an account has resource-delegation relationships with",
];

const CONSTRAINTS = [
  "Covers the legacy (Stake 1.0) delegation model; use the v2 variant for Stake 2.0",
  "Also available under /walletsolidity/ for confirmed (solidified) data instead of the latest state",
];
