import TronMethod from "../../TronMethod/TronMethod";
import { GenericMethodPropsReplacing } from "../../GenericMethod/GenericMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import { DRPC_ENDPOINT_URL_TRON_PAID } from "./constants";

export function TronMethod_getproposalbyid(props: GenericMethodPropsReplacing) {
  return (
    <TronMethod
      method="getproposalbyid"
      network="tron"
      cu={20}
      description={"Returns the details and vote status of a specific network parameter proposal."}
      useCases={USE_CASES}
      constraints={CONSTRAINTS}
      codeSnippets={CODE_SNIPPETS}
      requestParams={REQUEST_PARAMS}
      requestParamsType="object"
      responseJSON={RESPONSE_JSON}
      responseParams={RESPONSE_PARAMS}
      responseParamsType="object"
      responseParamsDescription={
        "Returns the details and vote status of a specific network parameter proposal."
      }
      {...props}
    />
  );
}

const CODE_SNIPPETS: Array<CodeSnippetObject> = [
  {
    language: "shell",
    code: () => `curl --request POST \\
     --url ${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/getproposalbyid \\
     --header 'accept: application/json' \\
     --header 'content-type: application/json' \\
     --data '{"id": 1}'`,
  },
  {
    language: "js",
    code: () => `const url = '${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/getproposalbyid';

const data = {"id": 1};

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

const url = '${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/getproposalbyid';

const data = {"id": 1};

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
    url := "${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/getproposalbyid"

    data := map[string]interface{}{
       "id": 1,
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

url = '${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/getproposalbyid'

data = {
    "id": 1
}

response = requests.post(url, headers={'Content-Type': 'application/json'}, data=json.dumps(data))
res = response.json()

print(res)
`,
  },
];

const RESPONSE_JSON = `{
  "proposal_id": 70,
  "proposer_address": "412e9d9ea27e51b0307afc7ce64654cf9359b74cec",
  "parameters": [
    { "key": 1, "value": 9997000000 }
  ],
  "expiration_time": 1582381800000,
  "create_time": 1582381197000,
  "state": "DISAPPROVED"
}`;

const REQUEST_PARAMS: RequestParamProp = [
  {
    paramName: "id",
    type: "integer",
    paramDescription: "[Required] The proposal's numeric ID",
  },
  {
    paramName: "visible",
    type: "boolean",
    paramDescription: "Address format",
  },
];

const RESPONSE_PARAMS: ReqResParam[] = [
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
  paramName: "state",
  type: "string",
  paramDescription: "The current status of this proposal in its lifecycle (e.g. PENDING, APPROVED, DISAPPROVED, CANCELED).",
}
];

const USE_CASES = [
  "Also available as GET",
  "Check a specific proposal's current approval count and status",
];

const CONSTRAINTS = [
  "Returns an empty object if no proposal with that id exists",
];
