import TronMethod from "../../TronMethod/TronMethod";
import { GenericMethodPropsReplacing } from "../../GenericMethod/GenericMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import { DRPC_ENDPOINT_URL_TRON_PAID } from "./constants";

export function TronMethod_getapprovedlist(props: GenericMethodPropsReplacing) {
  return (
    <TronMethod
      method="getapprovedlist"
      network="tron"
      cu={20}
      description={"Returns the list of approving addresses for a pending multi-signature transaction."}
      useCases={USE_CASES}
      constraints={CONSTRAINTS}
      codeSnippets={CODE_SNIPPETS}
      requestParams={REQUEST_PARAMS}
      requestParamsType="object"
      responseJSON={RESPONSE_JSON}
      responseParams={RESPONSE_PARAMS}
      responseParamsType="object"
      responseParamsDescription={
        "Returns the list of approving addresses for a pending multi-signature transaction."
      }
      {...props}
    />
  );
}

const CODE_SNIPPETS: Array<CodeSnippetObject> = [
  {
    language: "shell",
    code: () => `curl --request POST \\
     --url ${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/getapprovedlist \\
     --header 'accept: application/json' \\
     --header 'content-type: application/json' \\
     --data '{
  "signature": [
    "50a252d1ffd1cf902fe4f7a3986697adf26a37c8193a86ce9ccc76adf5c05d26166c5e90d470a13708c48a76a766d2b2c68ffd733451ff1315040fb526e7ccde1b"
  ],
  "raw_data": {
    "data": "74657374",
    "contract": [
      {
        "parameter": {
          "value": {
            "resource": "ENERGY",
            "frozen_balance": 5000000,
            "owner_address": "TUoHaVjx7n5xz8LwPRDckgFrDWhMhuSuJM"
          },
          "type_url": "type.googleapis.com/protocol.FreezeBalanceV2Contract"
        },
        "type": "FreezeBalanceV2Contract"
      }
    ],
    "ref_block_bytes": "dd1a",
    "ref_block_hash": "51a43e706d9ac33a",
    "expiration": 1767844938000,
    "timestamp": 1767844878000
  }
}'`,
  },
  {
    language: "js",
    code: () => `const url = '${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/getapprovedlist';

const data = {
  "signature": [
    "50a252d1ffd1cf902fe4f7a3986697adf26a37c8193a86ce9ccc76adf5c05d26166c5e90d470a13708c48a76a766d2b2c68ffd733451ff1315040fb526e7ccde1b"
  ],
  "raw_data": {
    "data": "74657374",
    "contract": [
      {
        "parameter": {
          "value": {
            "resource": "ENERGY",
            "frozen_balance": 5000000,
            "owner_address": "TUoHaVjx7n5xz8LwPRDckgFrDWhMhuSuJM"
          },
          "type_url": "type.googleapis.com/protocol.FreezeBalanceV2Contract"
        },
        "type": "FreezeBalanceV2Contract"
      }
    ],
    "ref_block_bytes": "dd1a",
    "ref_block_hash": "51a43e706d9ac33a",
    "expiration": 1767844938000,
    "timestamp": 1767844878000
  }
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

const url = '${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/getapprovedlist';

const data = {
  "signature": [
    "50a252d1ffd1cf902fe4f7a3986697adf26a37c8193a86ce9ccc76adf5c05d26166c5e90d470a13708c48a76a766d2b2c68ffd733451ff1315040fb526e7ccde1b"
  ],
  "raw_data": {
    "data": "74657374",
    "contract": [
      {
        "parameter": {
          "value": {
            "resource": "ENERGY",
            "frozen_balance": 5000000,
            "owner_address": "TUoHaVjx7n5xz8LwPRDckgFrDWhMhuSuJM"
          },
          "type_url": "type.googleapis.com/protocol.FreezeBalanceV2Contract"
        },
        "type": "FreezeBalanceV2Contract"
      }
    ],
    "ref_block_bytes": "dd1a",
    "ref_block_hash": "51a43e706d9ac33a",
    "expiration": 1767844938000,
    "timestamp": 1767844878000
  }
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
    url := "${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/getapprovedlist"

    data := map[string]interface{}{
  "signature": [
    "50a252d1ffd1cf902fe4f7a3986697adf26a37c8193a86ce9ccc76adf5c05d26166c5e90d470a13708c48a76a766d2b2c68ffd733451ff1315040fb526e7ccde1b"
  ],
  "raw_data": {
    "data": "74657374",
    "contract": [
      {
        "parameter": {
          "value": {
            "resource": "ENERGY",
            "frozen_balance": 5000000,
            "owner_address": "TUoHaVjx7n5xz8LwPRDckgFrDWhMhuSuJM"
          },
          "type_url": "type.googleapis.com/protocol.FreezeBalanceV2Contract"
        },
        "type": "FreezeBalanceV2Contract"
      }
    ],
    "ref_block_bytes": "dd1a",
    "ref_block_hash": "51a43e706d9ac33a",
    "expiration": 1767844938000,
    "timestamp": 1767844878000
  }
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

url = '${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/getapprovedlist'

data = {
  "signature": [
    "50a252d1ffd1cf902fe4f7a3986697adf26a37c8193a86ce9ccc76adf5c05d26166c5e90d470a13708c48a76a766d2b2c68ffd733451ff1315040fb526e7ccde1b"
  ],
  "raw_data": {
    "data": "74657374",
    "contract": [
      {
        "parameter": {
          "value": {
            "resource": "ENERGY",
            "frozen_balance": 5000000,
            "owner_address": "TUoHaVjx7n5xz8LwPRDckgFrDWhMhuSuJM"
          },
          "type_url": "type.googleapis.com/protocol.FreezeBalanceV2Contract"
        },
        "type": "FreezeBalanceV2Contract"
      }
    ],
    "ref_block_bytes": "dd1a",
    "ref_block_hash": "51a43e706d9ac33a",
    "expiration": 1767844938000,
    "timestamp": 1767844878000
  }
}

response = requests.post(url, headers={'Content-Type': 'application/json'}, data=json.dumps(data))
res = response.json()

print(res)
`,
  },
];

