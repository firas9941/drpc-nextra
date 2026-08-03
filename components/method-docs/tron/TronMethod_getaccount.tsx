import TronMethod from "../../TronMethod/TronMethod";
import { GenericMethodPropsReplacing } from "../../GenericMethod/GenericMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import { DRPC_ENDPOINT_URL_TRON_PAID } from "./constants";

export function TronMethod_getaccount(props: GenericMethodPropsReplacing) {
  return (
    <TronMethod
      method="getaccount"
      network="tron"
      cu={20}
      description={"Returns account details such as balance, permissions, and resources for a given address."}
      useCases={USE_CASES}
      constraints={CONSTRAINTS}
      codeSnippets={CODE_SNIPPETS}
      requestParams={REQUEST_PARAMS}
      requestParamsType="object"
      responseJSON={RESPONSE_JSON}
      responseParams={RESPONSE_PARAMS}
      responseParamsType="object"
      responseParamsDescription={
        "Returns account details such as balance, permissions, and resources for a given address."
      }
      {...props}
    />
  );
}

const CODE_SNIPPETS: Array<CodeSnippetObject> = [
  {
    language: "shell",
    code: () => `curl --request POST \\
     --url ${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/getaccount \\
     --header 'accept: application/json' \\
     --header 'content-type: application/json' \\
     --data '{"address": "TZ4UXDV5ZhNW7fb2AMSbgfAEZ7hWsnYS2g", "visible": true}'`,
  },
  {
    language: "js",
    code: () => `const url = '${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/getaccount';

const data = {"address": "TZ4UXDV5ZhNW7fb2AMSbgfAEZ7hWsnYS2g", "visible": true};

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

const url = '${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/getaccount';

const data = {"address": "TZ4UXDV5ZhNW7fb2AMSbgfAEZ7hWsnYS2g", "visible": true};

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
    url := "${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/getaccount"

    data := map[string]interface{}{
       "address": "TZ4UXDV5ZhNW7fb2AMSbgfAEZ7hWsnYS2g",
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

url = '${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/getaccount'

data = {
    "address": "TZ4UXDV5ZhNW7fb2AMSbgfAEZ7hWsnYS2g",
    "visible": True
}

response = requests.post(url, headers={'Content-Type': 'application/json'}, data=json.dumps(data))
res = response.json()

print(res)
`,
  },
];

const RESPONSE_JSON = `{
    "address": "TZ4UXDV5ZhNW7fb2AMSbgfAEZ7hWsnYS2g",
    "balance": 4459000,
    "create_time": 1675582485000,
    "latest_opration_time": 1781689986000,
    "latest_consume_time": 1764749196000,
    "latest_consume_free_time": 1781689986000,
    "net_window_size": 28800000,
    "net_window_optimized": true,
    "account_resource": {
        "latest_consume_time_for_energy": 1778753271000,
        "energy_window_size": 28800000,
        "acquired_delegated_frozenV2_balance_for_energy": 1000000,
        "energy_window_optimized": true
    },
    "owner_permission": {
        "permission_name": "owner",
        "threshold": 1,
        "keys": [
            {
                "address": "TZ4UXDV5ZhNW7fb2AMSbgfAEZ7hWsnYS2g",
                "weight": 1
            }
        ]
    },
    "active_permission": [
        {
            "type": "Active",
            "id": 2,
            "permission_name": "active",
            "threshold": 1,
            "operations": "7fff1fc0033e0300000000000000000000000000000000000000000000000000",
            "keys": [
                {
                    "address": "TZ4UXDV5ZhNW7fb2AMSbgfAEZ7hWsnYS2g",
                    "weight": 1
                }
            ]
        }
    ],
    "frozenV2": [
        {},
        {
            "type": "ENERGY"
        },
        {
            "type": "TRON_POWER"
        }
    ],
    "assetV2": [
        {
            "key": "1004977",
            "value": 8888880000
        },
        {
            "key": "1005026",
            "value": 8888880000
        },
        {
            "key": "1005157",
            "value": 8888888
        },
        {
            "key": "1005168",
            "value": 4444444444
        },
        {
            "key": "1005141",
            "value": 970000
        },
        {
            "key": "1005074",
            "value": 2222222
        }
    ],
    "free_asset_net_usageV2": [
        {
            "key": "1004977",
            "value": 0
        },
        {
            "key": "1005026",
            "value": 0
        },
        {
            "key": "1005157",
            "value": 0
        },
        {
            "key": "1005168",
            "value": 0
        },
        {
            "key": "1005141",
            "value": 0
        },
        {
            "key": "1005074",
            "value": 0
        }
    ],
    "asset_optimized": true
}
`;

