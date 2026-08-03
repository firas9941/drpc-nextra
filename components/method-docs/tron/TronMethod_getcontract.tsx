import TronMethod from "../../TronMethod/TronMethod";
import { GenericMethodPropsReplacing } from "../../GenericMethod/GenericMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import { DRPC_ENDPOINT_URL_TRON_PAID } from "./constants";

export function TronMethod_getcontract(props: GenericMethodPropsReplacing) {
  return (
    <TronMethod
      method="getcontract"
      network="tron"
      cu={20}
      description={"Returns the bytecode and metadata of a deployed smart contract by address."}
      useCases={USE_CASES}
      constraints={CONSTRAINTS}
      codeSnippets={CODE_SNIPPETS}
      requestParams={REQUEST_PARAMS}
      requestParamsType="object"
      responseJSON={RESPONSE_JSON}
      responseParams={RESPONSE_PARAMS}
      responseParamsType="object"
      responseParamsDescription={
        "Returns the bytecode and metadata of a deployed smart contract by address."
      }
      {...props}
    />
  );
}

const CODE_SNIPPETS: Array<CodeSnippetObject> = [
  {
    language: "shell",
    code: () => `curl --request POST \\
     --url ${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/getcontract \\
     --header 'accept: application/json' \\
     --header 'content-type: application/json' \\
     --data '{"value": "example", "visible": true}'`,
  },
  {
    language: "js",
    code: () => `const url = '${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/getcontract';

const data = {"value": "example", "visible": true};

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

const url = '${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/getcontract';

const data = {"value": "example", "visible": true};

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
    url := "${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/getcontract"

    data := map[string]interface{}{
       "value": "example",
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

url = '${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/getcontract'

data = {
    "value": "example",
    "visible": True
}

response = requests.post(url, headers={'Content-Type': 'application/json'}, data=json.dumps(data))
res = response.json()

print(res)
`,
  },
];

const RESPONSE_JSON = `{
  "origin_address": "4165fa68800fff5a10346d1a3aa1fb2ce92f2e2971",
  "contract_address": "41eca9bc828a3005b9a3b909f2cc5c2a54794de05f",
  "abi": {
    "entrys": [
      {
        "outputs": [{ "type": "string" }],
        "constant": true,
        "name": "name",
        "stateMutability": "View",
        "type": "Function"
      }
    ]
  },
  "bytecode": "60806040526000600260146101000a81548160ff02191690831515021790555060...",
  "name": "TetherToken",
  "origin_energy_limit": 1000000000,
  "code_hash": "1c32379f645df32d2a8e45de37319983d01d47185588337985aeefb4672a91f2"
}`;

const REQUEST_PARAMS: RequestParamProp = [
  {
    paramName: "value",
    type: "string",
    paramDescription: "The smart contract's address",
  },
  {
    paramName: "visible",
    type: "boolean",
    paramDescription: "When true, addresses are base58check strings; when false (default), hex strings",
  },
];

const RESPONSE_PARAMS: ReqResParam[] = [
  {
  paramName: "origin_address",
  type: "string",
  paramDescription: "The address that originally deployed this smart contract, in hex format.",
},
{
  paramName: "contract_address",
  type: "string",
  paramDescription: "The address of the smart contract being queried, in hex format.",
},
{
  paramName: "abi",
  type: "object",
  childrenParamsType: "object",
  paramDescription: "The contract's Application Binary Interface, describing its callable functions and events.",
  childrenParams: [
    {
      paramName: "entrys",
      type: "array_of_objects",
      childrenParamsType: "object",
      paramDescription: "The list of individual ABI entries (functions, events, constructors) exposed by this contract.",
      childrenParams: [
        {
          paramName: "outputs",
          type: "array_of_objects",
          paramDescription: "The list of return value types produced by this function.",
        },
        {
          paramName: "constant",
          type: "boolean",
          paramDescription: "Whether this function is read-only and doesn't modify contract state.",
        },
        {
          paramName: "name",
          type: "string",
          paramDescription: "The name of this function or event.",
        },
        {
          paramName: "stateMutability",
          type: "string",
          paramDescription: "The function's state-mutability category (e.g. View, Pure, Nonpayable, Payable).",
        },
        {
          paramName: "type",
          type: "string",
          paramDescription: "The kind of ABI entry this is (e.g. Function, Event, Constructor).",
        },
      ],
    },
  ],
},
{
  paramName: "bytecode",
  type: "string",
  paramDescription: "The hex-encoded compiled EVM bytecode currently deployed on-chain for this contract.",
},
{
  paramName: "name",
  type: "string",
  paramDescription: "The human-readable name assigned to this smart contract.",
},
{
  paramName: "origin_energy_limit",
  type: "integer",
  paramDescription: "The maximum amount of Energy the contract's deployer is willing to cover per call, capping the owner-paid share.",
},
{
  paramName: "code_hash",
  type: "string",
  paramDescription: "The hash of the contract's deployed bytecode, used to identify or verify its exact code.",
}
];

const USE_CASES = [
  "Also available as GET",
  "Check the energy-sharing configuration of a contract you're calling",
];

const CONSTRAINTS = [
  "Returns an empty object if the address has no deployed contract",
];
