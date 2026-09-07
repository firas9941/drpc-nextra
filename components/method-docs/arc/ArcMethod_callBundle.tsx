import EthereumMethod from "../../EthereumMethod/EthereumMethod";
import { GenericMethodPropsReplacing } from "../../GenericMethod/GenericMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import { DRPC_ENDPOINT_URL_ARC } from "./constants";

export function ArcMethod_callBundle(props: GenericMethodPropsReplacing) {
  return (
    <EthereumMethod
      method="eth_callBundle"
      network="arc"
      cu={20}
      description={
        "Simulates a bundle of signed transactions against a specific block, including simulating at the top of the next block, without submitting anything to the network"
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
        "The bundle simulation result, with aggregate gas and fee figures plus a per-transaction breakdown"
      }
      {...props}
    />
  );
}

const CODE_SNIPPETS: Array<CodeSnippetObject> = [
  {
    language: "shell",
    code: () => `curl ${DRPC_ENDPOINT_URL_ARC} \\
-X POST \\
-H "Content-Type: application/json" \\
-d '{"method":"eth_callBundle",
    "params":[{"txs": ["0x123abc...", "0x456def..."], "blockNumber": "0xb63dcd", "stateBlockNumber": "latest", "timestamp": 1615920932}],
    "id":1,
    "jsonrpc":"2.0"}'
`,
  },
  {
    language: "js",
    code: () => `const url = '${DRPC_ENDPOINT_URL_ARC}';

const data = {
  jsonrpc: "2.0",
  method: "eth_callBundle",
  params: [
    {
      txs: [
        "0x123abc...",
        "0x456def..."
      ],
      blockNumber: "0xb63dcd",
      stateBlockNumber: "latest",
      timestamp: 1615920932
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

const url = '${DRPC_ENDPOINT_URL_ARC}';

const data = {
  jsonrpc: "2.0",
  method: "eth_callBundle",
  params: [
    {
      txs: [
        "0x123abc...",
        "0x456def..."
      ],
      blockNumber: "0xb63dcd",
      stateBlockNumber: "latest",
      timestamp: 1615920932
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
	url := "${DRPC_ENDPOINT_URL_ARC}"

	data := map[string]interface{}{
		"jsonrpc": "2.0",
		"method":  "eth_callBundle",
		"params":  []interface{}{
			map[string]interface{}{
				"txs": []interface{}{
					"0x123abc...",
					"0x456def...",
				},
				"blockNumber": "0xb63dcd",
				"stateBlockNumber": "latest",
				"timestamp": 1615920932,
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

url = '${DRPC_ENDPOINT_URL_ARC}'

data = {
    "jsonrpc": "2.0",
    "method": "eth_callBundle",
    "params": [
        {
            "txs": [
                "0x123abc...",
                "0x456def..."
            ],
            "blockNumber": "0xb63dcd",
            "stateBlockNumber": "latest",
            "timestamp": 1615920932
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
    let url = "${DRPC_ENDPOINT_URL_ARC}";

    let data = json!({
        "jsonrpc": "2.0",
        "method": "eth_callBundle",
        "params": [
            {
                "txs": [
                    "0x123abc...",
                    "0x456def..."
                ],
                "blockNumber": "0xb63dcd",
                "stateBlockNumber": "latest",
                "timestamp": 1615920932
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
    "bundleGasPrice": "476190476193",
    "bundleHash": "0x73b1e258c7a42fd0230b2fd05529c5d4b6fcb66c227783f8bece8aeacdd1db2e",
    "coinbaseDiff": "20000000000126000",
    "ethSentToCoinbase": "20000000000000000",
    "gasFees": "126000",
    "results": [
      {
        "coinbaseDiff": "10000000000063000",
        "ethSentToCoinbase": "10000000000000000",
        "fromAddress": "0x02A727155aeF8609c9f7F2179b2a1f560B39F5A0",
        "gasFees": "63000",
        "gasPrice": "476190476193",
        "gasUsed": 21000,
        "toAddress": "0x73625f59CAdc5009Cb458B751b3E7b6b48C06f2C",
        "txHash": "0x669b4704a7d993a946cdd6e2f95233f308ce0c4649d2e04944e8299efcaa098a",
        "value": "0x"
      }
    ],
    "stateBlockNumber": 5221585,
    "totalGasUsed": 42000
  }
}`;

const REQUEST_PARAMS: RequestParamProp = [
  {
    paramName: "bundle",
    type: "object",
    paramDescription: "The bundle simulation parameters.",
    childrenParamsType: "object",
    childrenParams: [
      {
        paramName: "txs",
        type: "array_of_strings",
        paramDescription: "Signed, RLP-encoded transactions to execute in an atomic bundle.",
      },
      {
        paramName: "blockNumber",
        type: "string",
        paramDescription: "The block the bundle is valid for, as a hex string.",
      },
      {
        paramName: "stateBlockNumber",
        type: "string",
        paramDescription:
          'The block number or tag whose state the simulation is based on. Can be "latest".',
      },
      {
        paramName: "timestamp",
        type: "integer",
        paramDescription:
          "(optional) The timestamp to use for the simulation, in Unix seconds.",
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
    paramDescription: "The bundle simulation result.",
    childrenParamsType: "object",
    childrenParams: [
      {
        paramName: "bundleGasPrice",
        type: "string",
        paramDescription: "The gas price used for the bundle simulation.",
      },
      {
        paramName: "bundleHash",
        type: "string",
        paramDescription: "The hash of the bundle.",
      },
      {
        paramName: "coinbaseDiff",
        type: "string",
        paramDescription: "The total difference in coinbase payments.",
      },
      {
        paramName: "ethSentToCoinbase",
        type: "string",
        paramDescription: "The total ETH sent to the coinbase.",
      },
      {
        paramName: "gasFees",
        type: "string",
        paramDescription: "The total gas fees for the bundle.",
      },
      {
        paramName: "results",
        type: "array_of_objects",
        paramDescription: "The result of each transaction in the bundle, in order.",
        childrenParamsType: "object",
        childrenParams: [
          {
            paramName: "coinbaseDiff",
            type: "string",
            paramDescription: "The coinbase difference for this transaction.",
          },
          {
            paramName: "ethSentToCoinbase",
            type: "string",
            paramDescription: "The ETH sent to coinbase for this transaction.",
          },
          {
            paramName: "fromAddress",
            type: "string",
            paramDescription: "The address that sent the transaction.",
          },
          {
            paramName: "gasFees",
            type: "string",
            paramDescription: "The gas fees for this transaction.",
          },
          {
            paramName: "gasPrice",
            type: "string",
            paramDescription: "The gas price used for this transaction.",
          },
          {
            paramName: "gasUsed",
            type: "integer",
            paramDescription: "The amount of gas used by this transaction.",
          },
          {
            paramName: "toAddress",
            type: "string",
            paramDescription: "The address the transaction was sent to.",
          },
          {
            paramName: "txHash",
            type: "string",
            paramDescription: "The hash of the transaction.",
          },
          {
            paramName: "value",
            type: "string",
            paramDescription: "The value transferred in the transaction.",
          },
        ],
      },
      {
        paramName: "stateBlockNumber",
        type: "integer",
        paramDescription: "The block number used for state simulation.",
      },
      {
        paramName: "totalGasUsed",
        type: "integer",
        paramDescription: "The total gas used by all transactions in the bundle.",
      },
    ],
  },
];

const USE_CASES = [
  "Test a transaction bundle's gas usage and outcome before submitting it",
  "Preview an arbitrage or liquidation bundle's profitability ahead of execution",
];

const CONSTRAINTS = [
  "txs must be pre-signed, RLP-encoded raw transactions",

];
