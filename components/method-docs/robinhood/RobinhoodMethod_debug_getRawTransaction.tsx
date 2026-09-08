import EthereumMethod from "../../EthereumMethod/EthereumMethod";
import { GenericMethodPropsReplacing } from "../../GenericMethod/GenericMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import { DRPC_ENDPOINT_URL_ROBINHOOD } from "./constants";

export function RobinhoodMethod_debug_getRawTransaction(props: GenericMethodPropsReplacing) {
  return (
    <EthereumMethod
      method="debug_getRawTransaction"
      network="robinhood"
      cu={20}
      description={
        "Returns the RLP-encoded bytes of a transaction identified by its hash"
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
        "The RLP-encoded transaction, as a hexadecimal string, or null if it was not found"
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
-d '{"method":"debug_getRawTransaction",
    "params":["0x73b5269af660acf6f1074c5f9f312d415c359f2e5f5f67e95b369d0fbd3bd6b8"],
    "id":1,
    "jsonrpc":"2.0"}'
`,
  },
  {
    language: "js",
    code: () => `const url = '${DRPC_ENDPOINT_URL_ROBINHOOD}';

const data = {
  jsonrpc: "2.0",
  method: "debug_getRawTransaction",
  params: [
    "0x73b5269af660acf6f1074c5f9f312d415c359f2e5f5f67e95b369d0fbd3bd6b8"
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
  method: "debug_getRawTransaction",
  params: [
    "0x73b5269af660acf6f1074c5f9f312d415c359f2e5f5f67e95b369d0fbd3bd6b8"
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
		"method":  "debug_getRawTransaction",
		"params":  []interface{}{
			"0x73b5269af660acf6f1074c5f9f312d415c359f2e5f5f67e95b369d0fbd3bd6b8",
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
    "method": "debug_getRawTransaction",
    "params": [
        "0x73b5269af660acf6f1074c5f9f312d415c359f2e5f5f67e95b369d0fbd3bd6b8"
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
        "method": "debug_getRawTransaction",
        "params": [
            "0x73b5269af660acf6f1074c5f9f312d415c359f2e5f5f67e95b369d0fbd3bd6b8"
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
  "result": "0xf86c0185012a05f200825208940599d52c37544c07605f470e5e20c1b266de858889021dfc23e5c290008025a084ce48a415a40d664f87a6a05e8ec8e2fd2f07a68b06d3f20d999d7e8c7b12dfa0464c6e93bfa8e779ecd48284cf47d2d797dc611bbc6dbd7ab8f57ccba039acec"
}`;

const REQUEST_PARAMS: RequestParamProp = [
  {
    paramName: "transactionHash",
    type: "string",
    paramDescription: "The hash of the transaction to fetch.",
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
    type: "string",
    paramDescription: "The RLP-encoded transaction as a hexadecimal string, or null if not found.",
  },
];

const USE_CASES = [
  "Re-broadcast a transaction to another node or network byte-for-byte",
  "Verify a transaction hash independently by re-hashing the raw bytes",
  "Feed raw transaction bytes into custom decoding or analytics tooling",
];

const CONSTRAINTS = [
  "Returns null if the transaction cannot be found",
  "Requires an archive node for older transactions",
];
