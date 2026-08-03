import TronMethod from "../../TronMethod/TronMethod";
import { GenericMethodPropsReplacing } from "../../GenericMethod/GenericMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import { DRPC_ENDPOINT_URL_TRON_PAID } from "./constants";

export function TronMethod_gettransactioninfobyblocknum(props: GenericMethodPropsReplacing) {
  return (
    <TronMethod
      method="gettransactioninfobyblocknum"
      network="tron"
      cu={20}
      description={"Returns execution results and receipts for all transactions in a specific block."}
      useCases={USE_CASES}
      constraints={CONSTRAINTS}
      codeSnippets={CODE_SNIPPETS}
      requestParams={REQUEST_PARAMS}
      requestParamsType="object"
      responseJSON={RESPONSE_JSON}
      responseParams={RESPONSE_PARAMS}
      responseParamsType="object"
      responseParamsDescription={
        "Returns execution results and receipts for all transactions in a specific block."
      }
      {...props}
    />
  );
}

const CODE_SNIPPETS: Array<CodeSnippetObject> = [
  {
    language: "shell",
    code: () => `curl --request POST \\
     --url ${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/gettransactioninfobyblocknum \\
     --header 'accept: application/json' \\
     --header 'content-type: application/json' \\
     --data '{"num": 1}'`,
  },
  {
    language: "js",
    code: () => `const url = '${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/gettransactioninfobyblocknum';

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

const url = '${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/gettransactioninfobyblocknum';

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
    url := "${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/gettransactioninfobyblocknum"

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

url = '${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/gettransactioninfobyblocknum'

data = {
    "num": 1
}

response = requests.post(url, headers={'Content-Type': 'application/json'}, data=json.dumps(data))
res = response.json()

print(res)
`,
  },
];

const RESPONSE_JSON = `[
  {
        "id": "f52df87da4991d1cd8333f48526b2f55375a22e2705e9eaf7edce2a12e53827b",
        "fee": 345000,
        "blockNumber": 84940364,
        "blockTimeStamp": 1785491841000,
        "contractResult": [
            "0000000000000000000000000000000000000000000000000000000000000000"
        ],
        "contract_address": "41a614f803b6fd780986a42c78ec9c7f77e6ded13c",
        "receipt": {
            "energy_usage": 64284,
            "origin_energy_usage": 1,
            "energy_usage_total": 64285,
            "net_fee": 345000,
            "result": "SUCCESS",
            "energy_penalty_total": 49635
        },
        "log": [
            {
                "address": "a614f803b6fd780986a42c78ec9c7f77e6ded13c",
                "topics": [
                    "ddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
                    "000000000000000000000000e5079969b8e71d3c8604a106819aef82cea0c55a",
                    "000000000000000000000000118f7b4382bea375ee420f1b211a4619f3ba78ad"
                ],
                "data": "000000000000000000000000000000000000000000000000000000001dcd6500"
            }
        ]
    },
    {
        "id": "e32493469c2ab6f31684c0e5a88cf409329fd9d7176baed4763d294d1c99b1f0",
        "fee": 345000,
        "blockNumber": 84940364,
        "blockTimeStamp": 1785491841000,
        "contractResult": [
            "0000000000000000000000000000000000000000000000000000000000000000"
        ],
        "contract_address": "41a614f803b6fd780986a42c78ec9c7f77e6ded13c",
        "receipt": {
            "energy_usage": 64285,
            "energy_usage_total": 64285,
            "net_fee": 345000,
            "result": "SUCCESS",
            "energy_penalty_total": 49635
        },
        "log": [
            {
                "address": "a614f803b6fd780986a42c78ec9c7f77e6ded13c",
                "topics": [
                    "ddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
                    "000000000000000000000000cf60b190fb092e76a9093ffc6479c371dcdc8b56",
                    "0000000000000000000000009dca7b9b1acfa87b75a78adb23e7c51dce8620eb"
                ],
                "data": "0000000000000000000000000000000000000000000000000000000561878d70"
            }
        ]
    },
    {
        "id": "6c4be83befb08d44e0975662d0b8d60078f8e4e46682f050a80c1599e18b8515",
        "blockNumber": 84940364,
        "blockTimeStamp": 1785491841000,
        "contractResult": [
            ""
        ],
        "receipt": {
            "net_usage": 283
        }
    },
    {
        "id": "e2178e75875cb146707ae79e0924140038333af5412c06c607520e1c57af806a",
        "fee": 1000000,
        "blockNumber": 84940364,
        "blockTimeStamp": 1785491841000,
        "contractResult": [
            ""
        ],
        "receipt": {
            "net_usage": 271
        }
    },
    {
        "id": "fa59d11e48a268cfe1f57889f7e54ecb316a3c0aa12b56989c312395bab83cd3",
        "blockNumber": 84940364,
        "blockTimeStamp": 1785491841000,
        "contractResult": [
            "0000000000000000000000000000000000000000000000000000000000000000"
        ],
        "contract_address": "41a614f803b6fd780986a42c78ec9c7f77e6ded13c",
        "receipt": {
            "energy_usage": 130285,
            "energy_usage_total": 130285,
            "net_usage": 345,
            "result": "SUCCESS",
            "energy_penalty_total": 100635
        },
        "log": [
            {
                "address": "a614f803b6fd780986a42c78ec9c7f77e6ded13c",
                "topics": [
                    "ddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
                    "000000000000000000000000f2014f94e813937fe41ebd32943134c4ec49a921",
                    "000000000000000000000000627e11e37f1265c071d8cb4d27c1cc58eed9b4b8"
                ],
                "data": "00000000000000000000000000000000000000000000000000000000102043f0"
            }
        ]
    },
    {
        "id": "90e42a06a34eeb53fc511e789033090285fbcbc575a35981c60dc3540c904dbb",
        "blockNumber": 84940364,
        "blockTimeStamp": 1785491841000,
        "contractResult": [
            "0000000000000000000000000000000000000000000000000000000000000000"
        ],
        "contract_address": "41a614f803b6fd780986a42c78ec9c7f77e6ded13c",
        "receipt": {
            "energy_usage": 64285,
            "energy_usage_total": 64285,
            "net_usage": 345,
            "result": "SUCCESS",
            "energy_penalty_total": 49635
        },
        "log": [
            {
                "address": "a614f803b6fd780986a42c78ec9c7f77e6ded13c",
                "topics": [
                    "ddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
                    "000000000000000000000000e96b2785f859c87ff0eb8086d19fa3a4574e1281",
                    "000000000000000000000000228624578db210e975d3f4aabdf70e420e5190c0"
                ],
                "data": "0000000000000000000000000000000000000000000000000000000001312d00"
            }
        ]
    },
    ...
]`;

