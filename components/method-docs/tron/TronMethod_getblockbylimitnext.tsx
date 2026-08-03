import TronMethod from "../../TronMethod/TronMethod";
import { GenericMethodPropsReplacing } from "../../GenericMethod/GenericMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import { DRPC_ENDPOINT_URL_TRON_PAID } from "./constants";

export function TronMethod_getblockbylimitnext(props: GenericMethodPropsReplacing) {
  return (
    <TronMethod
      method="getblockbylimitnext"
      network="tron"
      cu={20}
      description={"Returns a range of blocks between a start and end block number."}
      useCases={USE_CASES}
      constraints={CONSTRAINTS}
      codeSnippets={CODE_SNIPPETS}
      requestParams={REQUEST_PARAMS}
      requestParamsType="object"
      responseJSON={RESPONSE_JSON}
      responseParams={RESPONSE_PARAMS}
      responseParamsType="object"
      responseParamsDescription={
        "Returns a range of blocks between a start and end block number."
      }
      {...props}
    />
  );
}

const CODE_SNIPPETS: Array<CodeSnippetObject> = [
  {
    language: "shell",
    code: () => `curl --request POST \\
     --url ${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/getblockbylimitnext \\
     --header 'accept: application/json' \\
     --header 'content-type: application/json' \\
     --data '{"startNum": 1, "endNum": 1}'`,
  },
  {
    language: "js",
    code: () => `const url = '${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/getblockbylimitnext';

const data = {"startNum": 1, "endNum": 1};

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

const url = '${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/getblockbylimitnext';

const data = {"startNum": 1, "endNum": 1};

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
    url := "${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/getblockbylimitnext"

    data := map[string]interface{}{
       "startNum": 1,
       "endNum": 1,
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

url = '${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/getblockbylimitnext'

data = {
    "startNum": 1,
    "endNum": 1
}

response = requests.post(url, headers={'Content-Type': 'application/json'}, data=json.dumps(data))
res = response.json()

print(res)
`,
  },
];

