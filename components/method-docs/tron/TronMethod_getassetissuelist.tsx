import TronMethod from "../../TronMethod/TronMethod";
import { GenericMethodPropsReplacing } from "../../GenericMethod/GenericMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import { DRPC_ENDPOINT_URL_TRON_PAID } from "./constants";

export function TronMethod_getassetissuelist(props: GenericMethodPropsReplacing) {
  return (
    <TronMethod
      method="getassetissuelist"
      network="tron"
      cu={20}
      description={"Returns the full list of TRC10 tokens issued on the network."}
      useCases={USE_CASES}
      constraints={CONSTRAINTS}
      codeSnippets={CODE_SNIPPETS}
      requestParams={REQUEST_PARAMS}
      requestParamsType="string"
      responseJSON={RESPONSE_JSON}
      responseParams={RESPONSE_PARAMS}
      responseParamsType="object"
      responseParamsDescription={
        "Returns the full list of TRC10 tokens issued on the network."
      }
      {...props}
    />
  );
}

const CODE_SNIPPETS: Array<CodeSnippetObject> = [
  {
    language: "shell",
    code: () => `curl --request POST \\
     --url ${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/getassetissuelist \\
     --header 'accept: application/json' \\
     --header 'content-type: application/json' \\
     --data '{}'`,
  },
  {
    language: "js",
    code: () => `const url = '${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/getassetissuelist';

const data = {};

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

const url = '${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/getassetissuelist';

const data = {};

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
    url := "${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/getassetissuelist"

    data := map[string]interface{}{}

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

url = '${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/getassetissuelist'

data = {}

response = requests.post(url, headers={'Content-Type': 'application/json'}, data=json.dumps(data))
res = response.json()

print(res)
`,
  },
];

const RESPONSE_JSON = `{
  "assetIssue": [
    {
      "owner_address": "417e95e45f5a60cc45f2d0afe37ee9f77fb8ce9fff",
      "name": "74726f6e6c696e6b5f746f6b656e",
      "abbr": "74726f6e6c696e6b5f746f6b656e",
      "total_supply": 1000000000000000,
      "frozen_supply": [{ "frozen_amount": 1, "frozen_days": 1 }],
      "trx_num": 1,
      "precision": 6,
      "num": 1,
      "start_time": 1574757000000,
      "end_time": 1757595000000,
      "description": "4465736372697074696f6e",
      "id": "1000001"
    }
    /* ... other tokens */
  ]
}`;

const REQUEST_PARAMS: RequestParamProp = [
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
  "Also available as GET",
  "Build a full directory/search index of TRC10 tokens",
];

const CONSTRAINTS = [
  "Response can be large; prefer getpaginatedassetissuelist for incremental loading",
  "Also available under /walletsolidity/ for confirmed (solidified) data instead of the latest state",
];
