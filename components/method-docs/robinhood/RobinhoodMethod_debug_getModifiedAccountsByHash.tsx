import EthereumMethod from "../../EthereumMethod/EthereumMethod";
import { GenericMethodPropsReplacing } from "../../GenericMethod/GenericMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import { DRPC_ENDPOINT_URL_ROBINHOOD } from "./constants";

export function RobinhoodMethod_debug_getModifiedAccountsByHash(props: GenericMethodPropsReplacing) {
  return (
    <EthereumMethod
      method="debug_getModifiedAccountsByHash"
      network="robinhood"
      cu={20}
      description={
        "Compares state between two blocks identified by hash and returns every account address whose state changed"
      }
      useCases={USE_CASES}
      constraints={CONSTRAINTS}
      codeSnippets={CODE_SNIPPETS}
      requestParams={REQUEST_PARAMS}
      requestParamsType="array"
      responseJSON={RESPONSE_JSON}
      responseParams={RESPONSE_PARAMS}
      responseParamsType="object"
      responseParamsDescription={
        "The addresses of the accounts modified in the specified block or range"
      }
      {...props}
    />
  );
}

const CODE_SNIPPETS: Array<CodeSnippetObject> = [
  {
    language: "shell",
    code: () => `curl ${DRPC_ENDPOINT_URL_ROBINHOOD} \\
-X POST \\
-H "Content-Type: application/json" \\
-d '{"method":"debug_getModifiedAccountsByHash",
    "params":["0xf4aab7a559489b816aca197b9a9315b5363a9932c52c3e8bfcf4152588ee096a"],
    "id":1,
    "jsonrpc":"2.0"}'
`,
  },
  {
    language: "js",
    code: () => `const url = '${DRPC_ENDPOINT_URL_ROBINHOOD}';

const data = {
  jsonrpc: "2.0",
  method: "debug_getModifiedAccountsByHash",
  params: [
    "0xf4aab7a559489b816aca197b9a9315b5363a9932c52c3e8bfcf4152588ee096a"
  ],
  id: 1
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

const url = '${DRPC_ENDPOINT_URL_ROBINHOOD}';

const data = {
  jsonrpc: "2.0",
  method: "debug_getModifiedAccountsByHash",
  params: [
    "0xf4aab7a559489b816aca197b9a9315b5363a9932c52c3e8bfcf4152588ee096a"
  ],
  id: 1
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
	url := "${DRPC_ENDPOINT_URL_ROBINHOOD}"

	data := map[string]interface{}{
		"jsonrpc": "2.0",
		"method":  "debug_getModifiedAccountsByHash",
		"params":  []interface{}{
			"0xf4aab7a559489b816aca197b9a9315b5363a9932c52c3e8bfcf4152588ee096a",
		},
		"id":      1,
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

url = '${DRPC_ENDPOINT_URL_ROBINHOOD}'

data = {
    "jsonrpc": "2.0",
    "method": "debug_getModifiedAccountsByHash",
    "params": [
        "0xf4aab7a559489b816aca197b9a9315b5363a9932c52c3e8bfcf4152588ee096a"
    ],
    "id": 1
}

response = requests.post(url, json=data)
print(response.json())
`,
  },
  {
    language: "rust",
    code: () => `use reqwest::Client;
use serde_json::json;

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let url = "${DRPC_ENDPOINT_URL_ROBINHOOD}";

    let data = json!({
        "jsonrpc": "2.0",
        "method": "debug_getModifiedAccountsByHash",
        "params": [
            "0xf4aab7a559489b816aca197b9a9315b5363a9932c52c3e8bfcf4152588ee096a"
        ],
        "id": 1
    });

    let client = Client::new();
    let res = client.post(url)
        .json(&data)
        .send()
        .await?
        .json::<serde_json::Value>()
        .await?;

    println!("{:#?}", res);

    Ok(())
}
`,
  },
];

const RESPONSE_JSON = `{
  "jsonrpc": "2.0",
  "id": 1,
  "result": [
    "0x828d0386c1122e565f07dd28c7d1340ed5b3315",
    "0x21849e99c31e3113a489d7eb0fd4d8c0edbe47af"
  ]
}`;

const REQUEST_PARAMS: RequestParamProp = [
  {
    paramName: "startHash",
    type: "string",
    paramDescription:
      "The hash of the block to check. When endHash is omitted, accounts are compared against this block's parent.",
  },
  {
    paramName: "endHash",
    type: "string",
    paramDescription:
      "(optional) The hash of the end block. When provided, returns accounts modified between startHash and endHash.",
  },
];

const RESPONSE_PARAMS: ReqResParam[] = [
  {
    paramName: "id",
    type: "integer",
  },
  {
    paramName: "jsonrpc",
    type: "string",
  },
  {
    paramName: "result",
    type: "array_of_strings",
    paramDescription: "The addresses of the modified accounts.",
  },
];

const USE_CASES = [
  "Build an indexer that reprocesses accounts that actually changed",
  "Detect which contracts were touched across a range of blocks",
  "Investigate the blast radius of a specific transaction or exploit",
];

const CONSTRAINTS = [
  "Both blocks must be present in the node's state history",
  "Large block ranges can be slow to compute",
];