const RESPONSE_JSON = `{
    "result": {
        "code": "OTHER_ERROR",
        "message": "Invalid transaction: no valid contract"
    },
    "transaction": {
        "transaction": {
            "raw_data": {
                "ref_block_bytes": "dd1a",
                "ref_block_hash": "51a43e706d9ac33a",
                "expiration": 1767844938000,
                "data": "74657374",
                "timestamp": 1767844878000,
                "contract": []
            },
            "signature": [
                "50a252d1ffd1cf902fe4f7a3986697adf26a37c8193a86ce9ccc76adf5c05d26166c5e90d470a13708c48a76a766d2b2c68ffd733451ff1315040fb526e7ccde1b"
            ],
            "raw_data_hex": "0a02dd1a220851a43e706d9ac33a40908294deb93352047465737470b0ad90deb933",
            "txID": "41c6f329a4126a23801e5915e1834a61fad0cf708df3f0d596950b759d113c58"
        },
        "txid": "41c6f329a4126a23801e5915e1834a61fad0cf708df3f0d596950b759d113c58",
        "result": {
            "result": true
        }
    }
}
`;

const REQUEST_PARAMS: RequestParamProp = [
  {
  paramName: "signature",
  type: "array_of_strings",
  paramDescription: "The list of hex-encoded signatures over the transaction hash, one entry per required signing key.",
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
      paramName: "data",
      type: "string",
      paramDescription: "Hex-encoded optional memo/note attached to the transaction (up to 512 bytes).",
    },
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
              paramDescription: "The decoded fields of the contract — here, a Stake 2.0 freeze request.",
              childrenParams: [
                {
                  paramName: "resource",
                  type: "string",
                  paramDescription: "The resource type being staked for, either BANDWIDTH or ENERGY.",
                },
                {
                  paramName: "frozen_balance",
                  type: "integer",
                  paramDescription: "The amount of TRX, in sun, to freeze (stake) for the specified resource.",
                },
                {
                  paramName: "owner_address",
                  type: "string",
                  paramDescription: "The address performing the freeze, in base58 format.",
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
          paramDescription: "The human-readable name of the contract type being executed (here, FreezeBalanceV2Contract).",
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

const RESPONSE_PARAMS: ReqResParam[] = [
  {
  paramName: "result",
  type: "object",
  childrenParamsType: "object",
  paramDescription: "The outcome of attempting to broadcast this transaction to the network.",
  childrenParams: [
    {
      paramName: "code",
      type: "string",
      paramDescription: "A machine-readable error code identifying why the broadcast failed (e.g. OTHER_ERROR); absent or SUCCESS when the transaction is accepted.",
    },
    {
      paramName: "message",
      type: "string",
      paramDescription: "A human-readable explanation of the failure, sometimes returned base64/hex-encoded depending on the client.",
    },
  ],
},
{
  paramName: "transaction",
  type: "object",
  childrenParamsType: "object",
  paramDescription: "An echo of the submitted transaction along with node-level processing details, returned for debugging the failed broadcast.",
  childrenParams: [
    {
      paramName: "result",
      type: "object",
      childrenParamsType: "object",
      paramDescription: "Low-level acceptance status of the transaction at the node, separate from the higher-level broadcast result above.",
      childrenParams: [
        {
          paramName: "result",
          type: "boolean",
          paramDescription: "Whether the node's internal validation step for this transaction passed.",
        },
      ],
    },
    {
      paramName: "txid",
      type: "string",
      paramDescription: "The transaction hash computed by the node for the submitted transaction.",
    },
    {
      paramName: "transaction",
      type: "object",
      childrenParamsType: "object",
      paramDescription: "The full transaction object as received and echoed back by the node.",
      childrenParams: [
        {
          paramName: "signature",
          type: "array_of_strings",
          paramDescription: "The list of hex-encoded signatures submitted with the transaction.",
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
          paramDescription: "The unsigned transaction body as parsed by the node; here the contract list is empty, reflecting the decode failure that triggered the error.",
          childrenParams: [
            {
              paramName: "data",
              type: "string",
              paramDescription: "Hex-encoded optional memo/note attached to the transaction.",
            },
            {
              paramName: "contract",
              type: "array_of_objects",
              paramDescription: "The list of contract instructions recognized by the node; empty here because no valid contract could be parsed.",
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
          paramDescription: "The hex-encoded serialized bytes of raw_data, used as the actual payload that was signed and broadcast.",
        },
      ],
    },
  ],
}
];

const USE_CASES = [
  "Track signature collection progress for a multi-sig transaction before broadcasting",
];

const CONSTRAINTS = [
  "The transaction must already contain at least one signature to return meaningful results",
];
