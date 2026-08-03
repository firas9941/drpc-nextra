import TronMethod from "../../TronMethod/TronMethod";
import { GenericMethodPropsReplacing } from "../../GenericMethod/GenericMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import { DRPC_ENDPOINT_URL_TRON_PAID } from "./constants";

export function TronMethod_deploycontract(props: GenericMethodPropsReplacing) {
  return (
    <TronMethod
      method="deploycontract"
      network="tron"
      cu={20}
      description={"Creates an unsigned transaction to deploy a smart contract to the Tron network."}
      useCases={USE_CASES}
      constraints={CONSTRAINTS}
      codeSnippets={CODE_SNIPPETS}
      requestParams={REQUEST_PARAMS}
      requestParamsType="object"
      responseJSON={RESPONSE_JSON}
      responseParams={RESPONSE_PARAMS}
      responseParamsType="object"
      responseParamsDescription={
        "Creates an unsigned transaction to deploy a smart contract to the Tron network."
      }
      {...props}
    />
  );
}

const CODE_SNIPPETS: Array<CodeSnippetObject> = [
  {
    language: "shell",
    code: () => `curl --request POST \\
     --url ${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/deploycontract \\
     --header 'accept: application/json' \\
     --header 'content-type: application/json' \\
     --data '{"owner_address": "TZ4UXDV5ZhNW7fb2AMSbgfAEZ7hWsnYS2g", "bytecode": "example", "abi": "example", "name": "example", "fee_limit": 1, "consume_user_resource_percent": 1, "origin_energy_limit": 1, "call_value": 1, "visible": true}'`,
  },
  {
    language: "js",
    code: () => `const url = '${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/deploycontract';

const data = {"owner_address": "TZ4UXDV5ZhNW7fb2AMSbgfAEZ7hWsnYS2g", "bytecode": "example", "abi": "example", "name": "example", "fee_limit": 1, "consume_user_resource_percent": 1, "origin_energy_limit": 1, "call_value": 1, "visible": true};

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

const url = '${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/deploycontract';

const data = {"owner_address": "TZ4UXDV5ZhNW7fb2AMSbgfAEZ7hWsnYS2g", "bytecode": "example", "abi": "example", "name": "example", "fee_limit": 1, "consume_user_resource_percent": 1, "origin_energy_limit": 1, "call_value": 1, "visible": true};

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
    url := "${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/deploycontract"

    data := map[string]interface{}{
       "owner_address": "TZ4UXDV5ZhNW7fb2AMSbgfAEZ7hWsnYS2g",
       "bytecode": "example",
       "abi": "example",
       "name": "example",
       "fee_limit": 1,
       "consume_user_resource_percent": 1,
       "origin_energy_limit": 1,
       "call_value": 1,
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

url = '${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/deploycontract'

data = {
    "owner_address": "TZ4UXDV5ZhNW7fb2AMSbgfAEZ7hWsnYS2g",
    "bytecode": "example",
    "abi": "example",
    "name": "example",
    "fee_limit": 1,
    "consume_user_resource_percent": 1,
    "origin_energy_limit": 1,
    "call_value": 1,
    "visible": True
}

response = requests.post(url, headers={'Content-Type': 'application/json'}, data=json.dumps(data))
res = response.json()

print(res)
`,
  },
];

const RESPONSE_JSON = `{
  "visible": true,
  "txID": "6db783c4142b3749a4b598db4644155455c9206e2eca4b31efbd48e46773d9d5",
  "raw_data": {
    "contract": [{
      "parameter": {
        "value": {
          "owner_address": "TZ4UXDV5ZhNW7fb2AMSbgfAEZ7hWsnYS2g",
          "new_contract": { "bytecode": "608060405234801561001057600080fd5b50...", "consume_user_resource_percent": 100 }
        },
        "type_url": "type.googleapis.com/protocol.CreateSmartContract"
      },
      "type": "CreateSmartContract"
    }],
    "ref_block_bytes": "f69b",
    "ref_block_hash": "7d4a3b02495f2320",
    "expiration": 1762502739000,
    "fee_limit": 1000000000,
    "timestamp": 1762502681856
  },
  "raw_data_hex": "0a02f69b22087d4a3b02495f232040b888e6eaa5335a67080112630a2d..."
}`;

const REQUEST_PARAMS: RequestParamProp = [
  {
    paramName: "owner_address",
    type: "string",
    paramDescription: "[Required] The deploying account's address",
  },
  {
    paramName: "bytecode",
    type: "string",
    paramDescription: "[Required] The compiled contract bytecode, hex-encoded",
  },
  {
    paramName: "abi",
    type: "string",
    paramDescription: "The contract's ABI, JSON-encoded as a string",
  },
  {
    paramName: "name",
    type: "string",
    paramDescription: "The contract's name",
  },
  {
    paramName: "parameter",
    type: "string",
    paramDescription: "Constructor parameters (hex, appended to bytecode)",
  },
  {
    paramName: "fee_limit",
    type: "integer",
    paramDescription: "[Required] Maximum TRX, in sun, the caller will burn for energy on this deployment",
  },
  {
    paramName: "consume_user_resource_percent",
    type: "integer",
    paramDescription: "Percentage of invocation energy cost passed on to callers (0-100)",
  },
  {
    paramName: "origin_energy_limit",
    type: "integer",
    paramDescription: "Maximum energy a single call can consume from the deployer's account",
  },
  {
    paramName: "call_value",
    type: "integer",
    paramDescription: "Amount of TRX, in sun, sent to the contract's constructor",
  },
  {
    paramName: "token_id",
    type: "int64",
    paramDescription: "TRC-10 token id sent with the deployment",
  },
  {
    paramName: "call_token_value",
    type: "int64",
    paramDescription: "TRC-10 amount sent with the deployment",
  },
    {
    paramName: "Permission_id",
    type: "integer",
    paramDescription: "Multi-sig permission ID",
  },
  {
    paramName: "visible",
    type: "boolean",
    paramDescription: "When true, addresses are base58check strings; when false (default), hex strings",
  },
];

