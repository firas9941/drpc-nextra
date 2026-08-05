export type TParamType =
  | "string"
  | "number"
  | "integer"
  | "boolean"
  | "array"
  | "object"
  | "array_of_objects"
  | "array_of_strings"
  | "array_of_arrays_of_strings"
  | "array_of_integers"
  | "int64"
  | "array_of_numbers"
  | "none"
  | "map[string]string"
  | "numeric"
  | "networth_period"
  | "nft_info"
  | "nullable"
  | "map[string]int64"
  | "enum"
  | "uint64";

export type CodeSnippetObject = {
  language: "js" | "shell" | "node" | "go" | "python" | "rust";
  code: () => string;
};
