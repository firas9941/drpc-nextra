import TronMethod from "../../TronMethod/TronMethod";
import { GenericMethodPropsReplacing } from "../../GenericMethod/GenericMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import { DRPC_ENDPOINT_URL_TRON_PAID } from "./constants";

export function TronMethod_getsignweight(props: GenericMethodPropsReplacing) {
  return (
    <TronMethod
      method="getsignweight"
      network="tron"
      cu={20}
      description={"Returns the current signature weight and threshold status of a multi-signature transaction."}
      useCases={USE_CASES}
      constraints={CONSTRAINTS}
      codeSnippets={CODE_SNIPPETS}
      requestParams={REQUEST_PARAMS}
      requestParamsType="object"
      responseJSON={RESPONSE_JSON}
      responseParams={RESPONSE_PARAMS}
      responseParamsType="object"
      responseParamsDescription={
        "Returns the current signature weight and threshold status of a multi-signature transaction."
      }
      {...props}
    />
  );
}

const CODE_SNIPPETS: Array<CodeSnippetObject> = [
  {
    language: "shell",
    code: () => `curl --request POST \\
     --url ${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/getsignweight \\
     --header 'accept: application/json' \\
     --header 'content-type: application/json' \\
     --data '{
  "visible": true,
  "signature": [
    "1fd210045f5bdcf375cd478cf46ff735f132281b990bc199acf1952bd438929d1d03e12de5ea7dcb89cff5b8cfc5d161661a5c1fe6a6a2422edb313b9139075300"
  ],
  "txID": "ee188aaf5cf78729d2d14d4db698126da2d75ef78a43837dafd6e6f591d103a2",
  "raw_data": {
    "contract": [
      {
        "parameter": {
          "value": {
            "amount": 125000000,
            "owner_address": "TN9RRaXkCFtTXRso2GdTZxSxxwufzxLQPP",
            "to_address": "TTSFjEG3Lu9WkHdp4JrWYhbGP6K1REqnGQ"
          },
          "type_url": "type.googleapis.com/protocol.TransferContract"
        },
        "type": "TransferContract"
      }
    ],
    "ref_block_bytes": "c251",
    "ref_block_hash": "5c685c92bf035e72",
    "expiration": 1578299967000,
    "timestamp": 1578299909600
  },
  "raw_data_hex": "0a02c25122085c685c92bf035e7240988c89d0f72d5a68080112640a2d747970652e676f6f676c65617069732e636f6d2f70726f746f636f6c2e5472616e73666572436f6e747261637412330a1541859009fd225692b11237a6ffd8fdba2eb7140cca121541bf97a54f4b829c4e9253b26024b1829e1a3b112018c0b2cd3b70e0cb85d0f72d"
}'`,
  },
  {
    language: "js",
    code: () => `const url = '${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/getsignweight';

const data = {
  "visible": true,
  "signature": [
    "1fd210045f5bdcf375cd478cf46ff735f132281b990bc199acf1952bd438929d1d03e12de5ea7dcb89cff5b8cfc5d161661a5c1fe6a6a2422edb313b9139075300"
  ],
  "txID": "ee188aaf5cf78729d2d14d4db698126da2d75ef78a43837dafd6e6f591d103a2",
  "raw_data": {
    "contract": [
      {
        "parameter": {
          "value": {
            "amount": 125000000,
            "owner_address": "TN9RRaXkCFtTXRso2GdTZxSxxwufzxLQPP",
            "to_address": "TTSFjEG3Lu9WkHdp4JrWYhbGP6K1REqnGQ"
          },
          "type_url": "type.googleapis.com/protocol.TransferContract"
        },
        "type": "TransferContract"
      }
    ],
    "ref_block_bytes": "c251",
    "ref_block_hash": "5c685c92bf035e72",
    "expiration": 1578299967000,
    "timestamp": 1578299909600
  },
  "raw_data_hex": "0a02c25122085c685c92bf035e7240988c89d0f72d5a68080112640a2d747970652e676f6f676c65617069732e636f6d2f70726f746f636f6c2e5472616e73666572436f6e747261637412330a1541859009fd225692b11237a6ffd8fdba2eb7140cca121541bf97a54f4b829c4e9253b26024b1829e1a3b112018c0b2cd3b70e0cb85d0f72d"
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

const url = '${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/getsignweight';

const data = {
  "visible": true,
  "signature": [
    "1fd210045f5bdcf375cd478cf46ff735f132281b990bc199acf1952bd438929d1d03e12de5ea7dcb89cff5b8cfc5d161661a5c1fe6a6a2422edb313b9139075300"
  ],
  "txID": "ee188aaf5cf78729d2d14d4db698126da2d75ef78a43837dafd6e6f591d103a2",
  "raw_data": {
    "contract": [
      {
        "parameter": {
          "value": {
            "amount": 125000000,
            "owner_address": "TN9RRaXkCFtTXRso2GdTZxSxxwufzxLQPP",
            "to_address": "TTSFjEG3Lu9WkHdp4JrWYhbGP6K1REqnGQ"
          },
          "type_url": "type.googleapis.com/protocol.TransferContract"
        },
        "type": "TransferContract"
      }
    ],
    "ref_block_bytes": "c251",
    "ref_block_hash": "5c685c92bf035e72",
    "expiration": 1578299967000,
    "timestamp": 1578299909600
  },
  "raw_data_hex": "0a02c25122085c685c92bf035e7240988c89d0f72d5a68080112640a2d747970652e676f6f676c65617069732e636f6d2f70726f746f636f6c2e5472616e73666572436f6e747261637412330a1541859009fd225692b11237a6ffd8fdba2eb7140cca121541bf97a54f4b829c4e9253b26024b1829e1a3b112018c0b2cd3b70e0cb85d0f72d"
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
    url := "${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/getsignweight"

    data := map[string]interface{}{
  "visible": true,
  "signature": [
    "1fd210045f5bdcf375cd478cf46ff735f132281b990bc199acf1952bd438929d1d03e12de5ea7dcb89cff5b8cfc5d161661a5c1fe6a6a2422edb313b9139075300"
  ],
  "txID": "ee188aaf5cf78729d2d14d4db698126da2d75ef78a43837dafd6e6f591d103a2",
  "raw_data": {
    "contract": [
      {
        "parameter": {
          "value": {
            "amount": 125000000,
            "owner_address": "TN9RRaXkCFtTXRso2GdTZxSxxwufzxLQPP",
            "to_address": "TTSFjEG3Lu9WkHdp4JrWYhbGP6K1REqnGQ"
          },
          "type_url": "type.googleapis.com/protocol.TransferContract"
        },
        "type": "TransferContract"
      }
    ],
    "ref_block_bytes": "c251",
    "ref_block_hash": "5c685c92bf035e72",
    "expiration": 1578299967000,
    "timestamp": 1578299909600
  },
  "raw_data_hex": "0a02c25122085c685c92bf035e7240988c89d0f72d5a68080112640a2d747970652e676f6f676c65617069732e636f6d2f70726f746f636f6c2e5472616e73666572436f6e747261637412330a1541859009fd225692b11237a6ffd8fdba2eb7140cca121541bf97a54f4b829c4e9253b26024b1829e1a3b112018c0b2cd3b70e0cb85d0f72d"
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

url = '${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/getsignweight'

data = {
  "visible": true,
  "signature": [
    "1fd210045f5bdcf375cd478cf46ff735f132281b990bc199acf1952bd438929d1d03e12de5ea7dcb89cff5b8cfc5d161661a5c1fe6a6a2422edb313b9139075300"
  ],
  "txID": "ee188aaf5cf78729d2d14d4db698126da2d75ef78a43837dafd6e6f591d103a2",
  "raw_data": {
    "contract": [
      {
        "parameter": {
          "value": {
            "amount": 125000000,
            "owner_address": "TN9RRaXkCFtTXRso2GdTZxSxxwufzxLQPP",
            "to_address": "TTSFjEG3Lu9WkHdp4JrWYhbGP6K1REqnGQ"
          },
          "type_url": "type.googleapis.com/protocol.TransferContract"
        },
        "type": "TransferContract"
      }
    ],
    "ref_block_bytes": "c251",
    "ref_block_hash": "5c685c92bf035e72",
    "expiration": 1578299967000,
    "timestamp": 1578299909600
  },
  "raw_data_hex": "0a02c25122085c685c92bf035e7240988c89d0f72d5a68080112640a2d747970652e676f6f676c65617069732e636f6d2f70726f746f636f6c2e5472616e73666572436f6e747261637412330a1541859009fd225692b11237a6ffd8fdba2eb7140cca121541bf97a54f4b829c4e9253b26024b1829e1a3b112018c0b2cd3b70e0cb85d0f72d"
}

response = requests.post(url, headers={'Content-Type': 'application/json'}, data=json.dumps(data))
res = response.json()

print(res)
`,
  },
];

