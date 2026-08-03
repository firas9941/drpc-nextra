import TronMethod from "../../TronMethod/TronMethod";
import { GenericMethodPropsReplacing } from "../../GenericMethod/GenericMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import { DRPC_ENDPOINT_URL_TRON_PAID } from "./constants";

export function TronMethod_listproposals(props: GenericMethodPropsReplacing) {
  return (
    <TronMethod
      method="listproposals"
      network="tron"
      cu={20}
      description={"Returns the full list of network parameter proposals and their statuses."}
      useCases={USE_CASES}
      constraints={CONSTRAINTS}
      codeSnippets={CODE_SNIPPETS}
      requestParams={REQUEST_PARAMS}
      requestParamsType="object"
      responseJSON={RESPONSE_JSON}
      responseParams={RESPONSE_PARAMS}
      responseParamsType="object"
      responseParamsDescription={
        "Returns the full list of network parameter proposals and their statuses."
      }
      {...props}
    />
  );
}

const CODE_SNIPPETS: Array<CodeSnippetObject> = [
  {
    language: "shell",
    code: () => `curl --request POST \\
     --url ${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/listproposals \\
     --header 'accept: application/json' \\
     --header 'content-type: application/json' \\
     --data '{}'`,
  },
  {
    language: "js",
    code: () => `const url = '${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/listproposals';

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

const url = '${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/listproposals';

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
    url := "${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/listproposals"

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

url = '${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/listproposals'

data = {}

response = requests.post(url, headers={'Content-Type': 'application/json'}, data=json.dumps(data))
res = response.json()

print(res)
`,
  },
];

const RESPONSE_JSON = `{
  "proposals": [
    {
      "proposal_id": 1,
      "proposer_address": "41217179d498883cdbda5699402905d1feb258796c",
      "parameters": [
        { "key": 9,  "value": 1 },
        { "key": 10, "value": 1 }
      ],
      "expiration_time": 1572597600000,
      "create_time": 1572596523000,
      "approvals": [
        "41217179d498883cdbda5699402905d1feb258796c"
        /* ... other SRs */
      ],
      "state": "APPROVED"
    }
    /* ... other proposals */
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
  paramName: "proposals",
  type: "array_of_objects",
  childrenParamsType: "object",
  paramDescription: "The list of chain-parameter proposals matching the query.",
  childrenParams: [
    {
      paramName: "proposal_id",
      type: "integer",
      paramDescription: "The numeric identifier of this proposal.",
    },
    {
      paramName: "proposer_address",
      type: "string",
      paramDescription: "The address of the witness who created this proposal, in hex format.",
    },
    {
      paramName: "parameters",
      type: "array_of_objects",
      childrenParamsType: "object",
      paramDescription: "The list of chain parameters this proposal seeks to change, each identified by a numeric key and its proposed value.",
      childrenParams: [
        {
          paramName: "key",
          type: "integer",
          paramDescription: "The numeric identifier of the chain parameter being changed.",
        },
        {
          paramName: "value",
          type: "integer",
          paramDescription: "The proposed new value for this chain parameter.",
        },
      ],
    },
    {
      paramName: "expiration_time",
      type: "integer",
      paramDescription: "Unix timestamp, in ms, after which this proposal is no longer eligible to take effect.",
    },
    {
      paramName: "create_time",
      type: "integer",
      paramDescription: "Unix timestamp, in ms, at which this proposal was created.",
    },
    {
      paramName: "approvals",
      type: "array_of_strings",
      paramDescription: "The list of witness addresses that have approved this proposal so far.",
    },
    {
      paramName: "state",
      type: "string",
      paramDescription: "The current status of this proposal in its lifecycle (e.g. PENDING, APPROVED, DISAPPROVED, CANCELED).",
    },
  ],
}
];

const USE_CASES = [
  "Also available as GET",
  "Display a governance dashboard of active and past proposals",
];

const CONSTRAINTS = [
  "Response can grow large over time; consider getpaginatedproposallist for incremental loading",
];
