import EthereumMethod from "../../EthereumMethod/EthereumMethod";
import { GenericMethodPropsReplacing } from "../../GenericMethod/GenericMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import { DRPC_ENDPOINT_URL_ARC } from "./constants";

export function ArcMethod_arc_getVersion(props: GenericMethodPropsReplacing) {
  return (
    <EthereumMethod
      method="arc_getVersion"
      network="arc"
      cu={20}
      description={
        "Returns build and version information for the node's execution layer, including the git tag, commit hash, and cargo version"
      }
      useCases={USE_CASES}
      constraints={CONSTRAINTS}
      codeSnippets={CODE_SNIPPETS}
      requestParams={REQUEST_PARAMS}
      requestParamsType="none"
      responseJSON={RESPONSE_JSON}
      responseParams={RESPONSE_PARAMS}
      responseParamsType="object"
      responseParamsDescription={
        "Build and version information for the node's execution layer"
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
-d '{"method":"arc_getVersion",
    "params":[],
    "id":1,
    "jsonrpc":"2.0"}'
`,
  },
  {
    language: "js",
    code: () => `const url = '${DRPC_ENDPOINT_URL_ARC}';

const data = {
  jsonrpc: "2.0",
  method: "arc_getVersion",
  params: [],
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
  method: "arc_getVersion",
  params: [],
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
		"method":  "arc_getVersion",
		"params":  []interface{}{},
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
    "method": "arc_getVersion",
    "params": [],
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
        "method": "arc_getVersion",
        "params": [],
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
    "git_version": "v0.7.2",
    "git_commit": "a85368c0b0a7924e4c74035d195f96deb0291622",
    "git_short_hash": "a85368c0",
    "cargo_version": "v0.7.2 (a85368c0)"
  }
}`;

const REQUEST_PARAMS: RequestParamProp = [];

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
    paramDescription: "The node's build information.",
    childrenParamsType: "object",
    childrenParams: [
      {
        paramName: "git_version",
        type: "string",
        paramDescription: "The git tag of the release, or a short commit hash for untagged builds.",
      },
      {
        paramName: "git_commit",
        type: "string",
        paramDescription: "The full git commit hash the binary was built from.",
      },
      {
        paramName: "git_short_hash",
        type: "string",
        paramDescription: "The abbreviated commit hash.",
      },
      {
        paramName: "cargo_version",
        type: "string",
        paramDescription: "The cargo package version, with the short commit appended.",
      },
    ],
  },
];

const USE_CASES = [
  "Confirm which arc-node release a node is running before debugging unexpected behavior",
  "Verify a fix or new method has landed on a given node before relying on it",
  "Include node build metadata in health checks or support requests",
];

const CONSTRAINTS = [
  "Part of Arc's custom arc_* namespace, not the standard Ethereum JSON-RPC surface",
  "Takes no parameters",
  "rpc_modules does not list arc, since the namespace is registered outside the standard module registry; the method still works",
];
