import TronMethod from "../../TronMethod/TronMethod";
import { GenericMethodPropsReplacing } from "../../GenericMethod/GenericMethod";
import {
  ReqResParam,
  RequestParamProp,
} from "../../GenericMethod/params/types";
import { CodeSnippetObject } from "../../GenericMethod/types";
import { DRPC_ENDPOINT_URL_TRON_PAID } from "./constants";

export function TronMethod_getnodeinfo(props: GenericMethodPropsReplacing) {
  return (
    <TronMethod
      method="getnodeinfo"
      network="tron"
      cu={20}
      description={"Returns version, configuration, and peer connection details for the queried node."}
      useCases={USE_CASES}
      constraints={CONSTRAINTS}
      codeSnippets={CODE_SNIPPETS}
      requestParams={REQUEST_PARAMS}
      requestParamsType="none"
      responseJSON={RESPONSE_JSON}
      responseParams={RESPONSE_PARAMS}
      responseParamsType="object"
      responseParamsDescription={
        "Returns version, configuration, and peer connection details for the queried node."
      }
      {...props}
    />
  );
}

const CODE_SNIPPETS: Array<CodeSnippetObject> = [
  {
    language: "shell",
    code: () => `curl --request POST \\
     --url ${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/getnodeinfo \\
     --header 'accept: application/json' \\
     --header 'content-type: application/json' \\
     --data '{}'`,
  },
  {
    language: "js",
    code: () => `const url = '${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/getnodeinfo';

const data = {};

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

const url = '${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/getnodeinfo';

const data = {};

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
    url := "${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/getnodeinfo"

    data := map[string]interface{}{}

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

url = '${DRPC_ENDPOINT_URL_TRON_PAID}/wallet/getnodeinfo'

data = {}

response = requests.post(url, headers={'Content-Type': 'application/json'}, data=json.dumps(data))
res = response.json()

print(res)
`,
  },
];

const RESPONSE_JSON = `{
  "activeConnectCount": 3,
  "beginSyncNum": 66987546,
  "block": "Num:66987565,ID:0000000003fe262d52bfa4b2814f816fd2e57af5b98a33d60d8630a03a908e0e",
  "solidityBlock": "Num:66987547,ID:0000000003fe261b9e6e8091f5bd92dc67816890ec4739f6fe5109ad7779120c",
  "currentConnectCount": 60,
  "passiveConnectCount": 57,
  "totalFlow": 0,
  "configNodeInfo": {
    "codeVersion": "4.8.1",
    "versionNum": "18636",
    "p2pVersion": "201910292",
    "listenPort": 18888,
    "discoverEnable": true,
    "maxConnectCount": 60,
    "supportConstant": true,
    "dbVersion": 2
  },
  "machineInfo": {
    "cpuCount": 16,
    "cpuRate": 0.06666666666666667,
    "totalMemory": 32726257664,
    "freeMemory": 232448000,
    "jvmTotalMemory": 18683133952,
    "jvmFreeMemory": 7802853696,
    "javaVersion": "1.8.0_291",
    "osName": "Linux 3.10.0-1160.49.1.el7.x86_64",
    "threadCount": 361,
    "deadLockThreadCount": 0
  }
}`;

const REQUEST_PARAMS: RequestParamProp = null;

const RESPONSE_PARAMS: ReqResParam[] = [
  {
  paramName: "activeConnectCount",
  type: "integer",
  paramDescription: "The number of outbound peer connections this node initiated itself.",
},
{
  paramName: "beginSyncNum",
  type: "integer",
  paramDescription: "The block height from which this node started its most recent sync cycle.",
},
{
  paramName: "block",
  type: "string",
  paramDescription: "The node's current latest block, formatted as \"Num:<height>,ID:<blockID>\".",
},
{
  paramName: "solidityBlock",
  type: "string",
  paramDescription: "The node's latest solidified (irreversible) block, formatted as \"Num:<height>,ID:<blockID>\".",
},
{
  paramName: "currentConnectCount",
  type: "integer",
  paramDescription: "The total number of peer connections currently established by this node.",
},
{
  paramName: "passiveConnectCount",
  type: "integer",
  paramDescription: "The number of inbound peer connections initiated by other nodes toward this one.",
},
{
  paramName: "totalFlow",
  type: "integer",
  paramDescription: "The cumulative amount of network traffic this node has processed.",
},
{
  paramName: "configNodeInfo",
  type: "object",
  childrenParamsType: "object",
  paramDescription: "Static configuration and version details for this node.",
  childrenParams: [
    {
      paramName: "codeVersion",
      type: "string",
      paramDescription: "The version of the java-tron software this node is running.",
    },
    {
      paramName: "versionNum",
      type: "string",
      paramDescription: "The internal numeric build identifier corresponding to this software version.",
    },
    {
      paramName: "p2pVersion",
      type: "string",
      paramDescription: "The version of the peer-to-peer networking protocol this node uses.",
    },
    {
      paramName: "listenPort",
      type: "integer",
      paramDescription: "The TCP port this node listens on for peer connections.",
    },
    {
      paramName: "discoverEnable",
      type: "boolean",
      paramDescription: "Whether this node participates in peer discovery to find new nodes on the network.",
    },
    {
      paramName: "maxConnectCount",
      type: "integer",
      paramDescription: "The maximum number of peer connections this node is configured to maintain.",
    },
    {
      paramName: "supportConstant",
      type: "boolean",
      paramDescription: "Whether this node supports executing read-only (constant) smart contract calls.",
    },
    {
      paramName: "dbVersion",
      type: "integer",
      paramDescription: "The version of the underlying database schema this node uses for its chain state.",
    },
  ],
},
{
  paramName: "machineInfo",
  type: "object",
  childrenParamsType: "object",
  paramDescription: "Hardware and runtime resource statistics for the machine hosting this node.",
  childrenParams: [
    {
      paramName: "cpuCount",
      type: "integer",
      paramDescription: "The number of CPU cores available to this node's host machine.",
    },
    {
      paramName: "cpuRate",
      type: "number",
      paramDescription: "The current fraction of CPU capacity being utilized, expressed as a value between 0 and 1.",
    },
    {
      paramName: "totalMemory",
      type: "integer",
      paramDescription: "The total physical memory available on this node's host machine, in bytes.",
    },
    {
      paramName: "freeMemory",
      type: "integer",
      paramDescription: "The amount of physical memory currently unused on this node's host machine, in bytes.",
    },
    {
      paramName: "jvmTotalMemory",
      type: "integer",
      paramDescription: "The total heap memory allocated to the Java Virtual Machine running this node, in bytes.",
    },
    {
      paramName: "jvmFreeMemory",
      type: "integer",
      paramDescription: "The amount of JVM heap memory currently unused, in bytes.",
    },
    {
      paramName: "javaVersion",
      type: "string",
      paramDescription: "The version of the Java runtime this node is executing on.",
    },
    {
      paramName: "osName",
      type: "string",
      paramDescription: "The name and version of the operating system running on this node's host machine.",
    },
    {
      paramName: "threadCount",
      type: "integer",
      paramDescription: "The number of threads currently active within this node's process.",
    },
    {
      paramName: "deadLockThreadCount",
      type: "integer",
      paramDescription: "The number of threads currently detected as deadlocked within this node's process.",
    },
  ],
}
];

const USE_CASES = [
  "Also available as GET",
  "Check a node's sync status and software version before relying on its data",
  "Monitor a node's peer count for health checks",
];

const CONSTRAINTS = [
  "Reflects only the specific node queried, not the network as a whole",
  "Also available under /walletsolidity/ for confirmed (solidified) data instead of the latest state",
];
