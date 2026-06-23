import WalletMethod from "../../WalletMethod/WalletMethod";
import {
  ReqResParam,
  RequestParamProp
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";

export function WalletMethod_getaprhistory() {
  return (
    <WalletMethod
      method="Get APR History"
      cu={33400}
      description={"Proxy APR history for lending/borrowing from Data Access Layer."}
      url={"POST https://lb.drpc.live/lambda/{key}/v1/protocols/apr/history"} 
      useCases={USE_CASES}
      constraints={CONSTRAINTS}
      codeSnippets={CODE_SNIPPETS}
      pathParams={PATH_PARAMS}
      queryParamsType="none"
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
    code: () => `curl --request POST \\
  --url https://lb.drpc.live/lambda/{key}/v1/protocols/apr/history \\
  --header "accept: application/json" \\
  --header "content-type: application/json" \\
  --data '{
    "requests": [
      {
        "chain": "ethereum"
      }
    ]
  }'`,
  },
  {
    language: "js",
    code: () => `const response = await fetch(
  "https://lb.drpc.live/lambda/{key}/v1/protocols/apr/history",
  {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
    },
    body: JSON.stringify({
      requests: [
        {
          chain: "ethereum",
        },
      ],
    }),
  }
);

const data = await response.json();
console.log(data);`,
  },
  {
    language: "node",
    code: () => `import axios from "axios";

const response = await axios.post(
  "https://lb.drpc.live/lambda/{key}/v1/protocols/apr/history",
  {
    requests: [
      {
        chain: "ethereum",
      },
    ],
  },
  {
    headers: {
      accept: "application/json",
      "content-type": "application/json",
    },
  }
);

console.log(response.data);`,
  },
  {
    language: "go",
    code: () => `package main

import (
\t"bytes"
\t"fmt"
\t"io"
\t"net/http"
)

func main() {
\tpayload := []byte(\`{
\t\t"requests": [
\t\t\t{
\t\t\t\t"chain": "ethereum"
\t\t\t}
\t\t]
\t}\`)

\treq, err := http.NewRequest(
\t\t"POST",
\t\t"https://lb.drpc.live/lambda/{key}/v1/protocols/apr/history",
\t\tbytes.NewBuffer(payload),
\t)
\tif err != nil {
\t\tpanic(err)
\t}

\treq.Header.Set("accept", "application/json")
\treq.Header.Set("content-type", "application/json")

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
    code: () => `use reqwest::Client;
use serde_json::json;

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let client = Client::new();

    let response = client
        .post("https://lb.drpc.live/lambda/{key}/v1/protocols/apr/history")
        .header("accept", "application/json")
        .header("content-type", "application/json")
        .json(&json!({
            "requests": [
                {
                    "chain": "ethereum"
                }
            ]
        }))
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

url = "https://lb.drpc.live/lambda/{key}/v1/protocols/apr/history"

payload = {
    "requests": [
        {
            "chain": "ethereum"
        }
    ]
}

headers = {
    "accept": "application/json",
    "content-type": "application/json"
}

response = requests.post(url, json=payload, headers=headers)

print(response.json())`,
  },
];

const RESPONSE_JSON = `{
  "data": [
    {
      "chain": "string",
      "protocol": "string",
      "pool_id": "string",
      "asset": "string",
      "start_date": 0,
      "end_date": 0,
      "APRs": [
        {
          "type": "string",
          "reward_token_address": "string",
          "points": [
            {
              "timestamp": 0,
              "value": 0
            }
          ]
        }
      ]
    }
  ]
}`;

const PATH_PARAMS: ReqResParam[] = [
  {
    paramName: "key",
    type: "string",
    paramDescription: "[Required] Your dRPC API key",
  },
];

const REQUEST_PARAMS: RequestParamProp = [];

const RESPONSE_PARAMS: ReqResParam[] = [
  {
  paramName: "data",
  type: "array_of_objects",
  paramDescription: "[Required] APR history data",
  childrenParamsType: "object",
  childrenParams: [
    {
      paramName: "chain",
      type: "string",
      paramDescription: "[Required] Chain name (e.g., ethereum)"
    },
    {
      paramName: "protocol",
      type: "string",
      paramDescription: "[Required] Protocol identifier (e.g., aave_v3)"
    },
    {
      paramName: "pool_id",
      type: "string",
      paramDescription: "[Required] Pool identifier"
    },
    {
      paramName: "asset",
      type: "string",
      paramDescription: "Asset address"
    },
    {
      paramName: "start_date",
      type: "integer",
      paramDescription: "[Required] Start timestamp in milliseconds"
    },
    {
      paramName: "end_date",
      type: "integer",
      paramDescription: "[Required] End timestamp in milliseconds"
    },
    {
      paramName: "APRs",
      type: "array_of_objects",
      paramDescription: "[Required] APR series for the requested asset",
      childrenParamsType: "object",
      childrenParams: [
        {
          paramName: "type",
          type: "string",
          paramDescription: "[Required] APR type (e.g., Supply interest, Borrow fees)"
        },
        {
          paramName: "reward_token_address",
          type: "string",
          paramDescription: "Reward token address"
        },
        {
          paramName: "points",
          type: "array_of_objects",
          paramDescription: "[Required] APR values over time",
          childrenParamsType: "object",
          childrenParams: [
            {
              paramName: "timestamp",
              type: "integer",
              paramDescription: "[Required] Timestamp in milliseconds"
            },
            {
              paramName: "value",
              type: "number",
              paramDescription: "APR value at the timestamp, defaults to 0"
            }
          ]
        }
      ]
    }
  ]
}
];

const USE_CASES = [
  "display active staking positions, balances, validators, and rewards",
  "Aggregate staking exposure across multiple addresses",
];

const CONSTRAINTS = [
  "Returned data depends on supported chains",
];