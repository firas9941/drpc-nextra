import TronMethod from "../../TronMethod/TronMethod";
import { GenericMethodPropsReplacing } from "../../GenericMethod/GenericMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import { DRPC_ENDPOINT_URL_TRON_PAID } from "./constants";

export function TronMethod_getpaginatedassetissuelist(props: GenericMethodPropsReplacing) {
  return (
    <TronMethod
      method="getpaginatedassetissuelist"
      network="tron"
      cu={20}
      description={"Returns a paginated list of TRC10 tokens using offset and limit parameters."}
      useCases={USE_CASES}
      constraints={CONSTRAINTS}
      codeSnippets={CODE_SNIPPETS}
      requestParams={REQUEST_PARAMS}
      requestParamsType="object"
      responseJSON={RESPONSE_JSON}
      responseParams={RESPONSE_PARAMS}
      responseParamsType="object"
      responseParamsDescription={
        "Returns a paginated list of TRC10 tokens using offset and limit parameters."
      }
      {...props}
    />
  );
}

const CODE_SNIPPETS: Array<CodeSnippetObject> = [
  {
    language: "shell",
    code: () => `curl --request POST \\
     --url ${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/getpaginatedassetissuelist \\
     --header 'accept: application/json' \\
     --header 'content-type: application/json' \\
     --data '{"offset": 1, "limit": 1}'`,
  },
  {
    language: "js",
    code: () => `const url = '${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/getpaginatedassetissuelist';

const data = {"offset": 1, "limit": 1};

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

const url = '${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/getpaginatedassetissuelist';

const data = {"offset": 1, "limit": 1};

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
    url := "${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/getpaginatedassetissuelist"

    data := map[string]interface{}{
       "offset": 1,
       "limit": 1,
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

url = '${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/getpaginatedassetissuelist'

data = {
    "offset": 1,
    "limit": 1
}

response = requests.post(url, headers={'Content-Type': 'application/json'}, data=json.dumps(data))
res = response.json()

print(res)
`,
  },
];

const RESPONSE_JSON = `{
  "assetIssue": [
    {
      "owner_address": "41a8a906cd9d5e7ff3e472d34ca568441ceeb4cf5b",
      "name": "303044696365",
      "abbr": "307830",
      "total_supply": 1000000000000000000,
      "trx_num": 1000000,
      "precision": 6,
      "num": 100000000,
      "start_time": 1592841600000,
      "end_time": 1592928000000,
      "description": "e794a8e4ba8ee6b58be8af95",
      "url": "68747470733a2f2f7777772e62616964752e636f6d",
      "id": "1000052"
    },
    {
      "owner_address": "41f18b0c6d290d57464aeddeb98f429c9dd318e31e",
      "name": "3031303031313031303130313031",
      "abbr": "3031303031313031303130313031",
      "total_supply": 1000000,
      "frozen_supply": [{ "frozen_amount": 1000, "frozen_days": 2 }],
      "trx_num": 1,
      "precision": 6,
      "num": 1,
      "start_time": 1663344000000,
      "end_time": 1694880000000,
      "description": "e68f8fe8bfb0",
      "url": "75726c33",
      "free_asset_net_limit": 1000,
      "public_free_asset_net_limit": 1000,
      "id": "1004963"
    }
  ]
}`;

const REQUEST_PARAMS: RequestParamProp = [
  {
    paramName: "offset",
    type: "integer",
    paramDescription: "[Required for GET] Number of tokens to skip",
  },
  {
    paramName: "limit",
    type: "integer",
    paramDescription: "[Required for GET] Maximum number of tokens to return",
  },
  {
  paramName: "visible",
  type: "boolean",
  paramDescription: "Set to true to format addresses in Base58; set to false for hex format. (Default: false)",
},
];

const RESPONSE_PARAMS: ReqResParam[] = [
  {
  paramName: "assetIssue",
  type: "array_of_objects",
  childrenParamsType: "object",
  paramDescription: "The list of TRC10 token issuance records matching the query.",
  childrenParams: [
    {
      paramName: "owner_address",
      type: "string",
      paramDescription: "The address of the account that issued this token, in hex format.",
    },
    {
      paramName: "name",
      type: "string",
      paramDescription: "The token's display name, UTF-8 encoded as a hex string.",
    },
    {
      paramName: "abbr",
      type: "string",
      paramDescription: "The token's ticker/abbreviation, UTF-8 encoded as a hex string.",
    },
    {
      paramName: "total_supply",
      type: "integer",
      paramDescription: "The total number of units of this token issued.",
    },
    {
      paramName: "frozen_supply",
      type: "array_of_objects",
      childrenParamsType: "object",
      paramDescription: "The portion(s) of the total supply locked up by the issuer for a fixed duration before becoming transferable.",
      childrenParams: [
        {
          paramName: "frozen_amount",
          type: "integer",
          paramDescription: "The number of token units locked in this frozen portion.",
        },
        {
          paramName: "frozen_days",
          type: "integer",
          paramDescription: "The number of days this portion remains locked before it can be released.",
        },
      ],
    },
    {
      paramName: "trx_num",
      type: "integer",
      paramDescription: "The denominator of the TRX-to-token exchange ratio: this many TRX buys `num` tokens during fundraising.",
    },
    {
      paramName: "precision",
      type: "integer",
      paramDescription: "The number of decimal places used to display this token's amounts.",
    },
    {
      paramName: "num",
      type: "integer",
      paramDescription: "The numerator of the TRX-to-token exchange ratio: `trx_num` TRX buys this many tokens during fundraising.",
    },
    {
      paramName: "start_time",
      type: "integer",
      paramDescription: "Unix timestamp, in ms, at which the token's fundraising period began.",
    },
    {
      paramName: "end_time",
      type: "integer",
      paramDescription: "Unix timestamp, in ms, at which the token's fundraising period ends.",
    },
    {
      paramName: "vote_score",
      type: "integer",
      paramDescription: "A weighting factor used internally when ranking or sorting this token, relative to others.",
    },
    {
      paramName: "description",
      type: "string",
      paramDescription: "A free-text description of the token or project, UTF-8 encoded as a hex string.",
    },
    {
      paramName: "url",
      type: "string",
      paramDescription: "The project's website URL, UTF-8 encoded as a hex string.",
    },
    {
      paramName: "free_asset_net_limit",
      type: "integer",
      paramDescription: "The free bandwidth quota granted per account for transactions involving this token.",
    },
    {
      paramName: "public_free_asset_net_limit",
      type: "integer",
      paramDescription: "The shared free bandwidth quota available to all accounts collectively for transactions involving this token.",
    },
    {
      paramName: "id",
      type: "string",
      paramDescription: "The unique numeric identifier assigned to this TRC10 token on the network.",
    },
  ],
}
];

const USE_CASES = [
  "Also avalable as GET",
  "Page through the full TRC10 token list in a UI without loading everything at once",
];

const CONSTRAINTS = [
  "Very large limit values may be capped by the node",
  "Also available under /walletsolidity/ for confirmed (solidified) data instead of the latest state",
];
