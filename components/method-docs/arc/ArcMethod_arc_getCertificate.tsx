import EthereumMethod from "../../EthereumMethod/EthereumMethod";
import { GenericMethodPropsReplacing } from "../../GenericMethod/GenericMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import { DRPC_ENDPOINT_URL_ARC } from "./constants";

export function ArcMethod_arc_getCertificate(props: GenericMethodPropsReplacing) {
  return (
    <EthereumMethod
      method="arc_getCertificate"
      network="arc"
      cu={20}
      description={
        "Returns the Malachite BFT consensus commit certificate for a block height, including the round, the block hash, and the validator signatures that committed it"
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
        "The commit certificate for the requested block height"
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
-d '{"method":"arc_getCertificate",
    "params":[55000000],
    "id":1,
    "jsonrpc":"2.0"}'
`,
  },
  {
    language: "js",
    code: () => `const url = '${DRPC_ENDPOINT_URL_ARC}';

const data = {
  jsonrpc: "2.0",
  method: "arc_getCertificate",
  params: [
    55000000
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
  method: "arc_getCertificate",
  params: [
    55000000
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
		"method":  "arc_getCertificate",
		"params":  []interface{}{
			55000000,
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
    "method": "arc_getCertificate",
    "params": [
        55000000
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
        "method": "arc_getCertificate",
        "params": [
            55000000
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
    "height": 55000000,
    "round": 0,
    "block_hash": "0x9a9ecf9348af3c128d63dcb4555b4586b9e9a503c67220029602a93aed14c76e",
    "signatures": [
      {
        "address": "0x2012459eddb529fcd8429ba73006a6340ff05232",
        "signature": "P3GaOsv6kJE9IyJtaBBjFvebQtAEttCGKalkwbk9VeVy7GxK1l3S/GhATET24iKbyY8SDmwvVMQjPaDOCz+nAQ=="
      },
      {
        "address": "0x66a99d2834cf369d900de5da88ad2944ccb12e70",
        "signature": "+UX4HW+dJaI0nAKB+3Ah3g6iR31jAYx62wFbufrNE7zttMYYaz6NBtXNX8Zc3kDaEWEO2T+IldaD927I865FCw=="
      }
    ]
  }
}`;

const REQUEST_PARAMS: RequestParamProp = [
  {
    paramName: "height",
    type: "integer",
    paramDescription: "The block height to get the commit certificate for. Must be 1 or greater.",
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
    paramDescription: "The commit certificate.",
    childrenParamsType: "object",
    childrenParams: [
      {
        paramName: "height",
        type: "integer",
        paramDescription: "The block height the certificate commits.",
      },
      {
        paramName: "round",
        type: "integer",
        paramDescription: "The consensus round in which the block was committed. 0 means the first round.",
      },
      {
        paramName: "block_hash",
        type: "string",
        paramDescription: "The hash of the committed block.",
      },
      {
        paramName: "signatures",
        type: "array_of_objects",
        paramDescription: "The validator signatures that form the commit.",
        childrenParamsType: "object",
        childrenParams: [
          {
            paramName: "address",
            type: "string",
            paramDescription: "The validator's address.",
          },
          {
            paramName: "signature",
            type: "string",
            paramDescription: "The validator's base64-encoded signature.",
          },
        ],
      },
    ],
  },
];

const USE_CASES = [
  "Confirm finality for a cross-chain bridge or exchange crediting a deposit",
  "Let a relayer verify validator quorum itself instead of waiting out a confirmation count",
  "Audit which validators signed a given block and in which consensus round",
];

const CONSTRAINTS = [
  "Part of Arc's custom arc_* namespace, not the standard Ethereum JSON-RPC surface",
  "height must be 1 or greater",
  "rpc_modules does not list arc, since the namespace is registered outside the standard module registry; the method still works",
];
