import EthereumMethod from "../../EthereumMethod/EthereumMethod";
import { GenericMethodPropsReplacing } from "../../GenericMethod/GenericMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import { DRPC_ENDPOINT_URL_ROBINHOOD } from "./constants";

export function RobinhoodMethod_debug_storageRangeAt(props: GenericMethodPropsReplacing) {
  return (
    <EthereumMethod
      method="debug_storageRangeAt"
      network="robinhood"
      cu={20}
      description={
        "Returns a page of storage slots for a contract, evaluated at a specific transaction's position within a block"
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
        "A page of the contract's storage entries, plus a cursor for the next page if there is one"
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
-d '{"method":"debug_storageRangeAt",
    "params":["0x54d353c9ebe37c05091f4e063d3f331e48cab4362ab0ff86f05ebea58138bf96", 0, "0x3ccC78545F675A188B7521F7f4b4791995752635", "0x0000000000000000000000000000000000000000000000000000000000000000", 10],
    "id":1,
    "jsonrpc":"2.0"}'
`,
  },
  {
    language: "js",
    code: () => `const url = '${DRPC_ENDPOINT_URL_ROBINHOOD}';

const data = {
  jsonrpc: "2.0",
  method: "debug_storageRangeAt",
  params: [
    "0x54d353c9ebe37c05091f4e063d3f331e48cab4362ab0ff86f05ebea58138bf96",
    0,
    "0x3ccC78545F675A188B7521F7f4b4791995752635",
    "0x0000000000000000000000000000000000000000000000000000000000000000",
    10
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
  method: "debug_storageRangeAt",
  params: [
    "0x54d353c9ebe37c05091f4e063d3f331e48cab4362ab0ff86f05ebea58138bf96",
    0,
    "0x3ccC78545F675A188B7521F7f4b4791995752635",
    "0x0000000000000000000000000000000000000000000000000000000000000000",
    10
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
		"method":  "debug_storageRangeAt",
		"params":  []interface{}{
			"0x54d353c9ebe37c05091f4e063d3f331e48cab4362ab0ff86f05ebea58138bf96",
			0,
			"0x3ccC78545F675A188B7521F7f4b4791995752635",
			"0x0000000000000000000000000000000000000000000000000000000000000000",
			10,
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
    "method": "debug_storageRangeAt",
    "params": [
        "0x54d353c9ebe37c05091f4e063d3f331e48cab4362ab0ff86f05ebea58138bf96",
        0,
        "0x3ccC78545F675A188B7521F7f4b4791995752635",
        "0x0000000000000000000000000000000000000000000000000000000000000000",
        10
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
        "method": "debug_storageRangeAt",
        "params": [
            "0x54d353c9ebe37c05091f4e063d3f331e48cab4362ab0ff86f05ebea58138bf96",
            0,
            "0x3ccC78545F675A188B7521F7f4b4791995752635",
            "0x0000000000000000000000000000000000000000000000000000000000000000",
            10
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
  "result": {
    "storage": {
      "0x290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e56": {
        "key": "0x0000000000000000000000000000000000000000000000000000000000000000",
        "value": "0x0000000000000000000000000000000000000000000000000000000000000001"
      }
    },
    "nextKey": null
  }
}`;

const REQUEST_PARAMS: RequestParamProp = [
  {
    paramName: "blockHash",
    type: "string",
    paramDescription: "The hash of the block to read storage at.",
  },
  {
    paramName: "txIndex",
    type: "integer",
    paramDescription:
      "The index of the transaction within the block to evaluate storage after.",
  },
  {
    paramName: "address",
    type: "string",
    paramDescription: "The contract address to read storage for.",
  },
  {
    paramName: "startKey",
    type: "string",
    paramDescription: "The paging offset, as the hash of a storage key.",
  },
  {
    paramName: "limit",
    type: "integer",
    paramDescription: "The maximum number of storage entries to return in this page.",
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
    type: "object",
    paramDescription: "The requested page of contract storage.",
    childrenParamsType: "object",
    childrenParams: [
      {
        paramName: "storage",
        type: "object",
        paramDescription:
          "A map keyed by the hash of the storage slot, with the slot's key and value.",
        childrenParamsType: "object",
        childrenParams: [
          {
            paramName: "key",
            type: "string",
            paramDescription: "The storage slot key.",
          },
          {
            paramName: "value",
            type: "string",
            paramDescription: "The value stored at that slot.",
          },
        ],
      },
      {
        paramName: "nextKey",
        type: "string",
        paramDescription:
          "The hash of the next key if more storage remains in range, otherwise omitted.",
      },
    ],
  },
];

const USE_CASES = [
  "Enumerate a contract's full storage layout for migration or auditing tooling",
  "Debug mapping or array storage layout issues in a deployed contract",
];

const CONSTRAINTS = [
  "Requires an archive node for blocks other than recent ones",
  "Only the hashed storage keys are returned, not the pre-image slot numbers",
];
