import TronMethod from "../../TronMethod/TronMethod";
import { GenericMethodPropsReplacing } from "../../GenericMethod/GenericMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import { DRPC_ENDPOINT_URL_TRON_PAID } from "./constants";

export function TronMethod_broadcasthex(props: GenericMethodPropsReplacing) {
  return (
    <TronMethod
      method="broadcasthex"
      network="tron"
      cu={20}
      description={"Broadcasts a signed transaction supplied as a raw hex string to the Tron network."}
      useCases={USE_CASES}
      constraints={CONSTRAINTS}
      codeSnippets={CODE_SNIPPETS}
      requestParams={REQUEST_PARAMS}
      requestParamsType="object"
      responseJSON={RESPONSE_JSON}
      responseParams={RESPONSE_PARAMS}
      responseParamsType="object"
      responseParamsDescription={
        "Broadcasts a signed transaction supplied as a raw hex string to the Tron network."
      }
      {...props}
    />
  );
}

const CODE_SNIPPETS: Array<CodeSnippetObject> = [
  {
    language: "shell",
    code: () => `curl --request POST \\
     --url ${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/broadcasthex \\
     --header 'accept: application/json' \\
     --header 'content-type: application/json' \\
     --data '{"transaction": "example"}'`,
  },
  {
    language: "js",
    code: () => `const url = '${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/broadcasthex';

const data = {"transaction": "example"};

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

const url = '${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/broadcasthex';

const data = {"transaction": "example"};

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
    url := "${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/broadcasthex"

    data := map[string]interface{}{
       "transaction": "example",
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

url = '${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/broadcasthex'

data = {
    "transaction": "example"
}

response = requests.post(url, headers={'Content-Type': 'application/json'}, data=json.dumps(data))
res = response.json()

print(res)
`,
  },
];

const RESPONSE_JSON = `{
  "result": true,
  "txid": "f3c9aa2b4d122979f92a658be1804560f949a89c8b5d30e15b2d003712d72c92"
}`;

const REQUEST_PARAMS: RequestParamProp = [
  {
    paramName: "transaction",
    type: "string",
    paramDescription: "[Required] The fully signed transaction, protobuf-serialized and hex-encoded",
  },
];

const RESPONSE_PARAMS: ReqResParam[] = [
  {
    paramName: "result",
    type: "boolean",
    paramDescription: "Whether the node accepted the transaction",
  },
  {
    paramName: "txid",
    type: "string",
    paramDescription: "The transaction hash",
  },
  {
    paramName: "code",
    type: "string",
    paramDescription: "Present only on failure, e.g. SIGERROR or DUP_TRANSACTION_ERROR",
  },
  {
    paramName: "message",
    type: "string",
    paramDescription: "Present only on failure, a hex-encoded explanation of the error",
  },
];

const USE_CASES = [
  "Broadcast a transaction that was fully constructed and signed offline as a single hex blob",
  "Retry a broadcast safely by checking for DUP_TRANSACTION_ERROR",
];

const CONSTRAINTS = [
  "The hex string must be the complete signed transaction, not just raw_data",
  "Transactions expire (default ~60 seconds) and must be broadcast before expiration",
];
