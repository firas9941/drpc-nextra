import TronMethod from "../../TronMethod/TronMethod";
import { GenericMethodPropsReplacing } from "../../GenericMethod/GenericMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import { DRPC_ENDPOINT_URL_TRON_PAID } from "./constants";

export function TronMethod_getaccountnet(props: GenericMethodPropsReplacing) {
  return (
    <TronMethod
      method="getaccountnet"
      network="tron"
      cu={20}
      description={"Returns the bandwidth usage and limits for a given account."}
      useCases={USE_CASES}
      constraints={CONSTRAINTS}
      codeSnippets={CODE_SNIPPETS}
      requestParams={REQUEST_PARAMS}
      requestParamsType="object"
      responseJSON={RESPONSE_JSON}
      responseParams={RESPONSE_PARAMS}
      responseParamsType="object"
      responseParamsDescription={
        "Returns the bandwidth usage and limits for a given account."
      }
      {...props}
    />
  );
}

const CODE_SNIPPETS: Array<CodeSnippetObject> = [
  {
    language: "shell",
    code: () => `curl --request POST \\
     --url ${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/getaccountnet \\
     --header 'accept: application/json' \\
     --header 'content-type: application/json' \\
     --data '{"address": "TZ4UXDV5ZhNW7fb2AMSbgfAEZ7hWsnYS2g", "visible": true}'`,
  },
  {
    language: "js",
    code: () => `const url = '${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/getaccountnet';

const data = {"address": "TZ4UXDV5ZhNW7fb2AMSbgfAEZ7hWsnYS2g", "visible": true};

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

const url = '${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/getaccountnet';

const data = {"address": "TZ4UXDV5ZhNW7fb2AMSbgfAEZ7hWsnYS2g", "visible": true};

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
    url := "${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/getaccountnet"

    data := map[string]interface{}{
       "address": "TZ4UXDV5ZhNW7fb2AMSbgfAEZ7hWsnYS2g",
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

url = '${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/getaccountnet'

data = {
    "address": "TZ4UXDV5ZhNW7fb2AMSbgfAEZ7hWsnYS2g",
    "visible": True
}

response = requests.post(url, headers={'Content-Type': 'application/json'}, data=json.dumps(data))
res = response.json()

print(res)
`,
  },
];

const RESPONSE_JSON = `{
    "freeNetLimit": 600,
    "assetNetUsed": [
        {
            "key": "1004977",
            "value": 0
        },
        {
            "key": "1005026",
            "value": 0
        },
        {
            "key": "1005157",
            "value": 0
        },
        {
            "key": "1005168",
            "value": 0
        },
        {
            "key": "1005141",
            "value": 0
        },
        {
            "key": "1005074",
            "value": 0
        }
    ],
    "assetNetLimit": [
        {
            "key": "1004977",
            "value": 1
        },
        {
            "key": "1005026",
            "value": 0
        },
        {
            "key": "1005157",
            "value": 0
        },
        {
            "key": "1005168",
            "value": 0
        },
        {
            "key": "1005141",
            "value": 0
        },
        {
            "key": "1005074",
            "value": 0
        }
    ],
    "TotalNetLimit": 43200000000,
    "TotalNetWeight": 26856678116
}
`;

const REQUEST_PARAMS: RequestParamProp = [
  {
    paramName: "address",
    type: "string",
    paramDescription: "[Required for GET] The account address to query",
  },
  {
    paramName: "visible",
    type: "boolean",
    paramDescription: "When true, addresses are base58check strings; when false (default), hex strings",
  },
];

const RESPONSE_PARAMS: ReqResParam[] = [
  {
    paramName: "freeNetUsed",
    type: "integer",
    paramDescription: "Free bandwidth used today",
  },
  {
    paramName: "freeNetLimit",
    type: "integer",
    paramDescription: "Daily free bandwidth quota (5,000 by default)",
  },
  {
    paramName: "NetUsed",
    type: "integer",
    paramDescription: "Staked bandwidth used today",
  },
  {
    paramName: "NetLimit",
    type: "integer",
    paramDescription: "Total staked bandwidth available",
  },
  {
    paramName: "TotalNetLimit",
    type: "integer",
    paramDescription: "Total bandwidth available across the whole network",
  },
  {
    paramName: "TotalNetWeight",
    type: "integer",
    paramDescription: "Total TRX staked for bandwidth across the network",
  },
    {
    paramName: "assetNetUsed",
    type: "map[string]int64",
    paramDescription: "Account's free Bandwidth used for TRC-10 tokens, keyed by Token ID.",
  },
    {
    paramName: "assetNetLimit",
    type: "map[string]int64",
    paramDescription: "Account's free Bandwidth limits for TRC-10 tokens, keyed by Token ID.",
  },
];

const USE_CASES = [
  "Available as a GET request"  ,
  "Monitor daily free-bandwidth consumption for a hot wallet",
];

const CONSTRAINTS = [
  "Superseded in newer responses by fields also present in getaccountresource",
];
