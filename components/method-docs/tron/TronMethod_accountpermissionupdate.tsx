import TronMethod from "../../TronMethod/TronMethod";
import { GenericMethodPropsReplacing } from "../../GenericMethod/GenericMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import { DRPC_ENDPOINT_URL_TRON_PAID } from "./constants";

export function TronMethod_accountpermissionupdate(props: GenericMethodPropsReplacing) {
  return (
    <TronMethod
      method="accountpermissionupdate"
      network="tron"
      cu={20}
      description={"Updates the owner, witness, and active permissions of a multi-signature account."}
      useCases={USE_CASES}
      constraints={CONSTRAINTS}
      codeSnippets={CODE_SNIPPETS}
      requestParams={REQUEST_PARAMS}
      requestParamsType="object"
      responseJSON={RESPONSE_JSON}
      responseParams={RESPONSE_PARAMS}
      responseParamsType="object"
      responseParamsDescription={
        "Updates the owner, witness, and active permissions of a multi-signature account."
      }
      {...props}
    />
  );
}

const CODE_SNIPPETS: Array<CodeSnippetObject> = [
  {
    language: "shell",
    code: () => `curl --request POST \\
     --url ${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/accountpermissionupdate \\
     --header 'accept: application/json' \\
     --header 'content-type: application/json' \\
     --data '{
  "owner_address": "41dd791d6b49e190062d650e6a23c575510d35f2f9",
  "owner": {
    "type": 0, "id": 0, "permission_name": "owner",
    "threshold": 1,
    "keys": [{ "address": "41dd791d6b49e190062d650e6a23c575510d35f2f9", "weight": 1 }]
  },
  "actives": [{
    "type": 2, "id": 2, "permission_name": "active",
    "threshold": 1,
    "operations": "7fff1fc0033e0100000000000000000000000000000000000000000000000000",
    "keys": [{ "address": "41dd791d6b49e190062d650e6a23c575510d35f2f9", "weight": 1 }]
  }]
}'`,
  },
  {
    language: "js",
    code: () => `const url = '${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/accountpermissionupdate';

const data = {
  "owner_address": "41dd791d6b49e190062d650e6a23c575510d35f2f9",
  "owner": {
    "type": 0, "id": 0, "permission_name": "owner",
    "threshold": 1,
    "keys": [{ "address": "41dd791d6b49e190062d650e6a23c575510d35f2f9", "weight": 1 }]
  },
  "actives": [{
    "type": 2, "id": 2, "permission_name": "active",
    "threshold": 1,
    "operations": "7fff1fc0033e0100000000000000000000000000000000000000000000000000",
    "keys": [{ "address": "41dd791d6b49e190062d650e6a23c575510d35f2f9", "weight": 1 }]
  }]
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

const url = '${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/accountpermissionupdate';

const data = {
  "owner_address": "41dd791d6b49e190062d650e6a23c575510d35f2f9",
  "owner": {
    "type": 0, "id": 0, "permission_name": "owner",
    "threshold": 1,
    "keys": [{ "address": "41dd791d6b49e190062d650e6a23c575510d35f2f9", "weight": 1 }]
  },
  "actives": [{
    "type": 2, "id": 2, "permission_name": "active",
    "threshold": 1,
    "operations": "7fff1fc0033e0100000000000000000000000000000000000000000000000000",
    "keys": [{ "address": "41dd791d6b49e190062d650e6a23c575510d35f2f9", "weight": 1 }]
  }]
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
    url := "${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/accountpermissionupdate"

    data := map[string]interface{}{
  "owner_address": "41dd791d6b49e190062d650e6a23c575510d35f2f9",
  "owner": {
    "type": 0, "id": 0, "permission_name": "owner",
    "threshold": 1,
    "keys": [{ "address": "41dd791d6b49e190062d650e6a23c575510d35f2f9", "weight": 1 }]
  },
  "actives": [{
    "type": 2, "id": 2, "permission_name": "active",
    "threshold": 1,
    "operations": "7fff1fc0033e0100000000000000000000000000000000000000000000000000",
    "keys": [{ "address": "41dd791d6b49e190062d650e6a23c575510d35f2f9", "weight": 1 }]
  }]
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

url = '${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/accountpermissionupdate'

data = {
  "owner_address": "41dd791d6b49e190062d650e6a23c575510d35f2f9",
  "owner": {
    "type": 0, "id": 0, "permission_name": "owner",
    "threshold": 1,
    "keys": [{ "address": "41dd791d6b49e190062d650e6a23c575510d35f2f9", "weight": 1 }]
  },
  "actives": [{
    "type": 2, "id": 2, "permission_name": "active",
    "threshold": 1,
    "operations": "7fff1fc0033e0100000000000000000000000000000000000000000000000000",
    "keys": [{ "address": "41dd791d6b49e190062d650e6a23c575510d35f2f9", "weight": 1 }]
  }]
}

response = requests.post(url, headers={'Content-Type': 'application/json'}, data=json.dumps(data))
res = response.json()

print(res)
`,
  },
];

