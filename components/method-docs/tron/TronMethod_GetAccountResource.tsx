import TronMethod from "../../TronMethod/TronMethod";
import { GenericMethodPropsReplacing } from "../../GenericMethod/GenericMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import { DRPC_ENDPOINT_URL_TRON_PAID } from "./constants";

export function TronMethod_getaccountresource(props: GenericMethodPropsReplacing) {
  return (
    <TronMethod
      method="getaccountresource"
      network="tron"
      cu={20}
      description={"Returns the energy and bandwidth resource usage and limits for a given account."}
      useCases={USE_CASES}
      constraints={CONSTRAINTS}
      codeSnippets={CODE_SNIPPETS}
      requestParams={REQUEST_PARAMS}
      requestParamsType="object"
      responseJSON={RESPONSE_JSON}
      responseParams={RESPONSE_PARAMS}
      responseParamsType="object"
      responseParamsDescription={
        "Returns the energy and bandwidth resource usage and limits for a given account."
      }
      {...props}
    />
  );
}

const CODE_SNIPPETS: Array<CodeSnippetObject> = [
  {
    language: "shell",
    code: () => `curl --request POST \\
     --url ${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/getaccountresource \\
     --header 'accept: application/json' \\
     --header 'content-type: application/json' \\
     --data '{"address": "TZ4UXDV5ZhNW7fb2AMSbgfAEZ7hWsnYS2g", "visible": true}'`,
  },
  {
    language: "js",
    code: () => `const url = '${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/getaccountresource';

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

const url = '${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/getaccountresource';

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
    url := "${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/getaccountresource"

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

url = '${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/getaccountresource'

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
    "TotalNetWeight": 26856723239,
    "EnergyLimit": 9,
    "TotalEnergyLimit": 180000000000,
    "TotalEnergyWeight": 18971780957
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
    paramName: "freeNetLimit",
    type: "integer",
    paramDescription: "Daily free bandwidth quota",
  },
  {
    paramName: "NetLimit",
    type: "integer",
    paramDescription: "Staked bandwidth available",
  },
  {
    paramName: "TotalNetLimit",
    type: "integer",
    paramDescription: "Total network-wide bandwidth",
  },
  {
    paramName: "assetNetLimit",
    type: "map[string]int64",
    paramDescription: "Per-TRC-10 bandwidth",
  },
  {
    paramName: "TotalNetWeight",
    type: "integer",
    paramDescription: "Network-wide bandwidth quota / total staked TRX",
  },
  {
    paramName: "EnergyUsed",
    type: "integer",
    paramDescription: "Energy used today",
  },
  {
    paramName: "tronPowerLimit",
    type: "integer",
    paramDescription: "Voting power",
  },
  {
    paramName: "TotalEnergyLimit",
    type: "integer",
    paramDescription: "Total network-wide energy",
  },
  {
    paramName: "TotalTronPowerWeight",
    type: "integer",
    paramDescription: "Network-wide total voting power",
  }
];

const USE_CASES = [
  "Available as a GET request"  ,
  "Build a resource dashboard showing bandwidth and energy usage side by side",
];

const CONSTRAINTS = [
  "Values change every time new blocks are produced (staking window resets daily)",
];
