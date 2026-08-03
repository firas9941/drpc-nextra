import TronMethod from "../../TronMethod/TronMethod";
import { GenericMethodPropsReplacing } from "../../GenericMethod/GenericMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import { DRPC_ENDPOINT_URL_TRON_PAID } from "./constants";

export function TronMethod_getassetissuelistbyname(props: GenericMethodPropsReplacing) {
  return (
    <TronMethod
      method="getassetissuelistbyname"
      network="tron"
      cu={20}
      description={"Returns all TRC10 tokens that share a given token name."}
      useCases={USE_CASES}
      constraints={CONSTRAINTS}
      codeSnippets={CODE_SNIPPETS}
      requestParams={REQUEST_PARAMS}
      requestParamsType="object"
      responseJSON={RESPONSE_JSON}
      responseParams={RESPONSE_PARAMS}
      responseParamsType="object"
      responseParamsDescription={
        "Returns all TRC10 tokens that share a given token name."
      }
      {...props}
    />
  );
}

const CODE_SNIPPETS: Array<CodeSnippetObject> = [
  {
    language: "shell",
    code: () => `curl --request POST \\
     --url ${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/getassetissuelistbyname \\
     --header 'accept: application/json' \\
     --header 'content-type: application/json' \\
     --data '{"value": "example"}'`,
  },
  {
    language: "js",
    code: () => `const url = '${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/getassetissuelistbyname';

const data = {"value": "example"};

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

const url = '${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/getassetissuelistbyname';

const data = {"value": "example"};

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
    url := "${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/getassetissuelistbyname"

    data := map[string]interface{}{
       "value": "example",
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

url = '${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/getassetissuelistbyname'

data = {
    "value": "example"
}

response = requests.post(url, headers={'Content-Type': 'application/json'}, data=json.dumps(data))
res = response.json()

print(res)
`,
  },
];

const RESPONSE_JSON = `{
  "assetIssue": [
    { "id": "1000001", "name": "4d79546f6b656e", "abbr": "4d54", "total_supply": 1000000000 },
    { "id": "1000042", "name": "4d79546f6b656e", "abbr": "4d5432", "total_supply": 500000000 }
  ]
}`;

const REQUEST_PARAMS: RequestParamProp = [
  {
    paramName: "value",
    type: "string",
    paramDescription: "[Required for GET] The TRC10 token name to search for",
  },
];

const RESPONSE_PARAMS: ReqResParam[] = [
  {
    paramName: "assetIssue",
    type: "array_of_objects",
    paramDescription: "All TRC10 tokens matching the given name",
  },
];

const USE_CASES = [
  "Disambiguate between multiple TRC10 tokens that share the same display name",
];

const CONSTRAINTS = [
  "Token names are not guaranteed unique on Tron, unlike numeric asset IDs",
  "Also available under /walletsolidity/ for confirmed (solidified) data instead of the latest state",
];
