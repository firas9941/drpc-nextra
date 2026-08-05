import TronMethod from "../../TronMethod/TronMethod";
import { GenericMethodPropsReplacing } from "../../GenericMethod/GenericMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import { DRPC_ENDPOINT_URL_TRON_PAID } from "./constants";

export function TronMethod_listwitnesses(props: GenericMethodPropsReplacing) {
  return (
    <TronMethod
      method="listwitnesses"
      network="tron"
      cu={20}
      description={"Returns the full list of Super Representatives and candidates with their vote counts."}
      useCases={USE_CASES}
      constraints={CONSTRAINTS}
      codeSnippets={CODE_SNIPPETS}
      requestParams={REQUEST_PARAMS}
      requestParamsType="object"
      responseJSON={RESPONSE_JSON}
      responseParams={RESPONSE_PARAMS}
      responseParamsType="object"
      responseParamsDescription={
        "Returns the full list of Super Representatives and candidates with their vote counts."
      }
      {...props}
    />
  );
}

const CODE_SNIPPETS: Array<CodeSnippetObject> = [
  {
    language: "shell",
    code: () => `curl --request POST \\
     --url ${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/listwitnesses \\
     --header 'accept: application/json' \\
     --header 'content-type: application/json' \\
     --data '{}'`,
  },
  {
    language: "js",
    code: () => `const url = '${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/listwitnesses';

const data = {};

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

const url = '${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/listwitnesses';

const data = {};

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
    url := "${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/listwitnesses"

    data := map[string]interface{}{}

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

url = '${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/listwitnesses'

data = {}

response = requests.post(url, headers={'Content-Type': 'application/json'}, data=json.dumps(data))
res = response.json()

print(res)
`,
  },
];

const RESPONSE_JSON = `{
  "witnesses": [
    {
      "address": "419c7c7049d26108be0dcb5f78479c6ff27ba101d1",
      "voteCount": 2320142029,
      "url": "http://sr-15.com",
      "totalProduced": 1897834,
      "totalMissed": 252,
      "latestBlockNum": 66987961,
      "latestSlotNum": 592482103,
      "isJobs": true
    }
    /* ... other candidates */
  ]
}`;

const REQUEST_PARAMS: RequestParamProp = [
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
  "Build a Super Representative leaderboard ranked by vote count",
  "Check whether a witness is currently in the active (top 27) set via isJobs",
];

const CONSTRAINTS = [
  "Vote counts reflect the last completed maintenance (vote-counting) cycle, not real-time",
  "Also available under /walletsolidity/ for confirmed (solidified) data instead of the latest state",
];
