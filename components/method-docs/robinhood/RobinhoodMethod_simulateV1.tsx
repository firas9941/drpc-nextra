import EthereumMethod from "../../EthereumMethod/EthereumMethod";
import { GenericMethodPropsReplacing } from "../../GenericMethod/GenericMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import { DRPC_ENDPOINT_URL_ROBINHOOD } from "./constants";

export function RobinhoodMethod_simulateV1(props: GenericMethodPropsReplacing) {
  return (
    <EthereumMethod
      method="eth_simulateV1"
      network="robinhood"
      cu={20}
      description={
        "Simulates one or more blocks of calls against a given state, with optional block and state overrides, without broadcasting anything"
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
        "An array of simulated blocks, each including per-call results such as return data, gas used, and status"
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
-d '{"method":"eth_simulateV1",
    "params":[{"blockStateCalls": [{"blockOverrides": {"baseFeePerGas": "0x9"}, "stateOverrides": {"0xc000000000000000000000000000000000000000": {"balance": "0x4a817c800"}}, "calls": [{"from": "0xc000000000000000000000000000000000000000", "to": "0xc000000000000000000000000000000000000001", "maxFeePerGas": "0xf", "value": "0x1"}]}], "validation": true, "traceTransfers": true}],
    "id":1,
    "jsonrpc":"2.0"}'
`,
  },
  {
    language: "js",
    code: () => `const url = '${DRPC_ENDPOINT_URL_ROBINHOOD}';

const data = {
  jsonrpc: "2.0",
  method: "eth_simulateV1",
  params: [
    {
      blockStateCalls: [
        {
          blockOverrides: {
            baseFeePerGas: "0x9"
          },
          stateOverrides: {
            "0xc000000000000000000000000000000000000000": {
              balance: "0x4a817c800"
            }
          },
          calls: [
            {
              from: "0xc000000000000000000000000000000000000000",
              to: "0xc000000000000000000000000000000000000001",
              maxFeePerGas: "0xf",
              value: "0x1"
            }
          ]
        }
      ],
      validation: true,
      traceTransfers: true
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
  method: "eth_simulateV1",
  params: [
    {
      blockStateCalls: [
        {
          blockOverrides: {
            baseFeePerGas: "0x9"
          },
          stateOverrides: {
            "0xc000000000000000000000000000000000000000": {
              balance: "0x4a817c800"
            }
          },
          calls: [
            {
              from: "0xc000000000000000000000000000000000000000",
              to: "0xc000000000000000000000000000000000000001",
              maxFeePerGas: "0xf",
              value: "0x1"
            }
          ]
        }
      ],
      validation: true,
      traceTransfers: true
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
		"method":  "eth_simulateV1",
		"params":  []interface{}{
			map[string]interface{}{
				"blockStateCalls": []interface{}{
					map[string]interface{}{
						"blockOverrides": map[string]interface{}{
							"baseFeePerGas": "0x9",
						},
						"stateOverrides": map[string]interface{}{
							"0xc000000000000000000000000000000000000000": map[string]interface{}{
								"balance": "0x4a817c800",
							},
						},
						"calls": []interface{}{
							map[string]interface{}{
								"from": "0xc000000000000000000000000000000000000000",
								"to": "0xc000000000000000000000000000000000000001",
								"maxFeePerGas": "0xf",
								"value": "0x1",
							},
						},
					},
				},
				"validation": true,
				"traceTransfers": true,
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
    "method": "eth_simulateV1",
    "params": [
        {
            "blockStateCalls": [
                {
                    "blockOverrides": {
                        "baseFeePerGas": "0x9"
                    },
                    "stateOverrides": {
                        "0xc000000000000000000000000000000000000000": {
                            "balance": "0x4a817c800"
                        }
                    },
                    "calls": [
                        {
                            "from": "0xc000000000000000000000000000000000000000",
                            "to": "0xc000000000000000000000000000000000000001",
                            "maxFeePerGas": "0xf",
                            "value": "0x1"
                        }
                    ]
                }
            ],
            "validation": True,
            "traceTransfers": True
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
        "method": "eth_simulateV1",
        "params": [
            {
                "blockStateCalls": [
                    {
                        "blockOverrides": {
                            "baseFeePerGas": "0x9"
                        },
                        "stateOverrides": {
                            "0xc000000000000000000000000000000000000000": {
                                "balance": "0x4a817c800"
                            }
                        },
                        "calls": [
                            {
                                "from": "0xc000000000000000000000000000000000000000",
                                "to": "0xc000000000000000000000000000000000000001",
                                "maxFeePerGas": "0xf",
                                "value": "0x1"
                            }
                        ]
                    }
                ],
                "validation": true,
                "traceTransfers": true
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
  "result": [
    {
      "number": "0x1530a5e",
      "hash": "0x105b451ea332730fe2d316d983b9a406b6d4a022ee6e83e02bcae17a94f8c87b",
      "gasUsed": "0x5208",
      "calls": [
        {
          "returnData": "0x",
          "gasUsed": "0x5208",
          "status": "0x1",
          "logs": []
        }
      ]
    }
  ]
}`;

const REQUEST_PARAMS: RequestParamProp = [
  {
    paramName: "simulation",
    type: "object",
    paramDescription: "The simulation request.",
    childrenParamsType: "object",
    childrenParams: [
      {
        paramName: "blockStateCalls",
        type: "array_of_objects",
        paramDescription: "One entry per simulated block.",
        childrenParamsType: "object",
        childrenParams: [
          {
            paramName: "blockOverrides",
            type: "object",
            paramDescription: "(optional) Block header fields to override for this block.",
          },
          {
            paramName: "stateOverrides",
            type: "object",
            paramDescription: "(optional) Per-address balance, nonce, code, or storage overrides.",
          },
          {
            paramName: "calls",
            type: "array_of_objects",
            paramDescription: "The calls to execute in this simulated block, in order.",
          },
        ],
      },
      {
        paramName: "validation",
        type: "boolean",
        paramDescription:
          "(optional) If true, validates each call as a real transaction would be (nonce, balance, etc.).",
      },
      {
        paramName: "traceTransfers",
        type: "boolean",
        paramDescription:
          "(optional) If true, emits synthetic ERC20-style transfer logs for native value transfers.",
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
    type: "array_of_objects",
    paramDescription: "One simulated block per entry in blockStateCalls, in the same order.",
    childrenParamsType: "object",
    childrenParams: [
      {
        paramName: "number",
        type: "string",
        paramDescription: "The simulated block number.",
      },
      {
        paramName: "hash",
        type: "string",
        paramDescription: "The simulated block hash.",
      },
      {
        paramName: "gasUsed",
        type: "string",
        paramDescription: "Total gas used across all calls in the simulated block.",
      },
      {
        paramName: "calls",
        type: "array_of_objects",
        paramDescription: "The result of each call, in the order they were given.",
        childrenParamsType: "object",
        childrenParams: [
          {
            paramName: "returnData",
            type: "string",
            paramDescription: "The data returned by the call.",
          },
          {
            paramName: "gasUsed",
            type: "string",
            paramDescription: "The gas used by this call.",
          },
          {
            paramName: "status",
            type: "string",
            paramDescription: "0x1 if the call succeeded, 0x0 if it reverted.",
          },
          {
            paramName: "logs",
            type: "array_of_objects",
            paramDescription: "Event logs emitted by this call.",
          },
        ],
      },
    ],
  },
];

const USE_CASES = [
  "Preview the full effect of a complex transaction before signing it",
  "Model how a sequence of calls behaves under custom block overrides",
];

const CONSTRAINTS = [
  "Each entry in blockStateCalls is simulated as its own block, in order",
  "Heavier than a single eth_call; scale usage to how many calls and blocks are simulated",
];
