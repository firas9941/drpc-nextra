import TronMethod from "../../TronMethod/TronMethod";
import { GenericMethodPropsReplacing } from "../../GenericMethod/GenericMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import { DRPC_ENDPOINT_URL_TRON_PAID } from "./constants";

export function TronMethod_getblock(props: GenericMethodPropsReplacing) {
  return (
    <TronMethod
      method="getblock"
      network="tron"
      cu={20}
      description={"Returns block details by block number, block hash, or the latest block if no parameter is given."}
      useCases={USE_CASES}
      constraints={CONSTRAINTS}
      codeSnippets={CODE_SNIPPETS}
      requestParams={REQUEST_PARAMS}
      requestParamsType="object"
      responseJSON={RESPONSE_JSON}
      responseParams={RESPONSE_PARAMS}
      responseParamsType="object"
      responseParamsDescription={
        "Returns block details by block number, block hash, or the latest block if no parameter is given."
      }
      {...props}
    />
  );
}

const CODE_SNIPPETS: Array<CodeSnippetObject> = [
  {
    language: "shell",
    code: () => `curl --request POST \\
     --url ${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/getblock \\
     --header 'accept: application/json' \\
     --header 'content-type: application/json' \\
     --data '{"id_or_num": "example", "detail": true, "visible": true}'`,
  },
  {
    language: "js",
    code: () => `const url = '${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/getblock';

const data = {"id_or_num": "example", "detail": true, "visible": true};

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

const url = '${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/getblock';

const data = {"id_or_num": "example", "detail": true, "visible": true};

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
    url := "${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/getblock"

    data := map[string]interface{}{
       "id_or_num": "example",
       "detail": true,
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

url = '${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/getblock'

data = {
    "id_or_num": "example",
    "detail": True,
    "visible": True
}

response = requests.post(url, headers={'Content-Type': 'application/json'}, data=json.dumps(data))
res = response.json()

print(res)
`,
  },
];

const RESPONSE_JSON = `{
  "blockID": "00000000000000c86d2473411771f83db5e314c01bc8f8cf0dc2f8892be6fd7f",
  "block_header": {
    "raw_data": {
      "number": 200,
      "txTrieRoot": "0000000000000000000000000000000000000000000000000000000000000000",
      "witness_address": "41f16412b9a17ee9408646e2a21e16478f72ed1e95",
      "parentHash": "00000000000000c7d4d47132f21fd0b74e2f8bcb0c2e9130f7cab35b5d38af9f",
      "timestamp": 1575594618000
    },
    "witness_signature": "97ecda5b130600d18304e02f7fd5ab9d115c5ec9c0e312c8c6fe83939771bb85505fafee598541dc902b1a7b8ca2735c83a12e640203ed4b8529d47ce4f413df00"
  }
  "transactions": [
  ...
  ],
}`;

const REQUEST_PARAMS: RequestParamProp = [
  {
    paramName: "id_or_num",
    type: "string",
    paramDescription: "Block hash or block number to look up. Omit to get the latest block",
  },
  {
    paramName: "detail",
    type: "boolean",
    paramDescription: "When true, includes full transaction details instead of just hashes",
  },
  {
    paramName: "visible",
    type: "boolean",
    paramDescription: "When true, addresses are base58check strings; when false (default), hex strings",
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
  "Fetch the latest block without knowing its number in advance",
];

const CONSTRAINTS = [
  "Omitting id_or_num returns the latest block, equivalent to getnowblock",
  "Also available under /walletsolidity/ for confirmed (solidified) data instead of the latest state",
];