const RESPONSE_JSON = `{
    "block": [
        {
            "blockID": "00000000051014e80dbf5923643f955ca7b09253e84c13b59f19e347fb9ea95e",
            "block_header": {
                "raw_data": {
                    "timestamp": 1785490773000,
                    "txTrieRoot": "5360b488069bf1f3643c8d0504052aea2e5f7a71a51901cf69ebe57e950336fa",
                    "parentHash": "00000000051014e793a715af1fa52f8e4dfd1bed8aea07f41e11c9e831ef5022",
                    "number": 84940008,
                    "witness_address": "4114f2c09d3de3fe82a71960da65d4935a30b24e1f",
                    "version": 36
                },
                "witness_signature": "0949ffe081195961539746102b3d3a2faf6eeca51eb9a46f6bec6256514f71062cbfee9759885ed06aaf99caacb62940ec9d188dac0f036bb8679d841399f7fc01"
            },
            "transactions": [
                {
                    "raw_data": {
                        "ref_block_bytes": "14d4",
                        "ref_block_hash": "487b929e2595a20c",
                        "expiration": 1785490827000,
                        "contract": [
                            {
                                "parameter": {
                                    "value": {
                                        "asset_name": "31303035313235",
                                        "owner_address": "418bcb819886ee35957958e6207dc2b1fbc36b0292",
                                        "to_address": "41baa5d183152181460478ba83ad37926600e2190e",
                                        "amount": 2000
                                    },
                                    "type_url": "type.googleapis.com/protocol.TransferAssetContract"
                                },
                                "type": "TransferAssetContract"
                            }
                        ],
                        "timestamp": 1785490770138
                    },
                    "signature": [
                        "354bb9db00de8d27b2bb45f6fa5df2ebe39eba76316c430eebe56d5206ad89eb2e57b4c265bcf0335df6b9ac0c06fde111b78dfb23da115edb5a833ed794d43300"
                    ],
                    "ret": [
                        {
                            "contractRet": "SUCCESS"
                        }
                    ],
                    "raw_data_hex": "0a0214d42208487b929e2595a20c40f8cdafbcfb335a74080212700a32747970652e676f6f676c65617069732e636f6d2f70726f746f636f6c2e5472616e736665724173736574436f6e7472616374123a0a07313030353132351215418bcb819886ee35957958e6207dc2b1fbc36b02921a1541baa5d183152181460478ba83ad37926600e2190e20d00f70da91acbcfb33",
                    "txID": "357da69180f69b651a4a5a41c628e7969391a81823fb46c57a39bd617dd504f5"
                },
                {
                    "raw_data": {
                        "ref_block_bytes": "14e4",
                        "ref_block_hash": "7749eb97994e08b3",
                        "expiration": 1785490830050,
                        "contract": [
                            {
                                "parameter": {
                                    "value": {
                                        "owner_address": "4199a3cb64a17066fe19bfbce3dc5f0bb1d1220f55",
                                        "to_address": "41a61e8fa110c166d65372953c1c43556f56193ccf",
                                        "amount": 8
                                    },
                                    "type_url": "type.googleapis.com/protocol.TransferContract"
                                },
                                "type": "TransferContract"
                            }
                        ],
                        "timestamp": 1785490770050
                    },
                    "signature": [
                        "9af52264ae240a9e3c3b187c0afe6d713312c4631e4ed23ddf5c72f889cafb6359843081c606cf6cec62a6c77981d1b14a5f838bdc1a03bd88093199f6f5c29101"
                    ],
                    "ret": [
                        {
                            "contractRet": "SUCCESS"
                        }
                    ],
                    "raw_data_hex": "0a0214e422087749eb97994e08b340e2e5afbcfb335a65080112610a2d747970652e676f6f676c65617069732e636f6d2f70726f746f636f6c2e5472616e73666572436f6e747261637412300a154199a3cb64a17066fe19bfbce3dc5f0bb1d1220f55121541a61e8fa110c166d65372953c1c43556f56193ccf1808708291acbcfb33",
                    "txID": "3ec07911c77dcbdf7a75ae0e0486960add2993ac606c6e33fa92011f9f2665cb"
                },
                {
                    "raw_data": {
                        "ref_block_bytes": "14e4",
                        "ref_block_hash": "7749eb97994e08b3",
                        "expiration": 1785490829888,
                        "contract": [
                            {
                                "parameter": {
                                    "value": {
                                        "owner_address": "410681db96d49da815267e69d1ab76984ed66ab952",
                                        "to_address": "41e4b475e9ca3e4c215188c7cea6e2429f816d6276",
                                        "amount": 8
                                    },
                                    "type_url": "type.googleapis.com/protocol.TransferContract"
                                },
                                "type": "TransferContract"
                            }
                        ],
                        "timestamp": 1785490769888
                    },
                    "signature": [
                        "7ba5fe49a1464515e622f70bce4ae02ea7f4f1b3e838266690e2985049413a9b130933358ba2adf328c3d203ead3423093edba24934e73495981f8c3a0eb78c100"
                    ],
                    "ret": [
                        {
                            "contractRet": "SUCCESS"
                        }
                    ],
                    "raw_data_hex": "0a0214e422087749eb97994e08b340c0e4afbcfb335a65080112610a2d747970652e676f6f676c65617069732e636f6d2f70726f746f636f6c2e5472616e73666572436f6e747261637412300a15410681db96d49da815267e69d1ab76984ed66ab952121541e4b475e9ca3e4c215188c7cea6e2429f816d6276180870e08facbcfb33",
                    "txID": "122576c4aada13b821678903af504f016dacb367bb4c32bc0e4303d1bb481bde"
                },
                {
                    "raw_data": {
                        "ref_block_bytes": "14e4",
                        "ref_block_hash": "7749eb97994e08b3",
                        "expiration": 1785490830029,
                        "contract": [
                            {
                                "parameter": {
                                    "value": {
                                        "owner_address": "41163b21c9e73192ef31510167005ee7efe610ef05",
                                        "to_address": "4142be0d3b437d6184c503c14968017d822db6736d",
                                        "amount": 4
                                    },
                                    "type_url": "type.googleapis.com/protocol.TransferContract"
                                },
                                "type": "TransferContract"
                            }
                        ],
                        "timestamp": 1785490770029
                    },
                    "signature": [
                        "f3a6d7d809370bb66f3b843709014d0194cf3a1b88d113886e6ea322f154e2eb2027a4c5431fa3a897f2b9c9e6cb5d55510771bcd7b8968e770ca17eafaabee200"
                    ],
                    "ret": [
                        {
                            "contractRet": "SUCCESS"
                        }
                    ],
                    "raw_data_hex": "0a0214e422087749eb97994e08b340cde5afbcfb335a65080112610a2d747970652e676f6f676c65617069732e636f6d2f70726f746f636f6c2e5472616e73666572436f6e747261637412300a1541163b21c9e73192ef31510167005ee7efe610ef0512154142be0d3b437d6184c503c14968017d822db6736d180470ed90acbcfb33",
                    "txID": "db1bbe02b79e619bd77399accc0f8d7b22845be46cb2815d18f3a2ce6927bb8e"
                },
                {
                    "raw_data": {
                        "ref_block_bytes": "14e4",
                        "ref_block_hash": "7749eb97994e08b3",
                        "expiration": 1785490829998,
                        "contract": [
                            {
                                "parameter": {
                                    "value": {
                                        "owner_address": "41eecd73dd3d140f17fc88c643138c1774de585479",
                                        "to_address": "41a222f4512b6e289157a60e6105ce19fac4195e0d",
                                        "amount": 4
                                    },
                                    "type_url": "type.googleapis.com/protocol.TransferContract"
                                },
                                "type": "TransferContract"
                            }
                        ],
                        "timestamp": 1785490769998
                    },
                    "signature": [
                        "6a00378ce63869f38463bdcf647c090139f000e41f06a1edc5400d1ea6ec4c651700c4e877219694d0e370c9d0d3a948fd1117df727e82c25846502e525151ef00"
                    ],
                    "ret": [
                        {
                            "contractRet": "SUCCESS"
                        }
                    ],
                    "raw_data_hex": "0a0214e422087749eb97994e08b340aee5afbcfb335a65080112610a2d747970652e676f6f676c65617069732e636f6d2f70726f746f636f6c2e5472616e73666572436f6e747261637412300a1541eecd73dd3d140f17fc88c643138c1774de585479121541a222f4512b6e289157a60e6105ce19fac4195e0d180470ce90acbcfb33",
                    "txID": "982ff80258533daaa3a64545d4b8b1424d8516439ad930c97f527c9624fe96f0"
                },
                ...
            ]
        }`;

const REQUEST_PARAMS: RequestParamProp = [
  {
    paramName: "startNum",
    type: "integer",
    paramDescription: "[Required for GET] The starting block number (inclusive)",
  },
  {
    paramName: "endNum",
    type: "integer",
    paramDescription: "[Required for GET] The ending block number (exclusive)",
  },
  {
  paramName: "visible",
  type: "boolean",
  paramDescription: "Set to true to format addresses in Base58; set to false for hex format. (Default: false)",
},
];

const RESPONSE_PARAMS: ReqResParam[] = [
  {
  paramName: "block",
  type: "object",
  paramDescription: null,
  childrenParamsType: "object",
  childrenParams: [
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
  ],
},
];

const USE_CASES = [
  "Backfill a range of historical blocks for indexing",
];

const CONSTRAINTS = [
  "The range size (endNum - startNum) is capped by the node; large ranges may be rejected",
  "Also available under /walletsolidity/ for confirmed (solidified) data instead of the latest state",
];
