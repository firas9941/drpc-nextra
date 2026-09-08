import EthereumMethod from "../../EthereumMethod/EthereumMethod";
import { GenericMethodPropsReplacing } from "../../GenericMethod/GenericMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import { DRPC_ENDPOINT_URL_ROBINHOOD } from "./constants";

export function RobinhoodMethod_debug_traceBlock(props: GenericMethodPropsReplacing) {
  return (
    <EthereumMethod
      method="debug_traceBlock"
      network="robinhood"
      cu={20}
      description={
        "Replays a block that is supplied as raw RLP bytes and returns a trace of every transaction it contains"
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
        "An array of call traces, one per transaction in the supplied block"
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
-d '{"method":"debug_traceBlock",
    "params":["0xf90277f90208a05a41d0e66b4120775176c09fcf39e7c0520517a13d2b57b18d33d342df038bfca01dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d4934794e6a7a1d47ff21b6321162aea7c6cb457d5476bca...", {"tracer": "callTracer", "tracerConfig": {"onlyTopCall": false}}],
    "id":1,
    "jsonrpc":"2.0"}'
`,
  },
  {
    language: "js",
    code: () => `const url = '${DRPC_ENDPOINT_URL_ROBINHOOD}';

const data = {
  jsonrpc: "2.0",
  method: "debug_traceBlock",
  params: [
    "0xf90277f90208a05a41d0e66b4120775176c09fcf39e7c0520517a13d2b57b18d33d342df038bfca01dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d4934794e6a7a1d47ff21b6321162aea7c6cb457d5476bca...",
    {
      tracer: "callTracer",
      tracerConfig: {
        onlyTopCall: false
      }
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
  method: "debug_traceBlock",
  params: [
    "0xf90277f90208a05a41d0e66b4120775176c09fcf39e7c0520517a13d2b57b18d33d342df038bfca01dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d4934794e6a7a1d47ff21b6321162aea7c6cb457d5476bca...",
    {
      tracer: "callTracer",
      tracerConfig: {
        onlyTopCall: false
      }
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
		"method":  "debug_traceBlock",
		"params":  []interface{}{
			"0xf90277f90208a05a41d0e66b4120775176c09fcf39e7c0520517a13d2b57b18d33d342df038bfca01dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d4934794e6a7a1d47ff21b6321162aea7c6cb457d5476bca...",
			map[string]interface{}{
				"tracer": "callTracer",
				"tracerConfig": map[string]interface{}{
					"onlyTopCall": false,
				},
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
    "method": "debug_traceBlock",
    "params": [
        "0xf90277f90208a05a41d0e66b4120775176c09fcf39e7c0520517a13d2b57b18d33d342df038bfca01dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d4934794e6a7a1d47ff21b6321162aea7c6cb457d5476bca...",
        {
            "tracer": "callTracer",
            "tracerConfig": {
                "onlyTopCall": False
            }
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
        "method": "debug_traceBlock",
        "params": [
            "0xf90277f90208a05a41d0e66b4120775176c09fcf39e7c0520517a13d2b57b18d33d342df038bfca01dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d4934794e6a7a1d47ff21b6321162aea7c6cb457d5476bca...",
            {
                "tracer": "callTracer",
                "tracerConfig": {
                    "onlyTopCall": false
                }
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
}`;

const REQUEST_PARAMS: RequestParamProp = [
  {
    paramName: "blockRlp",
    type: "string",
    paramDescription: "The RLP-encoded block to trace, as a hexadecimal string.",
  },
  {
    paramName: "tracer",
    type: "object",
    paramDescription: "(optional) The tracer configuration for the call.",
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
        childrenParamsType: "object",
        childrenParams: [
          {
            paramName: "onlyTopCall",
            type: "boolean",
            paramDescription:
              "If true, only the top-level call is traced, and sub-calls are skipped.",
          },
        ],
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
    paramDescription: "The call trace for each transaction in the block, in order.",
    childrenParamsType: "object",
    childrenParams: [
      {
        paramName: "type",
        type: "string",
        paramDescription: "The type of call (e.g. CALL, DELEGATECALL, CREATE).",
      },
      {
        paramName: "from",
        type: "string",
        paramDescription: "The sender's address.",
      },
      {
        paramName: "to",
        type: "string",
        paramDescription: "The receiver's address.",
      },
      {
        paramName: "value",
        type: "string",
        paramDescription: "The value transferred, in Wei.",
      },
      {
        paramName: "gas",
        type: "string",
        paramDescription: "The gas provided for the call.",
      },
      {
        paramName: "gasUsed",
        type: "string",
        paramDescription: "The gas used by the call.",
      },
      {
        paramName: "input",
        type: "string",
        paramDescription: "The call data sent.",
      },
      {
        paramName: "output",
        type: "string",
        paramDescription: "The data returned by the call.",
      },
    ],
  },
];

const USE_CASES = [
  "Trace a locally assembled block before it becomes canonical",
  "Test how a hypothetical block would execute against current state",
  "Debug block-building in a rollup or private network",
];

const CONSTRAINTS = [
  "The block's parent must already be present in the node's database",
  "Large blocks with many transactions can be slow to trace",
];
