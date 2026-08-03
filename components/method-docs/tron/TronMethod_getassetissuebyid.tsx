import TronMethod from "../../TronMethod/TronMethod";
import { GenericMethodPropsReplacing } from "../../GenericMethod/GenericMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import { DRPC_ENDPOINT_URL_TRON_PAID } from "./constants";

export function TronMethod_getassetissuebyid(props: GenericMethodPropsReplacing) {
  return (
    <TronMethod
      method="getassetissuebyid"
      network="tron"
      cu={20}
      description={"Returns TRC10 token details by its numeric asset ID."}
      useCases={USE_CASES}
      constraints={CONSTRAINTS}
      codeSnippets={CODE_SNIPPETS}
      requestParams={REQUEST_PARAMS}
      requestParamsType="object"
      responseJSON={RESPONSE_JSON}
      responseParams={RESPONSE_PARAMS}
      responseParamsType="object"
      responseParamsDescription={
        "Returns TRC10 token details by its numeric asset ID."
      }
      {...props}
    />
  );
}

const CODE_SNIPPETS: Array<CodeSnippetObject> = [
  {
    language: "shell",
    code: () => `curl --request POST \\
     --url ${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/getassetissuebyid \\
     --header 'accept: application/json' \\
     --header 'content-type: application/json' \\
     --data '{"value": "example"}'`,
  },
  {
    language: "js",
    code: () => `const url = '${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/getassetissuebyid';

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

const url = '${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/getassetissuebyid';

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
    url := "${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/getassetissuebyid"

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

url = '${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/getassetissuebyid'

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
  "owner_address": "41088a2bfcb1c7271029fd69a66859d55560895884",
  "name": "54524e",
  "abbr": "544e",
  "total_supply": 100000000000000000,
  "frozen_supply": [
    { "frozen_amount": 1, "frozen_days": 1 }
  ],
  "trx_num": 1,
  "precision": 6,
  "num": 1,
  "start_time": 1737690890434,
  "end_time": 2053134849000,
  "vote_score": 1,
  "description": "7465737420747263313020636f696e20666f72206e696c65",
  "url": "68747470733a2f2f6e696c6565782e696f2f",
  "free_asset_net_limit": 10000,
  "public_free_asset_net_limit": 20000,
  "id": "1005416"
}`;

const REQUEST_PARAMS: RequestParamProp = [
  {
    paramName: "value",
    type: "string",
    paramDescription: "[Required for GET] The TRC10 token's numeric asset ID",
  },
];

const RESPONSE_PARAMS: ReqResParam[] = [
  {
  paramName: "owner_address",
  type: "string",
  paramDescription: "The address of the account issuing this TRC10 token.",
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
  paramDescription: "The total number of units of this token that will ever be issued.",
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
  paramName: "num",
  type: "integer",
  paramDescription: "The numerator of the TRX-to-token exchange ratio: `trx_num` TRX buys this many tokens during fundraising.",
},
{
  paramName: "precision",
  type: "integer",
  paramDescription: "The number of decimal places used to display this token's amounts.",
},
{
  paramName: "start_time",
  type: "integer",
  paramDescription: "Unix timestamp, in ms, at which the token's fundraising period begins.",
},
{
  paramName: "end_time",
  type: "integer",
  paramDescription: "Unix timestamp, in ms, at which the token's fundraising period ends.",
},
{
  paramName: "description",
  type: "string",
  paramDescription: "A free-text description of the token or project, UTF-8 encoded as a hex string.",
},
{
  paramName: "url",
  type: "string",
  paramDescription: "The project's website URL, UTF-8 encoded as a hex string, limited to 256 bytes.",
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
  paramName: "Permission_id",
  type: "integer",
  paramDescription: "The ID of the multi-sig permission group authorizing this operation, if the issuer account uses multi-sig.",
},
{
  paramName: "visible",
  type: "boolean",
  paramDescription: "Whether addresses and text fields in the request/response are formatted as Base58/UTF-8 (true) or hex (false).",
}
];

const USE_CASES = [
   "Also available as GET",
  "Look up a TRC10 token's supply and issuer by its asset ID",
];

const CONSTRAINTS = [
  "Returns an empty object if no token with that ID exists",
  "Also available under /walletsolidity/ for confirmed (solidified) data instead of the latest state",
];