const REQUEST_PARAMS: RequestParamProp = [
  {
    paramName: "num",
    type: "integer",
    paramDescription: "[Required for GET] The block number to query",
  },
  {
  paramName: "visible",
  type: "boolean",
  paramDescription: "Set to true to format addresses in Base58; set to false for hex format. (Default: false)",
},
];

const RESPONSE_PARAMS: ReqResParam[] = [
  {
  paramName: "id",
  type: "string",
  paramDescription: "The unique transaction hash (transaction ID) this receipt belongs to.",
},
{
  paramName: "fee",
  type: "integer",
  paramDescription: "The total TRX fee, in sun, burned for this transaction (bandwidth and/or Energy overage combined).",
},
{
  paramName: "blockNumber",
  type: "integer",
  paramDescription: "The height of the block in which this transaction was confirmed.",
},
{
  paramName: "blockTimeStamp",
  type: "integer",
  paramDescription: "Unix timestamp, in ms, of the block in which this transaction was confirmed.",
},
{
  paramName: "contractResult",
  type: "array_of_strings",
  paramDescription: "The hex-encoded return value(s) of the smart contract call; empty string if the transaction wasn't a contract call.",
},
{
  paramName: "contract_address",
  type: "string",
  paramDescription: "The address of the smart contract invoked by this transaction, in hex format; omitted for non-contract transactions.",
},
{
  paramName: "receipt",
  type: "object",
  childrenParamsType: "object",
  paramDescription: "The resource consumption and execution outcome recorded for this transaction.",
  childrenParams: [
    {
      paramName: "energy_usage",
      type: "integer",
      paramDescription: "The amount of Energy consumed from the caller's own staked or delegated quota.",
    },
    {
      paramName: "origin_energy_usage",
      type: "integer",
      paramDescription: "The amount of Energy covered by the contract deployer's allotment, per the contract's configured user-pays percentage.",
    },
    {
      paramName: "energy_usage_total",
      type: "integer",
      paramDescription: "The total amount of Energy consumed by this call, combining the caller's and the contract owner's shares.",
    },
    {
      paramName: "net_fee",
      type: "integer",
      paramDescription: "The TRX fee, in sun, burned for bandwidth that exceeded the account's free/staked bandwidth quota.",
    },
    {
      paramName: "net_usage",
      type: "integer",
      paramDescription: "The amount of bandwidth consumed by this transaction.",
    },
    {
      paramName: "result",
      type: "string",
      paramDescription: "The execution outcome of the contract call (e.g. SUCCESS, REVERT, OUT_OF_ENERGY); omitted for simple transfers.",
    },
    {
      paramName: "energy_penalty_total",
      type: "integer",
      paramDescription: "The extra Energy charged as a penalty, applied when contract calls exceed certain usage thresholds.",
    },
  ],
},
{
  paramName: "log",
  type: "array_of_objects",
  childrenParamsType: "object",
  paramDescription: "The list of event logs emitted by the smart contract during execution.",
  childrenParams: [
    {
      paramName: "address",
      type: "string",
      paramDescription: "The address of the contract that emitted this log entry, in hex format (without the leading 0x41 prefix).",
    },
    {
      paramName: "topics",
      type: "array_of_strings",
      paramDescription: "The indexed event parameters, where the first entry is the event signature hash and the rest are indexed argument values.",
    },
    {
      paramName: "data",
      type: "string",
      paramDescription: "The hex-encoded ABI-encoded non-indexed event parameters.",
    },
  ],
}
];

const USE_CASES = [
  "Also available as GET",
  "Audit total fees burned within a specific block",
];

const CONSTRAINTS = [
  "Returns an empty array for blocks with no transactions",
  "Also available under /walletsolidity/ for confirmed (solidified) data instead of the latest state",
];
