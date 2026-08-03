import TronMethod from "../../TronMethod/TronMethod";
import { GenericMethodPropsReplacing } from "../../GenericMethod/GenericMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import { DRPC_ENDPOINT_URL_TRON_PAID } from "./constants";

export function TronMethod_getpaginatednowwitnesslist(props: GenericMethodPropsReplacing) {
  return (
    <TronMethod
      method="getpaginatednowwitnesslist"
      network="tron"
      cu={20}
      description={"Returns a paginated list of current Super Representatives using offset and limit parameters."}
      useCases={USE_CASES}
      constraints={CONSTRAINTS}
      codeSnippets={CODE_SNIPPETS}
      requestParams={REQUEST_PARAMS}
      requestParamsType="object"
      responseJSON={RESPONSE_JSON}
      responseParams={RESPONSE_PARAMS}
      responseParamsType="object"
      responseParamsDescription={
        "Returns a paginated list of current Super Representatives using offset and limit parameters."
      }
      {...props}
    />
  );
}

const CODE_SNIPPETS: Array<CodeSnippetObject> = [
  {
    language: "shell",
    code: () => `curl --request POST \\
     --url ${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/getpaginatednowwitnesslist \\
     --header 'accept: application/json' \\
     --header 'content-type: application/json' \\
     --data '{"offset": 1, "limit": 1}'`,
  },
  {
    language: "js",
    code: () => `const url = '${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/getpaginatednowwitnesslist';

const data = {"offset": 1, "limit": 1};

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

const url = '${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/getpaginatednowwitnesslist';

const data = {"offset": 1, "limit": 1};

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
    url := "${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/getpaginatednowwitnesslist"

    data := map[string]interface{}{
       "offset": 1,
       "limit": 1,
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

url = '${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/getpaginatednowwitnesslist'

data = {
    "offset": 1,
    "limit": 1
}

response = requests.post(url, headers={'Content-Type': 'application/json'}, data=json.dumps(data))
res = response.json()

print(res)
`,
  },
];

const RESPONSE_JSON = `{
  "witnesses": [
    { "address": "41e38c95e0d7e9b68f7c8f7b4d3e6a5c2b1f9e8d7c6b5a4f3e2d1c0b9a8", "voteCount": 122345678, "isJobs": true }
  ]
}`;

const REQUEST_PARAMS: RequestParamProp = [
  {
    paramName: "offset",
    type: "integer",
    paramDescription: "[Required for GET] Number of witnesses to skip",
  },
  {
    paramName: "limit",
    type: "integer",
    paramDescription: "[Required for GET] Maximum number of witnesses to return",
  },
  {
  paramName: "visible",
  type: "boolean",
  paramDescription: "Set to true to format addresses in Base58; set to false for hex format. (Default: false)",
},
];

const RESPONSE_PARAMS: ReqResParam[] = [
  {
  paramName: "witnesses",
  type: "array_of_objects",
  childrenParamsType: "object",
  paramDescription: "The list of witness (Super Representative and SR candidate) records on the network.",
  childrenParams: [
    {
      paramName: "address",
      type: "string",
      paramDescription: "The address of this witness, in hex format.",
    },
    {
      paramName: "voteCount",
      type: "integer",
      paramDescription: "The total number of TRON Power votes currently cast for this witness.",
    },
    {
      paramName: "url",
      type: "string",
      paramDescription: "The witness's public URL, in plain UTF-8 text.",
    },
    {
      paramName: "totalProduced",
      type: "integer",
      paramDescription: "The cumulative number of blocks this witness has successfully produced.",
    },
    {
      paramName: "totalMissed",
      type: "integer",
      paramDescription: "The cumulative number of block-production slots this witness has missed.",
    },
    {
      paramName: "latestBlockNum",
      type: "integer",
      paramDescription: "The height of the most recent block produced by this witness.",
    },
    {
      paramName: "latestSlotNum",
      type: "integer",
      paramDescription: "The most recent DPoS time slot in which this witness was scheduled to produce a block.",
    },
    {
      paramName: "isJobs",
      type: "boolean",
      paramDescription: "Whether this witness currently holds an active Super Representative seat (as opposed to being a candidate only).",
    },
  ],
}
];

const USE_CASES = [
  "Also available as GET",
  "Page through the full witness list in a UI without loading everything at once",
];

const CONSTRAINTS = [
  "Very large limit values may be capped by the node",
  "Also available under /walletsolidity/ for confirmed (solidified) data instead of the latest state",
];
