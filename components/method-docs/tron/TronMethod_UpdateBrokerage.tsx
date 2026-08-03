import TronMethod from "../../TronMethod/TronMethod";
import { GenericMethodPropsReplacing } from "../../GenericMethod/GenericMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import { DRPC_ENDPOINT_URL_TRON_PAID } from "./constants";

export function TronMethod_updateBrokerage(props: GenericMethodPropsReplacing) {
  return (
    <TronMethod
      method="updateBrokerage"
      network="tron"
      cu={20}
      description={"Creates a transaction to update the brokerage ratio a witness keeps from voting rewards."}
      useCases={USE_CASES}
      constraints={CONSTRAINTS}
      codeSnippets={CODE_SNIPPETS}
      requestParams={REQUEST_PARAMS}
      requestParamsType="object"
      responseJSON={RESPONSE_JSON}
      responseParams={RESPONSE_PARAMS}
      responseParamsType="object"
      responseParamsDescription={
        "Creates a transaction to update the brokerage ratio a witness keeps from voting rewards."
      }
      {...props}
    />
  );
}

const CODE_SNIPPETS: Array<CodeSnippetObject> = [
  {
    language: "shell",
    code: () => `curl --request POST \\
     --url ${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/updateBrokerage \\
     --header 'accept: application/json' \\
     --header 'content-type: application/json' \\
     --data '{"owner_address": "TZ4UXDV5ZhNW7fb2AMSbgfAEZ7hWsnYS2g", "brokerage": 1, "visible": true}'`,
  },
  {
    language: "js",
    code: () => `const url = '${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/updateBrokerage';

const data = {"owner_address": "TZ4UXDV5ZhNW7fb2AMSbgfAEZ7hWsnYS2g", "brokerage": 1, "visible": true};

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

const url = '${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/updateBrokerage';

const data = {"owner_address": "TZ4UXDV5ZhNW7fb2AMSbgfAEZ7hWsnYS2g", "brokerage": 1, "visible": true};

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
    url := "${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/updateBrokerage"

    data := map[string]interface{}{
       "owner_address": "TZ4UXDV5ZhNW7fb2AMSbgfAEZ7hWsnYS2g",
       "brokerage": 1,
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

url = '${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/updateBrokerage'

data = {
    "owner_address": "TZ4UXDV5ZhNW7fb2AMSbgfAEZ7hWsnYS2g",
    "brokerage": 1,
    "visible": True
}

response = requests.post(url, headers={'Content-Type': 'application/json'}, data=json.dumps(data))
res = response.json()

print(res)
`,
  },
];

const RESPONSE_JSON = `{
  "visible": false,
  "txID": "63732aa3bc1e95227af2d09782d430f7032ee9500bf035d4fd82001f50744745",
  "raw_data": {
    "contract": [
      {
        "parameter": {
          "value": {
            "brokerage": 20,
            "owner_address": "419c7c7049d26108be0dcb5f78479c6ff27ba101d1"
          },
          "type_url": "type.googleapis.com/protocol.UpdateBrokerageContract"
        },
        "type": "UpdateBrokerageContract"
      }
    ],
    "ref_block_bytes": "27c9",
    "ref_block_hash": "c22bba19ac9d6cf3",
    "expiration": 1777446471000,
    "timestamp": 1777446411781
  },
  "raw_data_hex": "0a0227c92208c22bba19ac9d6cf340d88ac3c0dd335a55083112510a34747970652e676f6f676c65617069732e636f6d2f70726f746f636f6c2e55706461746542726f6b6572616765436f6e747261637412190a15419c7c7049d26108be0dcb5f78479c6ff27ba101d110147085bcbfc0dd33"
}`;

const REQUEST_PARAMS: RequestParamProp = [
  {
    paramName: "owner_address",
    type: "string",
    paramDescription: "[Required] The witness account's address",
  },
  {
    paramName: "brokerage",
    type: "integer",
    paramDescription: " New brokerage percentage (0-100)",
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
  paramDescription: "[Optional] Indicates whether addresses in this transaction are represented in base58 format (true) or hex format (false).",
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
              paramDescription: "The decoded fields of the contract — here, a request by a witness to change their brokerage (commission) rate.",
              childrenParams: [
                {
                  paramName: "brokerage",
                  type: "integer",
                  paramDescription: "[Required] The new brokerage percentage the witness will keep from block-production rewards before distributing the remainder to voters.",
                },
                {
                  paramName: "owner_address",
                  type: "string",
                  paramDescription: "The address of the witness updating their brokerage rate, in hex format.",
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
          paramDescription: "The human-readable name of the contract type being executed (here, UpdateBrokerageContract).",
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
}
];

const USE_CASES = [
  "Adjust the commission a Super Representative keeps from its voters' rewards",
];

const CONSTRAINTS = [
  "Can only be changed once per 24-hour period",
  "Only the witness's own owner_address can update its brokerage ratio",
];