const RESPONSE_PARAMS: ReqResParam[] = [
  {
  paramName: "visible",
  type: "boolean",
  paramDescription: "Indicates whether addresses in this transaction are represented in base58 format (true) or hex format (false).",
},
{
  paramName: "txID",
  type: "string",
  paramDescription: "The unique transaction hash (transaction ID), computed as the SHA256 of raw_data.",
},
{
  paramName: "contract_address",
  type: "string",
  paramDescription: "The deterministic address assigned to the new smart contract, computed from the deployer's address and transaction nonce.",
},
{
  paramName: "raw_data",
  type: "object",
  childrenParamsType: "object",
  paramDescription: "The unsigned transaction body containing the contract instruction and blockchain reference data.",
  childrenParams: [
    {
      paramName: "contract",
      type: "array_of_objects",
      childrenParamsType: "object",
      paramDescription: "The list of contract instructions to be executed by this transaction.",
      childrenParams: [
        {
          paramName: "parameter",
          type: "object",
          childrenParamsType: "object",
          paramDescription: "The typed payload describing the specific contract call being made.",
          childrenParams: [
            {
              paramName: "value",
              type: "object",
              childrenParamsType: "object",
              paramDescription: "The decoded fields of the contract — here, a smart contract deployment request.",
              childrenParams: [
                {
                  paramName: "owner_address",
                  type: "string",
                  paramDescription: "The address deploying the smart contract, in hex format.",
                },
                {
                  paramName: "new_contract",
                  type: "object",
                  childrenParamsType: "object",
                  paramDescription: "The definition of the smart contract being deployed.",
                  childrenParams: [
                    {
                      paramName: "origin_address",
                      type: "string",
                      paramDescription: "The address recorded as the contract's creator/owner, in hex format.",
                    },
                    {
                      paramName: "consume_user_resource_percent",
                      type: "integer",
                      paramDescription: "The percentage of Energy cost that callers of this contract must pay themselves, with the remainder charged to the contract owner.",
                    },
                    {
                      paramName: "name",
                      type: "string",
                      paramDescription: "The human-readable name given to the smart contract.",
                    },
                    {
                      paramName: "bytecode",
                      type: "string",
                      paramDescription: "The hex-encoded compiled EVM bytecode to be deployed on-chain.",
                    },
                    {
                      paramName: "abi",
                      type: "object",
                      paramDescription: "The contract's Application Binary Interface, describing its callable functions and events; empty here.",
                    },
                    {
                      paramName: "origin_energy_limit",
                      type: "integer",
                      paramDescription: "The maximum amount of Energy the contract owner is willing to cover per call, capping the owner-paid share.",
                    },
                  ],
                },
              ],
            },
            {
              paramName: "type_url",
              type: "string",
              paramDescription: "The fully qualified protobuf type identifier describing which contract schema `value` should be decoded with.",
            },
          ],
        },
        {
          paramName: "type",
          type: "string",
          paramDescription: "The human-readable name of the contract type being executed (here, CreateSmartContract).",
        },
      ],
    },
    {
      paramName: "ref_block_bytes",
      type: "string",
      paramDescription: "The last two bytes of the reference block number, used for transaction expiration and replay protection.",
    },
    {
      paramName: "ref_block_hash",
      type: "string",
      paramDescription: "The last eight bytes of the reference block's hash, paired with ref_block_bytes for replay protection.",
    },
    {
      paramName: "fee_limit",
      type: "integer",
      paramDescription: "The maximum amount of TRX, in sun, the deployer is willing to spend on Energy fees for this deployment.",
    },
    {
      paramName: "expiration",
      type: "integer",
      paramDescription: "Unix timestamp, in ms, after which this transaction is no longer valid and will be rejected by the network.",
    },
    {
      paramName: "timestamp",
      type: "integer",
      paramDescription: "Unix timestamp, in ms, marking when the transaction was created/signed by the client.",
    },
  ],
},
{
  paramName: "raw_data_hex",
  type: "string",
  paramDescription: "The hex-encoded serialized bytes of raw_data, used as the actual payload to sign and broadcast.",
},
];

const USE_CASES = [
  "Deploy a compiled Solidity contract's bytecode to the Tron network",
  "Set the deployer-vs-caller energy split (consume_user_resource_percent) at deploy time",
];

const CONSTRAINTS = [
  "fee_limit is required and capped at the protocol maximum (1,500,000 TRX)",
  "The returned transaction is unsigned and must be broadcast separately",
];
