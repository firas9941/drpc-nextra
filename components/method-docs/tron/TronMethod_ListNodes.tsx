import TronMethod from "../../TronMethod/TronMethod";
import { GenericMethodPropsReplacing } from "../../GenericMethod/GenericMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import { DRPC_ENDPOINT_URL_TRON_PAID } from "./constants";

export function TronMethod_listnodes(props: GenericMethodPropsReplacing) {
  return (
    <TronMethod
      method="listnodes"
      network="tron"
      cu={20}
      description={"Returns the list of peer nodes currently connected to the queried node."}
      useCases={USE_CASES}
      constraints={CONSTRAINTS}
      codeSnippets={CODE_SNIPPETS}
      requestParams={REQUEST_PARAMS}
      requestParamsType="none"
      responseJSON={RESPONSE_JSON}
      responseParams={RESPONSE_PARAMS}
      responseParamsType="object"
      responseParamsDescription={
        "Returns the list of peer nodes currently connected to the queried node."
      }
      {...props}
    />
  );
}

const CODE_SNIPPETS: Array<CodeSnippetObject> = [
  {
    language: "shell",
    code: () => `curl --request POST \\
     --url ${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/listnodes \\
     --header 'accept: application/json' \\
     --header 'content-type: application/json' \\
     --data '{}'`,
  },
  {
    language: "js",
    code: () => `const url = '${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/listnodes';

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

const url = '${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/listnodes';

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
    url := "${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/listnodes"

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

url = '${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/listnodes'

data = {}

response = requests.post(url, headers={'Content-Type': 'application/json'}, data=json.dumps(data))
res = response.json()

print(res)
`,
  },
];

const RESPONSE_JSON = `{
  "nodes": [
    { "address": { "host": "3137362e392e3134382e323336", "port": 18888 } },
    { "address": { "host": "35382e3133362e3130332e3833", "port": 18889 } },
    { "address": { "host": "31352e3233352e3233332e313239", "port": 18888 } }
    ...
  ]
}`;

const REQUEST_PARAMS: RequestParamProp = [
    {
    paramName: "visible",
    type: "boolean",
    paramDescription: "When true, addresses are base58check strings; when false (default), hex strings",
  },
];

const RESPONSE_PARAMS: ReqResParam[] = [
  {
  paramName: "nodes",
  type: "array_of_objects",
  childrenParamsType: "object",
  paramDescription: "The list of peer nodes currently known to this node.",
  childrenParams: [
    {
      paramName: "address",
      type: "object",
      childrenParamsType: "object",
      paramDescription: "The network address at which this peer node can be reached.",
      childrenParams: [
        {
          paramName: "host",
          type: "string",
          paramDescription: "The peer's IP address or hostname, UTF-8 encoded as a hex string.",
        },
        {
          paramName: "port",
          type: "integer",
          paramDescription: "The TCP port on which the peer listens for P2P connections.",
        },
      ],
    },
  ],
}
];

const USE_CASES = [
  "Also available as GET",
  "Inspect a node's peer-to-peer connectivity for diagnostics",
];

const CONSTRAINTS = [
  "host is returned hex-encoded and needs to be decoded to a readable IP",
];
