import TronMethod from "../../TronMethod/TronMethod";
import { GenericMethodPropsReplacing } from "../../GenericMethod/GenericMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import { DRPC_ENDPOINT_URL_TRON_PAID } from "./constants";

export function TronMethod_broadcasttransaction(props: GenericMethodPropsReplacing) {
  return (
    <TronMethod
      method="broadcasttransaction"
      network="tron"
      cu={20}
      description={"Broadcasts a signed transaction to the Tron network."}
      useCases={USE_CASES}
      constraints={CONSTRAINTS}
      codeSnippets={CODE_SNIPPETS}
      requestParams={REQUEST_PARAMS}
      requestParamsType="object"
      responseJSON={RESPONSE_JSON}
      responseParams={RESPONSE_PARAMS}
      responseParamsType="object"
      responseParamsDescription={
        "Broadcasts a signed transaction to the Tron network."
      }
      {...props}
    />
  );
}

const CODE_SNIPPETS: Array<CodeSnippetObject> = [
  {
    language: "shell",
    code: () => `curl --request POST \\
     --url ${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/broadcasttransaction \\
     --header 'accept: application/json' \\
     --header 'content-type: application/json' \\
     --data '{
  "raw_data": {
    "contract": [ one contract],
    "ref_block_bytes": "c145",
    "ref_block_hash": "c56bd8a3b3341d9d",
    "expiration": 1646796363000,
    "data": "74657374",
    "timestamp": 1646796304152,
    "fee_limit": 10000000000
  },
  "signature": [
    "47b1f77b...8b0a1800"
  ]
}'`,
  },
  {
    language: "js",
    code: () => `const url = '${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/broadcasttransaction';

const data = {
  "raw_data": {
    "contract": [ one contract],
    "ref_block_bytes": "c145",
    "ref_block_hash": "c56bd8a3b3341d9d",
    "expiration": 1646796363000,
    "data": "74657374",
    "timestamp": 1646796304152,
    "fee_limit": 10000000000
  },
  "signature": [
    "47b1f77b...8b0a1800"
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

const url = '${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/broadcasttransaction';

const data = {
  "raw_data": {
    "contract": [ one contract],
    "ref_block_bytes": "c145",
    "ref_block_hash": "c56bd8a3b3341d9d",
    "expiration": 1646796363000,
    "data": "74657374",
    "timestamp": 1646796304152,
    "fee_limit": 10000000000
  },
  "signature": [
    "47b1f77b...8b0a1800"
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
    url := "${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/broadcasttransaction"

    data := map[string]interface{}{
       "raw_data": map[string]interface{}{},
       "raw_data_hex": "example",
       "signature": []interface{}{},
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

url = '${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/broadcasttransaction'

data = {
  "raw_data": {
    "contract": [ one contract],
    "ref_block_bytes": "c145",
    "ref_block_hash": "c56bd8a3b3341d9d",
    "expiration": 1646796363000,
    "data": "74657374",
    "timestamp": 1646796304152,
    "fee_limit": 10000000000
  },
  "signature": [
    "47b1f77b...8b0a1800"
  ]
}

response = requests.post(url, headers={'Content-Type': 'application/json'}, data=json.dumps(data))
res = response.json()

print(res)
`,
  },
];

const RESPONSE_JSON = `{
  "result": true,
  "txid": "f3c9aa2b4d122979f92a658be1804560f949a89c8b5d30e15b2d003712d72c92"
}`;

const REQUEST_PARAMS: RequestParamProp = [
  {
  paramName: "raw_data",
  type: "object",
  childrenParamsType: "object",
  paramDescription: "The unsigned transaction body containing the contract instruction and blockchain reference data.",
  childrenParams: [
    {
      paramName: "contract",
      type: "array_of_objects",
      paramDescription: "The list of contract instructions to be executed by this transaction (in most transactions, a single-element array).",
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
      paramName: "data",
      type: "string",
      paramDescription: "Hex-encoded optional memo/note attached to the transaction (up to 512 bytes).",
    },
    {
      paramName: "timestamp",
      type: "integer",
      paramDescription: "Unix timestamp, in ms, marking when the transaction was created/signed by the client.",
    },
    {
      paramName: "fee_limit",
      type: "integer",
      paramDescription: "The maximum amount of TRX, in sun, the sender is willing to spend on Energy fees for this transaction (required for contract calls).",
    },
  ],
},
{
  paramName: "signature",
  type: "array_of_strings",
  paramDescription: "The list of hex-encoded signatures authorizing this transaction, one entry per required signing key.",
}
];

const RESPONSE_PARAMS: ReqResParam[] = [
  {
    paramName: "result",
    type: "boolean",
    paramDescription: "Whether the node accepted the transaction into its pending pool",
  },
  {
    paramName: "txid",
    type: "string",
    paramDescription: "The transaction hash, usable with gettransactionbyid / gettransactioninfobyid",
  },
  {
    paramName: "code",
    type: "string",
    paramDescription: "Present only on failure, e.g. SIGERROR, TRANSACTION_EXPIRATION_ERROR, DUP_TRANSACTION_ERROR",
  },
  {
    paramName: "message",
    type: "string",
    paramDescription: "Present only on failure, a hex-encoded explanation of the error",
  },
];

const USE_CASES = [
  "Submit a signed TRX or TRC10/TRC20 transfer to the network",
  "Complete a smart contract call after local or offline signing",
];

const CONSTRAINTS = [
  "raw_data_hex must exactly match the bytes that were signed",
  "Transactions expire (default ~60 seconds) and must be broadcast before expiration",
];