const REQUEST_PARAMS: RequestParamProp = [
  {
    paramName: "address",
    type: "string",
    paramDescription: "[Required for GET] The account address to query, in base58check or hex format",
  },
  {
    paramName: "visible",
    type: "boolean",
    paramDescription: "When true, addresses in the request and response are base58check strings; when false (default), they are hex strings",
  },
];

const RESPONSE_PARAMS: ReqResParam[] = [
  {
  paramName: "address",
  type: "string",
  paramDescription: "The account's address in hex format (or base58 if the request was sent with visible=true).",
},
{
  paramName: "account_name",
  type: "string",
  paramDescription: "The custom name assigned to the account, if one has been set.",
},
{
  paramName: "balance",
  type: "integer",
  paramDescription: "Liquid TRX balance, in sun (1 TRX = 1,000,000 sun).",
},
{
  paramName: "create_time",
  type: "integer",
  paramDescription: "Unix timestamp, in ms, when the account was created on-chain.",
},
{
  paramName: "latest_operation_time",
  type: "integer",
  paramDescription: "Timestamp of the last operation performed by this account.",
},
{
  paramName: "latest_consume_time",
  type: "integer",
  paramDescription: "Timestamp of the last time staked (paid) bandwidth was consumed.",
},
{
  paramName: "latest_consume_free_time",
  type: "integer",
  paramDescription: "Timestamp of the last time free bandwidth was consumed.",
},
{
  paramName: "free_net_usage",
  type: "integer",
  paramDescription: "Amount of free bandwidth used.",
},
{
  paramName: "net_usage",
  type: "integer",
  paramDescription: "Amount of staked (paid) bandwidth used, obtained through staking TRX.",
},
{
  paramName: "net_window_size",
  type: "integer",
  paramDescription: "Staking time window used to calculate available bandwidth.",
},
{
  paramName: "net_window_optimized",
  type: "boolean",
  paramDescription: "Flag indicating the bandwidth window is calculated using the optimized model.",
},
{
  paramName: "account_resource",
  type: "object",
  childrenParamsType: "object",
  paramDescription: "Contains details about the account's Energy resource, its consumption window, and any delegations.",
  childrenParams: [
    {
      paramName: "energy_usage",
      type: "integer",
      paramDescription: "Amount of Energy consumed.",
    },
    {
      paramName: "frozen_balance_for_energy",
      type: "object",
      childrenParamsType: "object",
      paramDescription: "Stake 1.0 balance frozen for Energy.",
      childrenParams: [
        {
          paramName: "frozen_balance",
          type: "integer",
          paramDescription: "The amount of TRX frozen for Energy under Stake 1.0.",
        },
        {
          paramName: "expire_time",
          type: "integer",
          paramDescription: "Timestamp when this frozen balance becomes eligible for unfreezing.",
        },
      ],
    },
    {
      paramName: "latest_consume_time_for_energy",
      type: "integer",
      paramDescription: "Timestamp of the last time the Energy resource was consumed.",
    },
    {
      paramName: "energy_window_size",
      type: "integer",
      paramDescription: "Staking time window used to calculate available Energy.",
    },
    {
      paramName: "energy_window_optimized",
      type: "boolean",
      paramDescription: "Flag for the optimized calculation model of the Energy window.",
    },
    {
      paramName: "delegated_frozen_balance_for_energy",
      type: "integer",
      paramDescription: "Stake 1.0 balance delegated to another account for Energy.",
    },
    {
      paramName: "delegated_frozenV2_balance_for_energy",
      type: "integer",
      paramDescription: "Stake 2.0 balance delegated to another account for Energy.",
    },
  ],
},
{
  paramName: "owner_permission",
  type: "object",
  childrenParamsType: "object",
  paramDescription: "Owner permission group: signature threshold and the list of keys with their weights.",
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
      paramDescription: "The list of keys belonging to this permission group.",
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
  paramName: "active_permission",
  type: "array_of_objects",
  childrenParamsType: "object",
  paramDescription: "The list of active permissions (multi-sig for regular operations) tied to this account.",
  childrenParams: [
    {
      paramName: "type",
      type: "string",
      paramDescription: "The permission category, typically \"Active\".",
    },
    {
      paramName: "id",
      type: "integer",
      paramDescription: "The numeric identifier of this active permission.",
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
      paramDescription: "The list of keys belonging to this permission group.",
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
  paramName: "frozen",
  type: "array_of_objects",
  childrenParamsType: "object",
  paramDescription: "Frozen balances under the Stake 1.0 model for bandwidth.",
  childrenParams: [
    {
      paramName: "frozen_balance",
      type: "integer",
      paramDescription: "The amount of TRX frozen for bandwidth under Stake 1.0.",
    },
    {
      paramName: "expire_time",
      type: "integer",
      paramDescription: "Timestamp when this frozen balance becomes eligible for unfreezing.",
    },
  ],
},
{
  paramName: "frozenV2",
  type: "array_of_objects",
  childrenParamsType: "object",
  paramDescription: "Frozen balances under the Stake 2.0 model, broken down by resource type.",
  childrenParams: [
    {
      paramName: "type",
      type: "string",
      paramDescription: "The resource type this frozen entry applies to (e.g. ENERGY or TRON_POWER); omitted for bandwidth.",
    },
    {
      paramName: "amount",
      type: "integer",
      paramDescription: "The amount of TRX frozen for this resource type, in sun.",
    },
  ],
},
{
  paramName: "delegated_frozen_balance_for_bandwidth",
  type: "integer",
  paramDescription: "Stake 1.0 balance delegated to another account for bandwidth.",
},
{
  paramName: "delegated_frozenV2_balance_for_bandwidth",
  type: "integer",
  paramDescription: "Stake 2.0 balance delegated to another account for bandwidth.",
},
{
  paramName: "asset",
  type: "object",
  childrenParamsType: "integer",
  paramDescription: "TRC10 token balances in the legacy format, mapping each token id to its balance amount.",
},
{
  paramName: "assetV2",
  type: "array_of_objects",
  childrenParamsType: "object",
  paramDescription: "TRC10 token balances in the newer format, with extended per-token information.",
  childrenParams: [
    {
      paramName: "key",
      type: "string",
      paramDescription: "The identifier of the TRC10 token.",
    },
    {
      paramName: "value",
      type: "integer",
      paramDescription: "The account's balance of this token.",
    },
  ],
},
{
  paramName: "asset_optimized",
  type: "boolean",
  paramDescription: "Flag showing that TRC10 asset data is stored in the optimized layout.",
}
];

const USE_CASES = [
  "Also available as GET",
  "Display a wallet's TRX balance and account age",
  "Check an account's multi-signature permission structure before signing",
];

const CONSTRAINTS = [
  "Returns an empty object for an address with no on-chain history",
  "TRC10/TRC20 token balances are not included; use dedicated asset endpoints",
  "Also available under /walletsolidity/ for confirmed (solidified) data instead of the latest state",
];
