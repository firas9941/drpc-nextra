import TronMethod from "../../TronMethod/TronMethod";
import { GenericMethodPropsReplacing } from "../../GenericMethod/GenericMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import { DRPC_ENDPOINT_URL_TRON_PAID } from "./constants";

export function TronMethod_getaccountbalance(props: GenericMethodPropsReplacing) {
  return (
    <TronMethod
      method="getaccountbalance"
      network="tron"
      cu={20}
      description={"Returns the TRX balance of an account at a specific block height."}
      useCases={USE_CASES}
      constraints={CONSTRAINTS}
      codeSnippets={CODE_SNIPPETS}
      requestParams={REQUEST_PARAMS}
      requestParamsType="object"
      responseJSON={RESPONSE_JSON}
      responseParams={RESPONSE_PARAMS}
      responseParamsType="object"
      responseParamsDescription={
        "Returns the TRX balance of an account at a specific block height."
      }
      {...props}
    />
  );
}

const CODE_SNIPPETS: Array<CodeSnippetObject> = [
  {
    language: "shell",
    code: () => `curl --request POST \\
     --url ${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/getaccountbalance \\
     --header 'accept: application/json' \\
     --header 'content-type: application/json' \\
     --data '{
  "account_identifier": { "address": "41dd791d6b49e190062d650e6a23c575510d35f2f9" },
  "block_identifier": {
    "hash": "00000000050bb65bced21f55a75cbbfccc51c5a0efca77ce82d56b8c353e0fd5",
    "number": 84653659
  }
}'`,
  },
  {
    language: "js",
    code: () => `const url = '${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/getaccountbalance';

const data = {
  "account_identifier": { "address": "41dd791d6b49e190062d650e6a23c575510d35f2f9" },
  "block_identifier": {
    "hash": "00000000050bb65bced21f55a75cbbfccc51c5a0efca77ce82d56b8c353e0fd5",
    "number": 84653659
  }
};

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

const url = '${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/getaccountbalance';

const data = {
  "account_identifier": { "address": "41dd791d6b49e190062d650e6a23c575510d35f2f9" },
  "block_identifier": {
    "hash": "00000000050bb65bced21f55a75cbbfccc51c5a0efca77ce82d56b8c353e0fd5",
    "number": 84653659
  }
};

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
    url := "${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/getaccountbalance"

    data := map[string]interface{}{
  "account_identifier": { "address": "41dd791d6b49e190062d650e6a23c575510d35f2f9" },
  "block_identifier": {
    "hash": "00000000050bb65bced21f55a75cbbfccc51c5a0efca77ce82d56b8c353e0fd5",
    "number": 84653659
  }
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

url = '${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/getaccountbalance'

data = {
  "account_identifier": { "address": "41dd791d6b49e190062d650e6a23c575510d35f2f9" },
  "block_identifier": {
    "hash": "00000000050bb65bced21f55a75cbbfccc51c5a0efca77ce82d56b8c353e0fd5",
    "number": 84653659
  }
}

response = requests.post(url, headers={'Content-Type': 'application/json'}, data=json.dumps(data))
res = response.json()

print(res)
`,
  },
];

const RESPONSE_JSON = `{
    "balance": 0,
    "block_identifier": {
        "hash": "00000000050bb65bced21f55a75cbbfccc51c5a0efca77ce82d56b8c353e0fd5",
        "number": 84653659
    }
}`;

const REQUEST_PARAMS: RequestParamProp = [
  {
    paramName: "account_identifier",
    type: "object",
    paramDescription: "[Required] Object containing the address field to query",
  },
  {
    paramName: "block_identifier",
    type: "object",
    paramDescription: "[Required] Object containing hash and number identifying the block to query the balance at",
  },
  {
    paramName: "visible",
    type: "boolean",
    paramDescription: "When true, addresses are base58check strings; when false (default), hex strings",
  },
];

const RESPONSE_PARAMS: ReqResParam[] = [
  {
    paramName: "balance",
    type: "integer",
    paramDescription: "TRX balance, in sun, as of the specified block",
  },
  {
    paramName: "block_identifier",
    type: "object",
    paramDescription: "Echoes the block hash and number the balance was read at",
  },
];

const USE_CASES = [
  "Confirm a wallet's balance as of a specific historical block for auditing",
  "Reconcile deposits by checking balance deltas between two block heights",
];

const CONSTRAINTS = [
  "Requires both a valid block hash and matching block number",
  "Only available on nodes retaining state for the requested historical block",
];
