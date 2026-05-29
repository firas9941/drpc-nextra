import WalletMethod from "../../WalletMethod/WalletMethod";
import {
  ReqResParam,
  RequestParamProp
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";

export function WalletMethod_getledgergrow() {
  return (
    <WalletMethod
      method="Get APR growth data"
      cu={3340}
      description={"Returns APR growth data for a specific protocol."}
      url={"GET https://lb.drpc.live/lambda/{key}/v1/{protocol}/data/ledger/grow"}
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
    code: () => `curl --request GET \\
  --url "https://lb.drpc.live/lambda/{key}/v1/aave_v3/data/ledger/grow" \\
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

fetch('https://lb.drpc.live/lambda/{key}/v1/aave_v3/data/ledger/grow', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));`,
  },
  {
    language: "node",
    code: () => `const axios = require('axios');

axios.get(
  'https://lb.drpc.live/lambda/{key}/v1/aave_v3/data/ledger/grow',
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
\turl := "https://lb.drpc.live/lambda/{key}/v1/aave_v3/data/ledger/grow"

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
        .get("https://lb.drpc.live/lambda/{key}/v1/aave_v3/data/ledger/grow")
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

url = "https://lb.drpc.live/lambda/{key}/v1/aave_v3/data/ledger/grow"

headers = {
    "accept": "application/json"
}

response = requests.get(url, headers=headers)

print(response.json())`,
  },
];

const RESPONSE_JSON = `[
  {
    "network": "string",
    "deposit_token": "string",
    "interest": {
      "type": "string",
      "value": 0,
      "currency": "string"
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

const REQUEST_PARAMS: RequestParamProp = [];

const RESPONSE_PARAMS: ReqResParam[] = [
  {
    paramName: "network",
    type: "string",
    paramDescription: "[Required] Network name",
  },
    {
      paramName: "deposit_token",
      type: "string",
      paramDescription: "[Required] Deposit token name"
    },
    {
      paramName: "interest",
      type: "object",
      paramDescription: "[Required] Interest details",
      childrenParamsType: "object",
      childrenParams: [
        {
      paramName: "type",
      type: "string",
      paramDescription: "[Required] Interest type (e.g., APY)"
    },
    {
      paramName: "value",
      type: "number",
      paramDescription: "Interest value"
    },
    {
      paramName: "currency",
      type: "string",
      paramDescription: "[Required] Interest currency"
    },
      ]
    },

];

const USE_CASES = [
  "Track APR changes over time and compare yield performance",
  "Identify increasing or declining APR opportunities",
];

const CONSTRAINTS = [
  "APR growth calculations depend on indexed historical protocol data",
];