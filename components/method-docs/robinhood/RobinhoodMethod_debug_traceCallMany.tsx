import EthereumMethod from "../../EthereumMethod/EthereumMethod";
import { GenericMethodPropsReplacing } from "../../GenericMethod/GenericMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import { DRPC_ENDPOINT_URL_ROBINHOOD } from "./constants";

export function RobinhoodMethod_debug_traceCallMany(props: GenericMethodPropsReplacing) {
  return (
    <EthereumMethod
      method="debug_traceCallMany"
      network="robinhood"
      cu={20}
      description={
        "Runs and traces multiple call bundles in sequence against the state of a given block, without broadcasting anything"
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
        "A nested array of call traces: the outer array is one entry per bundle, the inner array one entry per transaction in that bundle"
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
-d '{"method":"debug_traceCallMany",
    "params":[[{"transactions": [{"from": "0xcdd37ada79f589c15bd4f8fd2083dc88e34a2af2", "to": "0xdac17f958d2ee523a2206206994597c13d831ec7", "gas": "0xb59b", "value": "0x0", "data": "0xa9059cbb000000000000000000000000b29d1cef6da3262df35fdee71a176c62687e747d000000000000000000000000000000000000000000000000000000001e3f0ccc"}]}, {"transactions": [{"from": "0xe088776deabb472ffd2843e330e79c880a5f979e", "to": "0x70526cc7a6d6320b44122ea9d2d07670accc85a1", "value": "0x0", "data": "0x"}]}], {"blockNumber": "0x154bd82", "transactionIndex": -1}, {"tracer": "callTracer"}],
    "id":1,
    "jsonrpc":"2.0"}'
`,
  },
  {
    language: "js",
    code: () => `const url = '${DRPC_ENDPOINT_URL_ROBINHOOD}';

const data = {
  jsonrpc: "2.0",
  method: "debug_traceCallMany",
  params: [
    [
      {
        transactions: [
          {
            from: "0xcdd37ada79f589c15bd4f8fd2083dc88e34a2af2",
            to: "0xdac17f958d2ee523a2206206994597c13d831ec7",
            gas: "0xb59b",
            value: "0x0",
            data: "0xa9059cbb000000000000000000000000b29d1cef6da3262df35fdee71a176c62687e747d000000000000000000000000000000000000000000000000000000001e3f0ccc"
          }
        ]
      },
      {
        transactions: [
          {
            from: "0xe088776deabb472ffd2843e330e79c880a5f979e",
            to: "0x70526cc7a6d6320b44122ea9d2d07670accc85a1",
            value: "0x0",
            data: "0x"
          }
        ]
      }
    ],
    {
      blockNumber: "0x154bd82",
      transactionIndex: -1
    },
    {
      tracer: "callTracer"
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
  method: "debug_traceCallMany",
  params: [
    [
      {
        transactions: [
          {
            from: "0xcdd37ada79f589c15bd4f8fd2083dc88e34a2af2",
            to: "0xdac17f958d2ee523a2206206994597c13d831ec7",
            gas: "0xb59b",
            value: "0x0",
            data: "0xa9059cbb000000000000000000000000b29d1cef6da3262df35fdee71a176c62687e747d000000000000000000000000000000000000000000000000000000001e3f0ccc"
          }
        ]
      },
      {
        transactions: [
          {
            from: "0xe088776deabb472ffd2843e330e79c880a5f979e",
            to: "0x70526cc7a6d6320b44122ea9d2d07670accc85a1",
            value: "0x0",
            data: "0x"
          }
        ]
      }
    ],
    {
      blockNumber: "0x154bd82",
      transactionIndex: -1
    },
    {
      tracer: "callTracer"
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
		"method":  "debug_traceCallMany",
		"params":  []interface{}{
			[]interface{}{
				map[string]interface{}{
					"transactions": []interface{}{
						map[string]interface{}{
							"from": "0xcdd37ada79f589c15bd4f8fd2083dc88e34a2af2",
							"to": "0xdac17f958d2ee523a2206206994597c13d831ec7",
							"gas": "0xb59b",
							"value": "0x0",
							"data": "0xa9059cbb000000000000000000000000b29d1cef6da3262df35fdee71a176c62687e747d000000000000000000000000000000000000000000000000000000001e3f0ccc",
						},
					},
				},
				map[string]interface{}{
					"transactions": []interface{}{
						map[string]interface{}{
							"from": "0xe088776deabb472ffd2843e330e79c880a5f979e",
							"to": "0x70526cc7a6d6320b44122ea9d2d07670accc85a1",
							"value": "0x0",
							"data": "0x",
						},
					},
				},
			},
			map[string]interface{}{
				"blockNumber": "0x154bd82",
				"transactionIndex": -1,
			},
			map[string]interface{}{
				"tracer": "callTracer",
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
    "method": "debug_traceCallMany",
    "params": [
        [
            {
                "transactions": [
                    {
                        "from": "0xcdd37ada79f589c15bd4f8fd2083dc88e34a2af2",
                        "to": "0xdac17f958d2ee523a2206206994597c13d831ec7",
                        "gas": "0xb59b",
                        "value": "0x0",
                        "data": "0xa9059cbb000000000000000000000000b29d1cef6da3262df35fdee71a176c62687e747d000000000000000000000000000000000000000000000000000000001e3f0ccc"
                    }
                ]
            },
            {
                "transactions": [
                    {
                        "from": "0xe088776deabb472ffd2843e330e79c880a5f979e",
                        "to": "0x70526cc7a6d6320b44122ea9d2d07670accc85a1",
                        "value": "0x0",
                        "data": "0x"
                    }
                ]
            }
        ],
        {
            "blockNumber": "0x154bd82",
            "transactionIndex": -1
        },
        {
            "tracer": "callTracer"
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
        "method": "debug_traceCallMany",
        "params": [
            [
                {
                    "transactions": [
                        {
                            "from": "0xcdd37ada79f589c15bd4f8fd2083dc88e34a2af2",
                            "to": "0xdac17f958d2ee523a2206206994597c13d831ec7",
                            "gas": "0xb59b",
                            "value": "0x0",
                            "data": "0xa9059cbb000000000000000000000000b29d1cef6da3262df35fdee71a176c62687e747d000000000000000000000000000000000000000000000000000000001e3f0ccc"
                        }
                    ]
                },
                {
                    "transactions": [
                        {
                            "from": "0xe088776deabb472ffd2843e330e79c880a5f979e",
                            "to": "0x70526cc7a6d6320b44122ea9d2d07670accc85a1",
                            "value": "0x0",
                            "data": "0x"
                        }
                    ]
                }
            ],
            {
                "blockNumber": "0x154bd82",
                "transactionIndex": -1
            },
            {
                "tracer": "callTracer"
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
    [
      {
        "type": "CALL",
        "from": "0xcdd37ada79f589c15bd4f8fd2083dc88e34a2af2",
        "to": "0xdac17f958d2ee523a2206206994597c13d831ec7",
        "value": "0x0",
        "gas": "0xb59b",
        "gasUsed": "0x5d5a",
        "input": "0xa9059cbb000000000000000000000000b29d1cef6da3262df35fdee71a176c62687e747d000000000000000000000000000000000000000000000000000000001e3f0ccc",
        "output": "0x"
      }
    ],
    [
      {
        "type": "CALL",
        "from": "0xe088776deabb472ffd2843e330e79c880a5f979e",
        "to": "0x70526cc7a6d6320b44122ea9d2d07670accc85a1",
        "value": "0x0",
        "gas": "0x7fffffffffffadf7",
        "gasUsed": "0x0",
        "input": "0x",
        "output": "0x"
      }
    ]
  ]
}`;

const REQUEST_PARAMS: RequestParamProp = [
  {
    paramName: "bundles",
    type: "array_of_objects",
    paramDescription:
      "An array of call bundles, each executed in order against the state left by the previous bundle.",
    childrenParamsType: "object",
    childrenParams: [
      {
        paramName: "transactions",
        type: "array_of_objects",
        paramDescription: "The transaction call objects to execute in this bundle.",
      },
      {
        paramName: "blockOverride",
        type: "object",
        paramDescription: "(optional) Block header fields to override for this bundle.",
      },
    ],
  },
  {
    paramName: "simulationContext",
    type: "object",
    paramDescription: "The block and position to simulate against.",
    childrenParamsType: "object",
    childrenParams: [
      {
        paramName: "blockNumber",
        type: "string",
        paramDescription: "The block to use as the base state, in hex.",
      },
      {
        paramName: "transactionIndex",
        type: "integer",
        paramDescription:
          "The transaction position within that block to start from. Use -1 for the end of the block.",
      },
    ],
  },
  {
    paramName: "options",
    type: "object",
    paramDescription: "(optional) Tracer and state override options.",
    childrenParamsType: "object",
    childrenParams: [
      {
        paramName: "tracer",
        type: "string",
        paramDescription: "The tracer to use, such as callTracer or prestateTracer.",
      },
      {
        paramName: "tracerConfig",
        type: "object",
        paramDescription: "Configuration options for the selected tracer.",
      },
      {
        paramName: "stateOverrides",
        type: "object",
        paramDescription: "Per-address balance, nonce, code, or storage overrides.",
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
    paramDescription:
      "The outer array has one entry per bundle; each inner array has one call trace per transaction in that bundle.",
  },
];

const USE_CASES = [
  "Debug a bundle of transactions intended for private submission",
  "Preview how several draft transactions would interact against current state",
];

const CONSTRAINTS = [
  "Bundles are executed in order, each seeing the state left by the previous one",
  "Large bundles or many bundles at once can be slow to trace",
];