const RESPONSE_JSON = `{
    "permission": {
        "permission_name": "owner",
        "threshold": 1,
        "keys": [
            {
                "address": "TN9RRaXkCFtTXRso2GdTZxSxxwufzxLQPP",
                "weight": 1
            }
        ]
    },
    "approved_list": [
        "TN9RRaXkCFtTXRso2GdTZxSxxwufzxLQPP"
    ],
    "current_weight": 1,
    "result": {},
    "transaction": {
        "transaction": {
            "raw_data": {
                "ref_block_bytes": "c251",
                "ref_block_hash": "5c685c92bf035e72",
                "expiration": 1578299967000,
                "contract": [
                    {
                        "parameter": {
                            "value": {
                                "owner_address": "TN9RRaXkCFtTXRso2GdTZxSxxwufzxLQPP",
                                "to_address": "TTSFjEG3Lu9WkHdp4JrWYhbGP6K1REqnGQ",
                                "amount": 125000000
                            },
                            "type_url": "type.googleapis.com/protocol.TransferContract"
                        },
                        "type": "TransferContract"
                    }
                ],
                "timestamp": 1578299909600
            },
            "signature": [
                "1fd210045f5bdcf375cd478cf46ff735f132281b990bc199acf1952bd438929d1d03e12de5ea7dcb89cff5b8cfc5d161661a5c1fe6a6a2422edb313b9139075300"
            ],
            "raw_data_hex": "0a02c25122085c685c92bf035e7240988c89d0f72d5a68080112640a2d747970652e676f6f676c65617069732e636f6d2f70726f746f636f6c2e5472616e73666572436f6e747261637412330a1541859009fd225692b11237a6ffd8fdba2eb7140cca121541bf97a54f4b829c4e9253b26024b1829e1a3b112018c0b2cd3b70e0cb85d0f72d",
            "txID": "ee188aaf5cf78729d2d14d4db698126da2d75ef78a43837dafd6e6f591d103a2"
        },
        "txid": "ee188aaf5cf78729d2d14d4db698126da2d75ef78a43837dafd6e6f591d103a2",
        "result": {
            "result": true
        }
    }
}
`;

