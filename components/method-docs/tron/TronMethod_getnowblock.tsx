import TronMethod from "../../TronMethod/TronMethod";
import { GenericMethodPropsReplacing } from "../../GenericMethod/GenericMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import { DRPC_ENDPOINT_URL_TRON_PAID } from "./constants";

export function TronMethod_getnowblock(props: GenericMethodPropsReplacing) {
  return (
    <TronMethod
      method="getnowblock"
      network="tron"
      cu={20}
      description={"Returns the most recent block on the Tron blockchain."}
      useCases={USE_CASES}
      constraints={CONSTRAINTS}
      codeSnippets={CODE_SNIPPETS}
      requestParams={REQUEST_PARAMS}
      requestParamsType="none"
      responseJSON={RESPONSE_JSON}
      responseParams={RESPONSE_PARAMS}
      responseParamsType="object"
      responseParamsDescription={
        "Returns the most recent block on the Tron blockchain."
      }
      {...props}
    />
  );
}

const CODE_SNIPPETS: Array<CodeSnippetObject> = [
  {
    language: "shell",
    code: () => `curl --request POST \\
     --url ${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/getnowblock \\
     --header 'accept: application/json' \\
     --header 'content-type: application/json' \\
     --data '{}'`,
  },
  {
    language: "js",
    code: () => `const url = '${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/getnowblock';

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

const url = '${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/getnowblock';

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
    url := "${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/getnowblock"

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

url = '${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/getnowblock'

data = {}

response = requests.post(url, headers={'Content-Type': 'application/json'}, data=json.dumps(data))
res = response.json()

print(res)
`,
  },
];

const RESPONSE_JSON = `{
    "blockID": "00000000051013135cc2a882717c7656a4c53c2e7158a00913540ab397e1f19c",
    "block_header": {
        "raw_data": {
            "timestamp": 1785489366000,
            "txTrieRoot": "642d767c3bdee7e3a025354ce57c21190c6e69dd9a4f7c74942d16795faf2407",
            "parentHash": "0000000005101312abd068e357ca0d0a882e402f7e72170da1896136075f8736",
            "number": 84939539,
            "witness_address": "413ce9a6b8ad08e5bb13b57a9d3782946a5efdb36d",
            "version": 36
        },
        "witness_signature": "ddb32a0a2cf8fd9adb30679d8756dde0f1af73e4671d2de747ca9bcf93dc002170753d84790f4903e652aa7cf1d76f11686f0a9cb8e2a065020ecadc87e9cede00"
    },
    "transactions": [
        {
            "raw_data": {
                "ref_block_bytes": "12ff",
                "ref_block_hash": "b9534eaebfeb259e",
                "expiration": 1785489420000,
                "contract": [
                    {
                        "parameter": {
                            "value": {
                                "owner_address": "418d01cf0c9bfd935042c62cdf3a5392cc0611e79f",
                                "contract_address": "41a614f803b6fd780986a42c78ec9c7f77e6ded13c",
                                "data": "a9059cbb0000000000000000000000413f46c7ade0f6b73b8fc1b4a143855394c405762e0000000000000000000000000000000000000000000000000000000002625a00"
                            },
                            "type_url": "type.googleapis.com/protocol.TriggerSmartContract"
                        },
                        "type": "TriggerSmartContract"
                    }
                ],
                "timestamp": 1785489362909,
                "fee_limit": 30000000
            },
            "signature": [
                "ed2c219265757131bd18a8349a9a2d151c8b00bf897479197b0bcebd688fe1fb1657600e312b8a3383168d4f4b8abe20ecf55ab632f3636cdbd03204eb2f986c00"
            ],
            "ret": [
                {
                    "contractRet": "SUCCESS"
                }
            ],
            "raw_data_hex": "0a0212ff2208b9534eaebfeb259e40e0ddd9bbfb335aae01081f12a9010a31747970652e676f6f676c65617069732e636f6d2f70726f746f636f6c2e54726967676572536d617274436f6e747261637412740a15418d01cf0c9bfd935042c62cdf3a5392cc0611e79f121541a614f803b6fd780986a42c78ec9c7f77e6ded13c2244a9059cbb0000000000000000000000413f46c7ade0f6b73b8fc1b4a143855394c405762e0000000000000000000000000000000000000000000000000000000002625a0070dd9fd6bbfb3390018087a70e",
            "txID": "72be8976354fa98c3e753aad8ee2753d0e7c9a5bc99c45a08a79c19160b5d0cd"
        },
        {
            "raw_data": {
                "ref_block_bytes": "12fb",
                "ref_block_hash": "c024c8dc0c8b711d",
                "expiration": 1785490246303,
                "contract": [
                    {
                        "parameter": {
                            "value": {
                                "owner_address": "41f9cc582480d3158adea4793c7d69baa1c86b09e0",
                                "contract_address": "41a614f803b6fd780986a42c78ec9c7f77e6ded13c",
                                "data": "a9059cbb0000000000000000000000411d28f0451d3fc1c8e59402c821a63d7f362e696f0000000000000000000000000000000000000000000000000000000005f5e100"
                            },
                            "type_url": "type.googleapis.com/protocol.TriggerSmartContract"
                        },
                        "type": "TriggerSmartContract"
                    }
                ],
                "timestamp": 1785489346303,
                "fee_limit": 100000000
            },
            "signature": [
                "d52568cb72a5cfafa2131bcfd7b743eb6484c6611b340cd68fb952808abee24f15da9af03913d809e6482e4be85eb65fb3f9ae6486292a6200cd353c14df681c01"
            ],
            "ret": [
                {
                    "contractRet": "SUCCESS"
                }
            ],
            "raw_data_hex": "0a0212fb2208c024c8dc0c8b711d409f958cbcfb335aae01081f12a9010a31747970652e676f6f676c65617069732e636f6d2f70726f746f636f6c2e54726967676572536d617274436f6e747261637412740a1541f9cc582480d3158adea4793c7d69baa1c86b09e0121541a614f803b6fd780986a42c78ec9c7f77e6ded13c2244a9059cbb0000000000000000000000411d28f0451d3fc1c8e59402c821a63d7f362e696f0000000000000000000000000000000000000000000000000000000005f5e10070ff9dd5bbfb33900180c2d72f",
            "txID": "a1af302e7cc604b06f4b3daf0ce7df357beb7c56e416757924d8eeee543522e7"
        }
    ]
}
`;

const REQUEST_PARAMS: RequestParamProp = [
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
  "Anchor a new transaction's ref_block_bytes and ref_block_hash",
];

const CONSTRAINTS = [
  "Node must be synchronized with the network",
  "walletsolidity variant returns only the last solidified (confirmed) block",
];