const RESPONSE_JSON = `{
  "visible": false,
  "txID": "beb8e742fc1f345a9eed45456e54cb3eba4ec286845b57a89bc8638e2e6a8dad",
  "raw_data": {
    "contract": [
      {
        "parameter": {
          "value": {
            "owner_address": "41dd791d6b49e190062d650e6a23c575510d35f2f9",
            "owner": {
              "permission_name": "owner",
              "threshold": 1,
              "keys": [
                { "address": "41dd791d6b49e190062d650e6a23c575510d35f2f9", "weight": 1 }
              ]
            },
            "actives": [
              {
                "type": "Active",
                "id": 2,
                "permission_name": "active",
                "threshold": 1,
                "operations": "7fff1fc0033e0100000000000000000000000000000000000000000000000000",
                "keys": [
                  { "address": "41dd791d6b49e190062d650e6a23c575510d35f2f9", "weight": 1 }
                ]
              }
            ]
          },
          "type_url": "type.googleapis.com/protocol.AccountPermissionUpdateContract"
        },
        "type": "AccountPermissionUpdateContract"
      }
    ],
    "ref_block_bytes": "270b",
    "ref_block_hash": "d95e28e9c4c8af73",
    "expiration": 1777445901000,
    "timestamp": 1777445841729
  },
  "raw_data_hex": "0a02270b2208d95e28e9c4c8af7340c8a5a0c0dd335ad001082e12cb010a3c747970652e676f6f676c65617069732e636f6d2f70726f746f636f6c2e4163636f756e745065726d697373696f6e557064617465436f6e7472616374128a010a1541dd791d6b49e190062d650e6a23c575510d35f2f912241a056f776e657220013a190a1541dd791d6b49e190062d650e6a23c575510d35f2f91001224b080210021a06616374697665200132207fff1fc0033e01000000000000000000000000000000000000000000000000003a190a1541dd791d6b49e190062d650e6a23c575510d35f2f9100170c1d69cc0dd33"
}`;

const REQUEST_PARAMS: RequestParamProp = [
  {
    paramName: "owner_address",
    type: "string",
    paramDescription: "[Required] The account address whose permissions are being updated",
  },
  {
    paramName: "owner",
    type: "object",
    paramDescription: "[Required] The new owner permission group: threshold and weighted keys",
  },
  {
    paramName: "witness",
    type: "object",
    paramDescription: "The new witness permission group, if the account is a Super Representative",
  },
  {
    paramName: "actives",
    type: "array_of_objects",
    paramDescription: "[Required] List of new active permission groups, each with its own threshold, operations bitmap, and keys",
  },
  {
    paramName: "permission_id",
    type: "integer",
    paramDescription: "Permission ID used for the current signature",
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
      paramDescription: "The list of contract instructions to be executed by this transaction (in most transactions, a single-element array).",
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
              paramDescription: "The decoded fields of the contract, specific to its type — here, the new permission configuration being applied to the account.",
              childrenParams: [
                {
                  paramName: "owner_address",
                  type: "string",
                  paramDescription: "The address of the account whose permissions are being updated, in hex format.",
                },
                {
                  paramName: "owner",
                  type: "object",
                  childrenParamsType: "object",
                  paramDescription: "The new owner permission group being set for this account.",
                  childrenParams: [
                    {
                      paramName: "permission_name",
                      type: "string",
                      paramDescription: "The label identifying this permission group (typically \"owner\").",
                    },
                    {
                      paramName: "threshold",
                      type: "integer",
                      paramDescription: "The minimum combined key weight required to authorize an action under this permission.",
                    },
                    {
                      paramName: "keys",
                      type: "array_of_objects",
                      childrenParamsType: "object",
                      paramDescription: "The list of keys granted signing rights under this permission group.",
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
                  paramName: "actives",
                  type: "array_of_objects",
                  childrenParamsType: "object",
                  paramDescription: "The new active permission groups being set for this account, used for authorizing day-to-day contract calls.",
                  childrenParams: [
                    {
                      paramName: "type",
                      type: "string",
                      paramDescription: "The permission category, typically \"Active\".",
                    },
                    {
                      paramName: "id",
                      type: "integer",
                      paramDescription: "The numeric identifier of this active permission slot.",
                    },
                    {
                      paramName: "permission_name",
                      type: "string",
                      paramDescription: "The label identifying this permission group (typically \"active\").",
                    },
                    {
                      paramName: "threshold",
                      type: "integer",
                      paramDescription: "The minimum combined key weight required to authorize an action under this permission.",
                    },
                    {
                      paramName: "operations",
                      type: "string",
                      paramDescription: "A hex-encoded bitmap describing which contract operation types this permission is allowed to authorize.",
                    },
                    {
                      paramName: "keys",
                      type: "array_of_objects",
                      childrenParamsType: "object",
                      paramDescription: "The list of keys granted signing rights under this permission group.",
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
          paramDescription: "The human-readable name of the contract type being executed (here, AccountPermissionUpdateContract).",
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
  "Convert a single-key wallet into a multi-signature account",
  "Rotate or add signing keys for an existing multi-sig account",
];

const CONSTRAINTS = [
  "Must be signed by a key that already meets the current owner permission threshold",
  "Incorrectly configured thresholds/weights can permanently lock an account",
];
