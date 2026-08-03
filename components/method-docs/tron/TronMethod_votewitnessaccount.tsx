  import TronMethod from "../../TronMethod/TronMethod";
import { GenericMethodPropsReplacing } from "../../GenericMethod/GenericMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import { DRPC_ENDPOINT_URL_TRON_PAID } from "./constants";

export function TronMethod_votewitnessaccount(props: GenericMethodPropsReplacing) {
  return (
    <TronMethod
      method="votewitnessaccount"
      network="tron"
      cu={20}
      description={"Creates a transaction to cast votes for one or more Super Representative candidates."}
      useCases={USE_CASES}
      constraints={CONSTRAINTS}
      codeSnippets={CODE_SNIPPETS}
      requestParams={REQUEST_PARAMS}
      requestParamsType="object"
      responseJSON={RESPONSE_JSON}
      responseParams={RESPONSE_PARAMS}
      responseParamsType="object"
      responseParamsDescription={
        "Creates a transaction to cast votes for one or more Super Representative candidates."
      }
      {...props}
    />
  );
}

const CODE_SNIPPETS: Array<CodeSnippetObject> = [
  {
    language: "shell",
    code: () => `curl --request POST \\
     --url ${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/votewitnessaccount \\
     --header 'accept: application/json' \\
     --header 'content-type: application/json' \\
     --data '{
  "owner_address": "41dd791d6b49e190062d650e6a23c575510d35f2f9",
  "votes": [
    {
      "vote_address": "419c7c7049d26108be0dcb5f78479c6ff27ba101d1",
      "vote_count": 100
    }
  ]
}'`,
  },
  {
    language: "js",
    code: () => `const url = '${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/votewitnessaccount';

const data = {
  "owner_address": "41dd791d6b49e190062d650e6a23c575510d35f2f9",
  "votes": [
    {
      "vote_address": "419c7c7049d26108be0dcb5f78479c6ff27ba101d1",
      "vote_count": 100
    }
  ]
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

const url = '${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/votewitnessaccount';

const data = {
  "owner_address": "41dd791d6b49e190062d650e6a23c575510d35f2f9",
  "votes": [
    {
      "vote_address": "419c7c7049d26108be0dcb5f78479c6ff27ba101d1",
      "vote_count": 100
    }
  ]
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
    url := "${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/votewitnessaccount"

    data := map[string]interface{}{
       "owner_address": "TZ4UXDV5ZhNW7fb2AMSbgfAEZ7hWsnYS2g",
       "votes": []interface{}{},
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

url = '${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/votewitnessaccount'

data = {
  "owner_address": "41dd791d6b49e190062d650e6a23c575510d35f2f9",
  "votes": [
    {
      "vote_address": "419c7c7049d26108be0dcb5f78479c6ff27ba101d1",
      "vote_count": 100
    }
  ]
}

response = requests.post(url, headers={'Content-Type': 'application/json'}, data=json.dumps(data))
res = response.json()

print(res)
`,
  },
];

const RESPONSE_JSON = `{
  "visible": false,
  "txID": "<computed from raw_data>",
  "raw_data": {
    "contract": [
      {
        "parameter": {
          "value": {
            "owner_address": "41dd791d6b49e190062d650e6a23c575510d35f2f9",
            "votes": [
              {
                "vote_address": "419c7c7049d26108be0dcb5f78479c6ff27ba101d1",
                "vote_count": 100
              }
            ]
          },
          "type_url": "type.googleapis.com/protocol.VoteWitnessContract"
        },
        "type": "VoteWitnessContract"
      }
    ],
    "ref_block_bytes": "<latest solidified block at construction time>",
    "ref_block_hash":  "<latest solidified block at construction time>",
    "expiration":      "<timestamp + 60_000>",
    "timestamp":       "<construction moment>"
  },
  "raw_data_hex": "<protobuf encoding of raw_data>"
}`;

const REQUEST_PARAMS: RequestParamProp = [
  {
    paramName: "owner_address",
    type: "string",
    paramDescription: "[Required] The voting account's address",
  },
  {
    paramName: "votes",
    type: "array_of_objects",
    paramDescription: "[Required] List of { vote_address, vote_count } pairs for each candidate voted for",
    childrenParamsType: "array_of_objects",
    childrenParams: [
      {
    paramName: "vote_address",
    type: "string",
    paramDescription: "SR candidate address",
  },
        {
    paramName: "vote_count",
    type: "int64",
    paramDescription: "Vote count (consumes TRON Power)",
  },
    ]
  },
  {
    paramName: "visible",
    type: "boolean",
    paramDescription: "When true, addresses/strings are human-readable; when false (default), hex-encoded",
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
          paramDescription: "The decoded fields of the contract — here, a request to cast TRON Power votes for one or more Super Representative candidates.",
          childrenParams: [
            {
              paramName: "owner_address",
              type: "string",
              paramDescription: "[Required] The address casting the votes, in hex format.",
            },
            {
              paramName: "votes",
              type: "array_of_objects",
              childrenParamsType: "object",
              paramDescription: "[Required] The list of witness candidates being voted for, along with the number of votes allocated to each.",
              childrenParams: [
                {
                  paramName: "vote_address",
                  type: "string",
                  paramDescription: "The address of the witness (SR candidate) receiving these votes, in hex format.",
                },
                {
                  paramName: "vote_count",
                  type: "integer",
                  paramDescription: "The number of votes being allocated to this witness candidate.",
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
      paramDescription: "The human-readable name of the contract type being executed (here, VoteWitnessContract).",
    },
  ],
},
    {
      paramName: "ref_block_bytes",
      type: "string",
      paramDescription: "The last two bytes of the reference block number, taken from the latest solidified block at the time the transaction was built, used for replay protection.",
    },
    {
      paramName: "ref_block_hash",
      type: "string",
      paramDescription: "The last eight bytes of the reference block's hash, taken from the same solidified block, paired with ref_block_bytes for replay protection.",
    },
    {
      paramName: "expiration",
      type: "integer",
      paramDescription: "Unix timestamp, in ms, after which this transaction is no longer valid; typically set to the construction timestamp plus 60,000 ms.",
    },
    {
      paramName: "timestamp",
      type: "integer",
      paramDescription: "Unix timestamp, in ms, marking the moment the transaction was constructed.",
    },
  ],
},
{
  paramName: "raw_data_hex",
  type: "string",
  paramDescription: "The hex-encoded protobuf serialization of raw_data, used as the actual payload to sign and broadcast.",
}
];

const USE_CASES = [
  "Cast votes for Super Representative candidates using staked TRX voting power",
  "Redistribute votes across multiple candidates in a single transaction",
];

const CONSTRAINTS = [
  "Total vote_count across all entries cannot exceed the account's available staked TRX voting power",
  "Casting new votes replaces the account's previous vote allocation entirely",
];
