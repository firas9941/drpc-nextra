import WalletMethod from "../../WalletMethod/WalletMethod";
import {
  ReqResParam,
  RequestParamProp
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";

export function WalletMethod_getledgerstakes() {
  return (
    <WalletMethod
      method="Get Ledger Stakes"
      cu={16700}
      culambda={"16700 CU per address, 5 addresses = 16700x5 CU"}
      description={"Returns ledger stakes for a specific protocol and addresses."}
      url={"GET https://lb.drpc.live/lambda/{key}/v1/{protocol}/data/ledger/stakes"}
      useCases={USE_CASES}
      constraints={CONSTRAINTS}
      codeSnippets={CODE_SNIPPETS}
      pathParams={PATH_PARAMS}
      queryParamsType="array_of_strings"
      queryParams={QUERY_PARAMS}
      requestParams={REQUEST_PARAMS}
      requestParamsType="none"
      responseJSON={RESPONSE_JSON}
      responseParams={RESPONSE_PARAMS}
      responseParamsType="object"
    />
  );
}

const CODE_SNIPPETS: Array<CodeSnippetObject> = [
  {
    language: "shell",
    code: () => `curl --request GET \\
  --url "https://lb.drpc.live/lambda/{key}/v1/aave_v3/data/ledger/stakes?stake_addresses=" \\
  --header "accept: application/json"`,
  },
  {
    language: "js",
    code: () => `const options = {
  method: 'GET',
  headers: {
    accept: 'application/json'
  }
};

fetch('https://lb.drpc.live/lambda/{key}/v1/aave_v3/data/ledger/stakes?stake_addresses=', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));`,
  },
  {
    language: "node",
    code: () => `const axios = require('axios');

axios.get(
  'https://lb.drpc.live/lambda/{key}/v1/aave_v3/data/ledger/stakes?stake_addresses=',
  {
    headers: {
      accept: 'application/json'
    }
  }
)
.then(response => {
  console.log(response.data);
})
.catch(error => {
  console.error(error);
});`,
  },
  {
    language: "go",
    code: () => `package main

import (
\t"fmt"
\t"io"
\t"net/http"
)

func main() {
\turl := "https://lb.drpc.live/lambda/{key}/v1/aave_v3/data/ledger/stakes?stake_addresses="

\treq, err := http.NewRequest("GET", url, nil)
\tif err != nil {
\t\tpanic(err)
\t}

\treq.Header.Set("accept", "application/json")

\tclient := &http.Client{}
\tresp, err := client.Do(req)
\tif err != nil {
\t\tpanic(err)
\t}
\tdefer resp.Body.Close()

\tbody, _ := io.ReadAll(resp.Body)
\tfmt.Println(string(body))
}`,
  },
  {
    language: "rust",
    code: () => `use reqwest::header::ACCEPT;

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let client = reqwest::Client::new();

    let response = client
        .get("https://lb.drpc.live/lambda/{key}/v1/aave_v3/data/ledger/stakes?stake_addresses=")
        .header(ACCEPT, "application/json")
        .send()
        .await?;

    let body = response.text().await?;
    println!("{}", body);

    Ok(())
}`,
  },
  {
    language: "python",
    code: () => `import requests

url = "https://lb.drpc.live/lambda/{key}/v1/aave_v3/data/ledger/stakes?stake_addresses="

headers = {
    "accept": "application/json"
}

response = requests.get(url, headers=headers)

print(response.json())`,
  },
];

const RESPONSE_JSON = `[
  {
    "id": {
      "network": "string",
      "address": "string"
    },
    "stake": {
      "protocol_name": "string",
      "currency": "string",
      "interest": {
        "type": "string",
        "value": 0
      },
      "since": "string",
      "staked_balance": 0,
      "status": "string",
      "commission": "string",
      "rewards": [
        {
          "total": 0,
          "last_day": 0,
          "last_week": 0,
          "last_month": 0,
          "last_year": 0,
          "reward_name": "string",
          "currency": "string",
          "interest_rate": 0,
          "type": "string"
        }
      ],
      "details": {
        "pool_id": "string"
      }
    }
  }
]`;

const PATH_PARAMS: ReqResParam[] = [
  {
    paramName: "key",
    type: "string",
    paramDescription: "[Required] Your dRPC API key",
  },
    {
    paramName: "protocol",
    type: "string",
    paramDescription: "[Required] Allowed: aave_v3, lido",
  },
];

const QUERY_PARAMS: ReqResParam[] = [
  {
    paramName: "stake_addresses",
    type: "array_of_strings",
    paramDescription: "[Required] List of stake addresses",
  },
];
const REQUEST_PARAMS: RequestParamProp = [];

const RESPONSE_PARAMS: ReqResParam[] = [
  {
    paramName: "id",
    type: "object",
    paramDescription: "[Required] STAKEID object",
    childrenParamsType: "object",
    childrenParams: [
      {
        paramName: "network",
        type: "string",
        paramDescription: "[Required]"
      },
      {
        paramName: "address",
        type: "string",
        paramDescription: "[Required]"
      },
    ],
  },
  {
    paramName: "stake",
    type: "object",
    paramDescription: "[Required] STAKEINFO object",
    childrenParamsType: "object",
    childrenParams: [
      {
        paramName: "protocol_name",
        type: "string",
        paramDescription: "[Required] "
      },
      {
        paramName: "currency",
        type: "string",
        paramDescription: "[Required]"
      },
      {
        paramName: "interest",
        type: "object",
        paramDescription: "[Required]",
        childrenParamsType: "object",
        childrenParams: [
          {
            paramName: "type",
            type: "string",
            paramDescription: "[Required] "
          },
          {
            paramName: "value",
            type: "number",
            paramDescription: "[Required]"
          },
        ],
      },
      {
        paramName: "since",
        type: "string",
        paramDescription: "[Required] "
      },
      {
        paramName: "staked_balance",
        type: "number",
        paramDescription: "[Required]"
      },
      {
        paramName: "status",
        type: "string",
        paramDescription: "[Required] "
      },
      {
        paramName: "commission",
        type: "string",
        paramDescription: "[Required]"
      },
      {
        paramName: "rewards",
        type: "array_of_objects",
        paramDescription: "[Required]",
        childrenParamsType: "object",
        childrenParams: [
          {
            paramName: "total",
            type: "number",
            paramDescription: "[Required] "
          },
          {
            paramName: "last_day",
            type: "number",
            paramDescription: "[Required]"
          },
          {
            paramName: "last_week",
            type: "number",
            paramDescription: "[Required] "
          },
          {
            paramName: "last_month",
            type: "number",
            paramDescription: "[Required]"
          },
          {
            paramName: "last_year",
            type: "number",
            paramDescription: "[Required] "
          },
          {
            paramName: "reward_name",
            type: "string",
            paramDescription: "[Required]"
          },
          {
            paramName: "currency",
            type: "string",
            paramDescription: "[Required]"
          },
          {
            paramName: "interest_rate",
            type: "number",
            paramDescription: "[Required]"
          },
          {
            paramName: "type",
            type: "string",
            paramDescription: "[Required]"
          },
        ],
      },
        {
            paramName: "details",
            type: "object",
            paramDescription: "[Required] STAKEDETAILS object",
          childrenParamsType: "object",
          childrenParams: [
          {
            paramName: "pool_id",
            type: "string",
            paramDescription: "[Required]"
          },
          ]
          },
    ],
  },

];

const USE_CASES = [
  "Retrieve historical APR data for DeFi protocols",
  "Analyze yield trends over time",
];

const CONSTRAINTS = [
  "Only supported protocols and assets are returned",
];