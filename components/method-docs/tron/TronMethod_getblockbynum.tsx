import TronMethod from "../../TronMethod/TronMethod";
import { GenericMethodPropsReplacing } from "../../GenericMethod/GenericMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import { DRPC_ENDPOINT_URL_TRON_PAID } from "./constants";

export function TronMethod_getblockbynum(props: GenericMethodPropsReplacing) {
  return (
    <TronMethod
      method="getblockbynum"
      network="tron"
      cu={20}
      description={"Returns block details for a specific block number."}
      useCases={USE_CASES}
      constraints={CONSTRAINTS}
      codeSnippets={CODE_SNIPPETS}
      requestParams={REQUEST_PARAMS}
      requestParamsType="object"
      responseJSON={RESPONSE_JSON}
      responseParams={RESPONSE_PARAMS}
      responseParamsType="object"
      responseParamsDescription={
        "Returns block details for a specific block number."
      }
      {...props}
    />
  );
}

const CODE_SNIPPETS: Array<CodeSnippetObject> = [
  {
    language: "shell",
    code: () => `curl --request POST \\
     --url ${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/getblockbynum \\
     --header 'accept: application/json' \\
     --header 'content-type: application/json' \\
     --data '{"num": 1}'`,
  },
  {
    language: "js",
    code: () => `const url = '${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/getblockbynum';

const data = {"num": 1};

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

const url = '${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/getblockbynum';

const data = {"num": 1};

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
    url := "${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/getblockbynum"

    data := map[string]interface{}{
       "num": 1,
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

url = '${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/getblockbynum'

data = {
    "num": 1
}

response = requests.post(url, headers={'Content-Type': 'application/json'}, data=json.dumps(data))
res = response.json()

print(res)
`,
  },
];

const RESPONSE_JSON = `{
  "blockID": "0000000003fe262d52bfa4b2814f816fd2e57af5b98a33d60d8630a03a908e0e",
  "block_header": {
    "raw_data": {
      "number": 66987565,
      "txTrieRoot": "faf8fe3858339ead25cc892461c82a59b84dca4a51c45b026676bf3f45a352a2",
      "witness_address": "41b2f713d57dbcec679d93a8849fa0cd0e4db594ba",
      "parentHash": "0000000003fe262c85cd6b02033f4c3e5c1efa35de256a17bd906dc61fb1aeed",
      "version": 34,
      "timestamp": 1777445121000
    },
    "witness_signature": "5b3cf6cb15d52947989f7726f4907a144b39ccd667a1a0f98707b40cdfe65b96173ddf34ae8dcc5e78f136e0cf903a15c7128984aa2191f02333209d1879d3f900"
  },
  "transactions": [
   ...
   ]
}`;

const REQUEST_PARAMS: RequestParamProp = [
  {
    paramName: "num",
    type: "integer",
    paramDescription: "The block number to look up",
  },
  {
  paramName: "visible",
  type: "boolean",
  paramDescription: "Set to true to format addresses in Base58; set to false for hex format. (Default: false)",
},
];

const RESPONSE_PARAMS: ReqResParam[] = [
  {
  paramName: "blockID",
  type: "string",
  paramDescription: "The unique hash identifying this block, encoding both its height and content.",
},
{
  paramName: "block_header",
  type: "object",
  childrenParamsType: "object",
  paramDescription: "The block's header, containing metadata about its position in the chain and the producing witness.",
  childrenParams: [
    {
      paramName: "raw_data",
      type: "object",
      childrenParamsType: "object",
      paramDescription: "The core header fields that were hashed and signed by the producing witness.",
      childrenParams: [
        {
          paramName: "timestamp",
          type: "integer",
          paramDescription: "Unix timestamp, in ms, at which this block was produced.",
        },
        {
          paramName: "txTrieRoot",
          type: "string",
          paramDescription: "The Merkle root hash of all transactions included in this block, used to verify their integrity.",
        },
        {
          paramName: "parentHash",
          type: "string",
          paramDescription: "The blockID of the preceding block, linking this block into the chain.",
        },
        {
          paramName: "number",
          type: "integer",
          paramDescription: "The height (sequential number) of this block in the chain.",
        },
        {
          paramName: "witness_address",
          type: "string",
          paramDescription: "The address of the Super Representative who produced this block.",
        },
        {
          paramName: "version",
          type: "integer",
          paramDescription: "The block format version used by the node that produced this block.",
        },
      ],
    },
    {
      paramName: "witness_signature",
      type: "string",
      paramDescription: "The hex-encoded signature from the producing witness, proving they authored this block.",
    },
  ],
},
  {
        paramName: "transactions",
        type: "array_of_objects",
        childrenParamsType: "object",
        paramDescription: "The list of transactions included in this block, each with its execution outcome.",
        childrenParams: [
          {
            paramName: "raw_data",
            type: "object",
            childrenParamsType: "object",
            paramDescription: "The unsigned transaction body containing the contract instruction and blockchain reference data.",
            childrenParams: [
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
                paramName: "expiration",
                type: "integer",
                paramDescription: "Unix timestamp, in ms, after which this transaction would no longer be valid.",
              },
              {
                paramName: "contract",
                type: "array_of_objects",
                childrenParamsType: "object",
                paramDescription: "The list of contract instructions executed by this transaction.",
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
                        paramDescription: "The decoded fields of the contract — here, a smart contract call (e.g. a TRC20 token transfer).",
                        childrenParams: [
                          {
                            paramName: "owner_address",
                            type: "string",
                            paramDescription: "The address that initiated the smart contract call, in hex format.",
                          },
                          {
                            paramName: "contract_address",
                            type: "string",
                            paramDescription: "The address of the smart contract being invoked, in hex format.",
                          },
                          {
                            paramName: "data",
                            type: "string",
                            paramDescription: "The hex-encoded ABI-encoded call data, including the function selector and its arguments.",
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
                    paramDescription: "The human-readable name of the contract type being executed (here, TriggerSmartContract).",
                  },
                ],
              },
              {
                paramName: "timestamp",
                type: "integer",
                paramDescription: "Unix timestamp, in ms, marking when the transaction was created/signed by the client.",
              },
              {
                paramName: "fee_limit",
                type: "integer",
                paramDescription: "The maximum amount of TRX, in sun, the sender is willing to spend on Energy fees for this contract call.",
              },
            ],
          },
          {
            paramName: "signature",
            type: "array_of_strings",
            paramDescription: "The list of hex-encoded signatures authorizing this transaction.",
          },
          {
            paramName: "ret",
            type: "array_of_objects",
            childrenParamsType: "object",
            paramDescription: "The execution outcome of this transaction as recorded on-chain.",
            childrenParams: [
              {
                paramName: "contractRet",
                type: "string",
                paramDescription: "The result status of the contract execution (e.g. SUCCESS, REVERT, OUT_OF_ENERGY).",
              },
            ],
          },
          {
            paramName: "raw_data_hex",
            type: "string",
            paramDescription: "The hex-encoded serialized bytes of this transaction's raw_data.",
          },
          {
            paramName: "txID",
            type: "string",
            paramDescription: "The unique transaction hash (transaction ID) for this transaction, computed as the SHA256 of raw_data.",
          },
        ],
      },
];

const USE_CASES = [
  "Also available as GET",
  "Fetch a specific historical block for auditing or indexing",
];

const CONSTRAINTS = [
  "Returns an empty object if num exceeds the current chain height",
  "Also available under /walletsolidity/ for confirmed (solidified) data instead of the latest state",
];
