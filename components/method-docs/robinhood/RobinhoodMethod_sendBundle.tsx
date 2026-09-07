import EthereumMethod from "../../EthereumMethod/EthereumMethod";
import { GenericMethodPropsReplacing } from "../../GenericMethod/GenericMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import { DRPC_ENDPOINT_URL_ROBINHOOD } from "./constants";

export function RobinhoodMethod_sendBundle(props: GenericMethodPropsReplacing) {
  return (
    <EthereumMethod
      method="eth_sendBundle"
      network="robinhood"
      cu={20}
      description={
        "Submits a list of signed transactions to be included atomically, in order, in a specific block"
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
        "The hash identifying the submitted bundle"
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
-d '{"method":"eth_sendBundle",
    "params":[{"txs": ["0x02f86c0180843b9aca008502540be4008252089400000000000000000000000000000000000000008080c001a0...", "0x02f86c0180843b9aca008502540be4008252089400000000000000000000000000000000000000008080c001a0..."], "blockNumber": "0xb63dcd", "minTimestamp": 0, "maxTimestamp": 1615920932}],
    "id":1,
    "jsonrpc":"2.0"}'
`,
  },
  {
    language: "js",
    code: () => `const url = '${DRPC_ENDPOINT_URL_ROBINHOOD}';

const data = {
  jsonrpc: "2.0",
  method: "eth_sendBundle",
  params: [
    {
      txs: [
        "0x02f86c0180843b9aca008502540be4008252089400000000000000000000000000000000000000008080c001a0...",
        "0x02f86c0180843b9aca008502540be4008252089400000000000000000000000000000000000000008080c001a0..."
      ],
      blockNumber: "0xb63dcd",
      minTimestamp: 0,
      maxTimestamp: 1615920932
    }
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
  method: "eth_sendBundle",
  params: [
    {
      txs: [
        "0x02f86c0180843b9aca008502540be4008252089400000000000000000000000000000000000000008080c001a0...",
        "0x02f86c0180843b9aca008502540be4008252089400000000000000000000000000000000000000008080c001a0..."
      ],
      blockNumber: "0xb63dcd",
      minTimestamp: 0,
      maxTimestamp: 1615920932
    }
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
		"method":  "eth_sendBundle",
		"params":  []interface{}{
			map[string]interface{}{
				"txs": []interface{}{
					"0x02f86c0180843b9aca008502540be4008252089400000000000000000000000000000000000000008080c001a0...",
					"0x02f86c0180843b9aca008502540be4008252089400000000000000000000000000000000000000008080c001a0...",
				},
				"blockNumber": "0xb63dcd",
				"minTimestamp": 0,
				"maxTimestamp": 1615920932,
			},
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
    "method": "eth_sendBundle",
    "params": [
        {
            "txs": [
                "0x02f86c0180843b9aca008502540be4008252089400000000000000000000000000000000000000008080c001a0...",
                "0x02f86c0180843b9aca008502540be4008252089400000000000000000000000000000000000000008080c001a0..."
            ],
            "blockNumber": "0xb63dcd",
            "minTimestamp": 0,
            "maxTimestamp": 1615920932
        }
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
        "method": "eth_sendBundle",
        "params": [
            {
                "txs": [
                    "0x02f86c0180843b9aca008502540be4008252089400000000000000000000000000000000000000008080c001a0...",
                    "0x02f86c0180843b9aca008502540be4008252089400000000000000000000000000000000000000008080c001a0..."
                ],
                "blockNumber": "0xb63dcd",
                "minTimestamp": 0,
                "maxTimestamp": 1615920932
            }
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
    "bundleHash": "0x2228f5d8954ce31dc1601a8ba264dbd401bf1428388ce88238932815c5d6f23f"
  }
}`;

const REQUEST_PARAMS: RequestParamProp = [
  {
    paramName: "bundle",
    type: "object",
    paramDescription: "The bundle of transactions to submit.",
    childrenParamsType: "object",
    childrenParams: [
      {
        paramName: "txs",
        type: "array_of_strings",
        paramDescription: "The signed, RLP-encoded transactions to execute atomically, in order.",
      },
      {
        paramName: "blockNumber",
        type: "string",
        paramDescription: "The block the bundle is valid for, as a hex string.",
      },
      {
        paramName: "minTimestamp",
        type: "integer",
        paramDescription:
          "(optional) The minimum block timestamp, in Unix seconds, for which the bundle is valid.",
      },
      {
        paramName: "maxTimestamp",
        type: "integer",
        paramDescription:
          "(optional) The maximum block timestamp, in Unix seconds, for which the bundle is valid.",
      },
      {
        paramName: "revertingTxHashes",
        type: "array_of_strings",
        paramDescription:
          "(optional) Hashes of transactions in the bundle that are allowed to revert without invalidating it.",
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
    type: "object",
    paramDescription: "The result of the bundle submission.",
    childrenParamsType: "object",
    childrenParams: [
      {
        paramName: "bundleHash",
        type: "string",
        paramDescription: "The hash of the submitted bundle.",
      },
    ],
  },
];

const USE_CASES = [
  "Send a private transaction sequence that bypasses the public mempool",
  "Guarantee strict ordering between two or more dependent transactions",
];

const CONSTRAINTS = [
  "The bundle is only valid for the specific blockNumber supplied",
  "Any transaction reverting invalidates the whole bundle unless listed in revertingTxHashes",
];