const REQUEST_PARAMS: RequestParamProp = [
  {
  paramName: "visible",
  type: "boolean",
  paramDescription: "Indicates whether addresses in this transaction are represented in base58 format (true) or hex format (false).",
},
{
  paramName: "signature",
  type: "array_of_strings",
  paramDescription: "The list of hex-encoded signatures already collected for this transaction.",
},
{
  paramName: "txID",
  type: "string",
  paramDescription: "The unique transaction hash (transaction ID), computed as the SHA256 of raw_data.",
},
    {
  paramName: "visible",
  type: "boolean",
  paramDescription: "Set to true to format addresses in Base58; set to false for hex format. (Default: false)",
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
              paramDescription: "The decoded fields of the contract — here, a plain TRX transfer.",
              childrenParams: [
                {
                  paramName: "amount",
                  type: "integer",
                  paramDescription: "The amount of TRX to transfer, in sun.",
                },
                {
                  paramName: "owner_address",
                  type: "string",
                  paramDescription: "The address sending the TRX.",
                },
                {
                  paramName: "to_address",
                  type: "string",
                  paramDescription: "The address receiving the TRX.",
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
          paramDescription: "The human-readable name of the contract type being executed (here, TransferContract).",
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
  paramDescription: "The hex-encoded serialized bytes of raw_data, used as the actual payload that was signed.",
}
];

const RESPONSE_PARAMS: ReqResParam[] = [
  {
  paramName: "permission",
  type: "object",
  childrenParamsType: "object",
  paramDescription: "The permission group against which the collected signatures are being evaluated.",
  childrenParams: [
    {
      paramName: "permission_name",
      type: "string",
      paramDescription: "The label identifying this permission group (e.g. \"owner\").",
    },
    {
      paramName: "threshold",
      type: "integer",
      paramDescription: "The minimum combined key weight required to authorize this transaction under this permission.",
    },
    {
      paramName: "keys",
      type: "array_of_objects",
      childrenParamsType: "object",
      paramDescription: "The list of keys eligible to sign under this permission group.",
      childrenParams: [
        {
          paramName: "address",
          type: "string",
          paramDescription: "The address of the key holder.",
        },
        {
          paramName: "weight",
          type: "integer",
          paramDescription: "The signing weight assigned to this key.",
        },
      ],
    },
  ],
},
{
  paramName: "approved_list",
  type: "array_of_strings",
  paramDescription: "The list of addresses that have already signed this transaction.",
},
{
  paramName: "current_weight",
  type: "integer",
  paramDescription: "The combined weight of all signatures collected so far, compared against the permission's threshold.",
},
{
  paramName: "result",
  type: "object",
  childrenParamsType: "object",
  paramDescription: "The status of this sign-weight check; empty when no error occurred.",
  childrenParams: [
    {
      paramName: "code",
      type: "string",
      paramDescription: "A machine-readable error code, present only if the check failed (e.g. invalid signature, permission not found).",
    },
    {
      paramName: "message",
      type: "string",
      paramDescription: "A human-readable explanation accompanying the error code, if any.",
    },
  ],
},
{
  paramName: "transaction",
  type: "object",
  childrenParamsType: "object",
  paramDescription: "The transaction being evaluated, echoed back along with node-level processing results.",
  childrenParams: [
    {
      paramName: "transaction",
      type: "object",
      childrenParamsType: "object",
      paramDescription: "The full transaction object as parsed by the node.",
      childrenParams: [
        {
          paramName: "raw_data",
          type: "object",
          childrenParamsType: "object",
          paramDescription: "The unsigned transaction body as parsed by the node.",
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
              paramDescription: "Unix timestamp, in ms, after which this transaction is no longer valid.",
            },
            {
              paramName: "contract",
              type: "array_of_objects",
              paramDescription: "The list of contract instructions parsed from the transaction, mirroring the request's raw_data.contract.",
            },
            {
              paramName: "timestamp",
              type: "integer",
              paramDescription: "Unix timestamp, in ms, marking when the transaction was created/signed by the client.",
            },
          ],
        },
        {
          paramName: "signature",
          type: "array_of_strings",
          paramDescription: "The list of hex-encoded signatures attached to the transaction.",
        },
        {
          paramName: "raw_data_hex",
          type: "string",
          paramDescription: "The hex-encoded serialized bytes of raw_data.",
        },
        {
          paramName: "txID",
          type: "string",
          paramDescription: "The unique transaction hash (transaction ID), computed as the SHA256 of raw_data.",
        },
      ],
    },
    {
      paramName: "txid",
      type: "string",
      paramDescription: "The transaction hash, duplicated here at the outer level for convenience.",
    },
    {
      paramName: "result",
      type: "object",
      childrenParamsType: "object",
      paramDescription: "Low-level acceptance status of the transaction at the node.",
      childrenParams: [
        {
          paramName: "result",
          type: "boolean",
          paramDescription: "Whether the node's internal validation step for this transaction passed.",
        },
      ],
    },
  ],
}
];

const USE_CASES = [
  "Determine whether enough signatures have been collected to broadcast a multi-sig transaction",
];

const CONSTRAINTS = [
  "current_weight must reach the relevant permission's threshold before broadcasting will succeed",
];
