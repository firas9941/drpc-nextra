import EthereumMethod from "../../EthereumMethod/EthereumMethod";
import { GenericMethodPropsReplacing } from "../../GenericMethod/GenericMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import { DRPC_ENDPOINT_URL_ROBINHOOD } from "./constants";

export function RobinhoodMethod_debug_accountRange(props: GenericMethodPropsReplacing) {
  return (
    <EthereumMethod
      method="debug_accountRange"
      network="robinhood"
      cu={20}
      description={
        "Enumerates accounts in the state trie at a given block, returning balances, nonces, code hashes, and optionally code and storage, with cursor-based paging"
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
        "The account range dump for the requested page"
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
-d '{"method":"debug_accountRange",
    "params":["0xc3007d", "0x0", 5, true, true, true],
    "id":1,
    "jsonrpc":"2.0"}'
`,
  },
  {
    language: "js",
    code: () => `const url = '${DRPC_ENDPOINT_URL_ROBINHOOD}';

const data = {
  jsonrpc: "2.0",
  method: "debug_accountRange",
  params: [
    "0xc3007d",
    "0x0",
    5,
    true,
    true,
    true
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
  method: "debug_accountRange",
  params: [
    "0xc3007d",
    "0x0",
    5,
    true,
    true,
    true
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
		"method":  "debug_accountRange",
		"params":  []interface{}{
			"0xc3007d",
			"0x0",
			5,
			true,
			true,
			true,
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
    "method": "debug_accountRange",
    "params": [
        "0xc3007d",
        "0x0",
        5,
        True,
        True,
        True
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
        "method": "debug_accountRange",
        "params": [
            "0xc3007d",
            "0x0",
            5,
            true,
            true,
            true
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
    "root": "0x9f73691f6dabca4f0a99b05d0a701995506aa311dcaa9ce9833d6f4ca474c162",
    "accounts": {
      "0x0599d52c37544c07605f470e5e20c1b266de8588": {
        "balance": "1000000000000000000",
        "nonce": 4,
        "root": "0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421",
        "codeHash": "0xc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a47"
      }
    },
    "next": "0x290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e56"
  }
}`;

const REQUEST_PARAMS: RequestParamProp = [
  {
    paramName: "blockNrOrHash",
    type: "string",
    paramDescription:
      "Block number in hex, a block tag, or a block hash to enumerate accounts at.",
    paramEnum: [
      {
        value: "latest",
        isDefault: true,
        description: "The most recent block in the blockchain (default).",
      },
      {
        value: "earliest",
        description: "The first block, also known as the genesis block.",
      },
      {
        value: "pending",
        description:
          "Transactions that have been broadcast but not yet included in a block.",
      },
    ],
  },
  {
    paramName: "start",
    type: "string",
    paramDescription:
      "The paging start key (hashed address), as hex bytes. Use 0x00 to start from the beginning.",
  },
  {
    paramName: "maxResults",
    type: "integer",
    paramDescription:
      "The maximum number of accounts to return in this page (capped, typically at 256).",
  },
  {
    paramName: "nocode",
    type: "boolean",
    paramDescription: "If true, excludes contract bytecode from the result.",
  },
  {
    paramName: "nostorage",
    type: "boolean",
    paramDescription: "If true, excludes storage data from the result.",
  },
  {
    paramName: "incompletes",
    type: "boolean",
    paramDescription:
      "If true, includes accounts whose address preimage is not known to the node.",
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
    paramDescription: "The state dump for the requested page.",
    childrenParamsType: "object",
    childrenParams: [
      {
        paramName: "root",
        type: "string",
        paramDescription: "The state root hash of the block.",
      },
      {
        paramName: "accounts",
        type: "object",
        paramDescription: "A map of account address to account data.",
        childrenParamsType: "object",
        childrenParams: [
          {
            paramName: "balance",
            type: "string",
            paramDescription: "The account balance, in Wei.",
          },
          {
            paramName: "nonce",
            type: "integer",
            paramDescription: "The account nonce.",
          },
          {
            paramName: "root",
            type: "string",
            paramDescription: "The account's storage root hash.",
          },
          {
            paramName: "codeHash",
            type: "string",
            paramDescription: "The hash of the account's contract code.",
          },
          {
            paramName: "code",
            type: "string",
            paramDescription: "The contract bytecode (omitted when nocode is true).",
          },
          {
            paramName: "storage",
            type: "object",
            paramDescription: "The account's storage slots (omitted when nostorage is true).",
          },
        ],
      },
      {
        paramName: "next",
        type: "string",
        paramDescription:
          "The next paging start key. Pass this as start on the following call to continue iterating.",
      },
    ],
  },
];

const USE_CASES = [
  "Walk the full state trie of a block for state-export or migration tooling",
  "Build a custom indexer that needs every account at a block",
  "Audit account balances across the chain at a fixed height",
];

const CONSTRAINTS = [
  "maxResults is capped (typically 256 accounts per page)",
  "Requires an archive node for blocks other than recent ones",
];
