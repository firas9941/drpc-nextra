import TronMethod from "../../TronMethod/TronMethod";
import { GenericMethodPropsReplacing } from "../../GenericMethod/GenericMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import { DRPC_ENDPOINT_URL_TRON_PAID } from "./constants";

export function TronMethod_gettransactioncountbyblocknum(props: GenericMethodPropsReplacing) {
  return (
    <TronMethod
      method="gettransactioncountbyblocknum"
      network="tron"
      cu={20}
      description={"Returns the number of transactions included in a specific block."}
      useCases={USE_CASES}
      constraints={CONSTRAINTS}
      codeSnippets={CODE_SNIPPETS}
      requestParams={REQUEST_PARAMS}
      requestParamsType="object"
      responseJSON={RESPONSE_JSON}
      responseParams={RESPONSE_PARAMS}
      responseParamsType="object"
      responseParamsDescription={
        "Returns the number of transactions included in a specific block."
      }
      {...props}
    />
  );
}

const CODE_SNIPPETS: Array<CodeSnippetObject> = [
  {
    language: "shell",
    code: () => `curl --request POST \\
     --url ${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/gettransactioncountbyblocknum \\
     --header 'accept: application/json' \\
     --header 'content-type: application/json' \\
     --data '{"num": 1}'`,
  },
  {
    language: "js",
    code: () => `const url = '${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/gettransactioncountbyblocknum';

const data = {"num": 1};

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

const url = '${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/gettransactioncountbyblocknum';

const data = {"num": 1};

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
    url := "${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/gettransactioncountbyblocknum"

    data := map[string]interface{}{
       "num": 1,
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

url = '${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/gettransactioncountbyblocknum'

data = {
    "num": 1
}

response = requests.post(url, headers={'Content-Type': 'application/json'}, data=json.dumps(data))
res = response.json()

print(res)
`,
  },
];

const RESPONSE_JSON = `{
  "count": 42
}`;

const REQUEST_PARAMS: RequestParamProp = [
  {
    paramName: "num",
    type: "integer",
    paramDescription: "[Required for GET] The block number to query",
  },
    {
    paramName: "int64_as_string",
    type: "boolean",
    paramDescription: "GET only; when true, returns count as a JSON string",
  },
];

const RESPONSE_PARAMS: ReqResParam[] = [
  {
    paramName: "count",
    type: "integer",
    paramDescription: "Number of transactions included in the specified block",
  },
];

const USE_CASES = [
  "Quickly check block activity level without downloading the full block",
];

const CONSTRAINTS = [
  "Returns 0 if the block number doesn't exist yet or has no transactions",
  "Also available under /walletsolidity/ for confirmed (solidified) data instead of the latest state",
];
