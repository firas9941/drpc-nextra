import TronMethod from "../../TronMethod/TronMethod";
import { GenericMethodPropsReplacing } from "../../GenericMethod/GenericMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import { DRPC_ENDPOINT_URL_TRON_PAID } from "./constants";

export function TronMethod_gettransactionbyid(props: GenericMethodPropsReplacing) {
  return (
    <TronMethod
      method="gettransactionbyid"
      network="tron"
      cu={20}
      description={"Returns transaction details for a given transaction hash (ID)."}
      useCases={USE_CASES}
      constraints={CONSTRAINTS}
      codeSnippets={CODE_SNIPPETS}
      requestParams={REQUEST_PARAMS}
      requestParamsType="object"
      responseJSON={RESPONSE_JSON}
      responseParams={RESPONSE_PARAMS}
      responseParamsType="object"
      responseParamsDescription={
        "Returns transaction details for a given transaction hash (ID)."
      }
      {...props}
    />
  );
}

const CODE_SNIPPETS: Array<CodeSnippetObject> = [
  {
    language: "shell",
    code: () => `curl --request POST \\
     --url ${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/gettransactionbyid \\
     --header 'accept: application/json' \\
     --header 'content-type: application/json' \\
     --data '{"value": "example"}'`,
  },
  {
    language: "js",
    code: () => `const url = '${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/gettransactionbyid';

const data = {"value": "example"};

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

const url = '${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/gettransactionbyid';

const data = {"value": "example"};

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
    url := "${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/gettransactionbyid"

    data := map[string]interface{}{
       "value": "example",
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

url = '${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/gettransactionbyid'

data = {
    "value": "example"
}

response = requests.post(url, headers={'Content-Type': 'application/json'}, data=json.dumps(data))
res = response.json()

print(res)
`,
  },
];

const RESPONSE_JSON = `{  
   "ret":[  
      {  
         "contractRet":"SUCCESS"
      }
   ],
   "signature":[  
      "ffbf691a89d95f6ad8175611c7d334c8159b95ff9c1e83872e7670103b185e85faf0a394b23d99581385d38038ab5c4684759c864a5621009f6e95da0a5feab501"
   ],
   "txID":"d0807adb3c5412aa150787b944c96ee898c997debdc27e2f6a643c771edb5933",
   "raw_data":{  
      "contract":[  
         {  
            "parameter":{  
               "value":{  
                  "amount":16,
                  "asset_name":"54726f6e696373",
                  "owner_address":"414a5fe0179f2dd9c900194e63d661863cd0ade7b0",
                  "to_address":"41718de6b323652d1257437ace160c4f4198aae4e1"
               },
               "type_url":"type.googleapis.com/protocol.TransferAssetContract"
            },
            "type":"TransferAssetContract"
         }
      ],
      "ref_block_bytes":"6bdd",
      "ref_block_hash":"1616edaf3a57fe19",
      "expiration":1546455678000,
      "timestamp":1546455620175
   }`;

const REQUEST_PARAMS: RequestParamProp = [
  {
    paramName: "value",
    type: "string",
    paramDescription: "[Required for GET] The transaction hash (ID) to look up",
  },
    {
  paramName: "visible",
  type: "boolean",
  paramDescription: "Set to true to format addresses in Base58; set to false for hex format. (Default: false)",
},
];

const RESPONSE_PARAMS: ReqResParam[] = [
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
  paramName: "signature",
  type: "array_of_strings",
  paramDescription: "The list of hex-encoded signatures authorizing this transaction.",
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
              paramDescription: "The decoded fields of the contract — here, a TRC10 asset transfer.",
              childrenParams: [
                {
                  paramName: "amount",
                  type: "integer",
                  paramDescription: "The quantity of the TRC10 token being transferred, in its smallest unit.",
                },
                {
                  paramName: "asset_name",
                  type: "string",
                  paramDescription: "The hex-encoded identifier of the TRC10 token being transferred.",
                },
                {
                  paramName: "owner_address",
                  type: "string",
                  paramDescription: "The address sending the TRC10 token, in hex format.",
                },
                {
                  paramName: "to_address",
                  type: "string",
                  paramDescription: "The address receiving the TRC10 token, in hex format.",
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
          paramDescription: "The human-readable name of the contract type being executed (here, TransferAssetContract).",
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
}
];

const USE_CASES = [
  "Also available as GET",
  "Verify a transaction's contract type and parameters before displaying it",
];

const CONSTRAINTS = [
  "Returns an empty object if the transaction hasn't been broadcast or isn't yet indexed",
  "Does not include execution receipts/logs; use gettransactioninfobyid for those",
  "Also available under /walletsolidity/ for confirmed (solidified) data instead of the latest state",
];
