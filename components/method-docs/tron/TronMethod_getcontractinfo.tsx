import TronMethod from "../../TronMethod/TronMethod";
import { GenericMethodPropsReplacing } from "../../GenericMethod/GenericMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import { DRPC_ENDPOINT_URL_TRON_PAID } from "./constants";

export function TronMethod_getcontractinfo(props: GenericMethodPropsReplacing) {
  return (
    <TronMethod
      method="getcontractinfo"
      network="tron"
      cu={20}
      description={"Returns extended contract information, including ABI and source metadata, by address."}
      useCases={USE_CASES}
      constraints={CONSTRAINTS}
      codeSnippets={CODE_SNIPPETS}
      requestParams={REQUEST_PARAMS}
      requestParamsType="object"
      responseJSON={RESPONSE_JSON}
      responseParams={RESPONSE_PARAMS}
      responseParamsType="object"
      responseParamsDescription={
        "Returns extended contract information, including ABI and source metadata, by address."
      }
      {...props}
    />
  );
}

const CODE_SNIPPETS: Array<CodeSnippetObject> = [
  {
    language: "shell",
    code: () => `curl --request POST \\
     --url ${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/getcontractinfo \\
     --header 'accept: application/json' \\
     --header 'content-type: application/json' \\
     --data '{"value": "example", "visible": true}'`,
  },
  {
    language: "js",
    code: () => `const url = '${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/getcontractinfo';

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

const url = '${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/getcontractinfo';

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
    url := "${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/getcontractinfo"

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

url = '${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/getcontractinfo'

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
  "smart_contract": {
    "origin_address": "4165fa68800fff5a10346d1a3aa1fb2ce92f2e2971",
    "contract_address": "41eca9bc828a3005b9a3b909f2cc5c2a54794de05f",
    "abi": { "entrys": [/* 46 entries */] },
    "bytecode": "60806040526000600260146101000a81548160ff021916908315150217905550...",
    "name": "TetherToken",
    "origin_energy_limit": 1000000000,
    "code_hash": "1c32379f645df32d2a8e45de37319983d01d47185588337985aeefb4672a91f2"
  },
  "runtimecode": "608060405234801561001057600080fd5b50d3801561001d57600080fd5b50d28...",
  "contract_state": {
    "energy_usage": 236150,
    "update_cycle": 256749
  }
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
  paramName: "smart_contract",
  type: "object",
  childrenParamsType: "object",
  paramDescription: "The contract's static definition, as originally deployed.",
  childrenParams: [
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
          paramDescription: "The list of individual ABI entries (functions, events, constructors) exposed by this contract.",
        },
      ],
    },
    {
      paramName: "bytecode",
      type: "string",
      paramDescription: "The hex-encoded compiled EVM bytecode as originally submitted for deployment.",
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
    },
  ],
},
{
  paramName: "runtimecode",
  type: "string",
  paramDescription: "The hex-encoded actual bytecode stored on-chain and executed at runtime, which can differ from the original deployment bytecode (e.g. after constructor logic runs).",
},
{
  paramName: "contract_state",
  type: "object",
  childrenParamsType: "object",
  paramDescription: "Runtime statistics tracked for this contract's resource consumption.",
  childrenParams: [
    {
      paramName: "energy_usage",
      type: "integer",
      paramDescription: "A running measure of the contract's recent Energy consumption, used to adjust its energy factor over time.",
    },
    {
      paramName: "update_cycle",
      type: "integer",
      paramDescription: "The maintenance cycle number at which this contract's energy usage statistics were last recalculated.",
    },
  ],
}
];

const USE_CASES = [
  "Also available as GET",
  "Display a contract's name and ABI in a block explorer-style UI",
];

const CONSTRAINTS = [
  "Returns an empty object if the address has no deployed contract",
];
