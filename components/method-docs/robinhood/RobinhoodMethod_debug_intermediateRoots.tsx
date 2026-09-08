import EthereumMethod from "../../EthereumMethod/EthereumMethod";
import { GenericMethodPropsReplacing } from "../../GenericMethod/GenericMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import { DRPC_ENDPOINT_URL_ROBINHOOD } from "./constants";

export function RobinhoodMethod_debug_intermediateRoots(props: GenericMethodPropsReplacing) {
  return (
    <EthereumMethod
      method="debug_intermediateRoots"
      network="robinhood"
      cu={20}
      description={
        "Re-executes every transaction in a block and returns the state root produced after each one"
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
        "The state root hashes produced after each transaction in the block, in order"
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
-d '{"method":"debug_intermediateRoots",
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
  method: "debug_intermediateRoots",
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
  method: "debug_intermediateRoots",
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
		"method":  "debug_intermediateRoots",
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
    "method": "debug_intermediateRoots",
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
        "method": "debug_intermediateRoots",
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
    "0x65ea44c8bd5f9edbf269b6446b460b3e7378abb25c78fd5d70f0e2ef59296b25",
    "0xd6902f31ae9d2169b77cd88611c6afd691ea5a7e604e44c71f663fda0c5d1c28"
  ]
}`;

const REQUEST_PARAMS: RequestParamProp = [
  {
    paramName: "blockHash",
    type: "string",
    paramDescription: "The hash of the block to compute intermediate roots for.",
  },
  {
    paramName: "options",
    type: "object",
    paramDescription: "(optional) Tracing options for the re-execution.",
    childrenParamsType: "object",
    childrenParams: [
      {
        paramName: "timeout",
        type: "string",
        paramDescription:
          "Timeout for the computation, as a Go duration string (e.g. \"5s\"). Defaults to 5s.",
      },
      {
        paramName: "reexec",
        type: "integer",
        paramDescription:
          "Number of blocks to re-execute to reconstruct historical state. Defaults to 128.",
      },
    ],
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
    paramDescription:
      "The state root hash after each transaction was applied, in transaction order.",
  },
];

const USE_CASES = [
  "Pinpoint which transaction caused an unexpected state change",
  "Debug a state-root mismatch between clients on a specific block",
  "Build fine-grained, per-transaction state-diff tooling",
];

const CONSTRAINTS = [
  "Re-executes every transaction in the block, which is resource-intensive",
  "Requires an archive node for blocks other than recent ones",
];
