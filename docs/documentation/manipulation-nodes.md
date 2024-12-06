---
sidebar_position: 4
---

#  Manipulation Nodes

Manipulation Node classes implement processing for JSON-like data. These nodes operate on JSON input streams, transforming, filtering, or aggregating data.

There is a growing number of Manipulation nodes 
- Combiner Node
- Filter Node
- Mapping Node
- Merge JSON Node
- Size Buffer Node
- Time Buffer Node
- Translate Attributes Node
- Unflatten Attributes Node

## Combiner Node

Combines two JSON inputs into a combined list and outputs them as JSON.

### Inputs

- Number of Inputs: 2
- Input Type: JSON-like Python objects

### Output

Output Type: JSON string combining both inputs in a list. Example:

```json
[
  { "key1": "value1" },
  { "key2": "value2" }
]
```

## Filter Node

Filters JSON data based on provided filtering conditions using JMESPath expressions.

### Inputs

- Number of Inputs: 1
- Input Type: JSON-like Python object

Configuration Options

- filter: A string representing a JMESPath query string. Default: '*'.
- include: A boolean flag. Determines if filtered matches should be included. Default: True.
- data: A boolean flag. If true, return only filtered data; otherwise, return original data. Default: False.

### Output

    Output Type: JSON string
    Example:
```json
{
  "filtered": "true"
}
```

## Mapping Node

Maps data using a JMESPath query provided in the mapping settings.

### Inputs

- Number of Inputs: 1
- Input Type: JSON-like Python object

Configuration Options

- modelmapping: select a configured Instance.

### Output

- Output Type: JSON string
- Example:

```json
{
  "key1": "value1",
  "key2": "value2"
}
```

### Merge JSON Node

Merges two JSON payloads based on JMESPath expressions.

### Inputs

- Number of Inputs: 2
- Input Type: JSON-like Python objects
- Input JSON1: Base JSON
- Input JSON2: Data to be merged into JSON1

Configuration Options

- jmespath_expr_for_matching: A string representing the JMESPath matching expression. Default: '*'.
- jmespath_expr_for_insertion: A string representing where in JSON1 the merge will occur. Default: '*'.
- append: A boolean. Whether to append data or replace data. Default: True.

### Output

- Output Type: JSON string
- Example:

```json
{
  "key1": "value1",
  "key2": "value2"
}
```

## Size Buffer Node

Buffers data until the file size reaches a configured byte size limit.

### Inputs

- Number of Inputs: 1
- Input Type: JSON-like Python object

Configuration Options

- bufferSize: Size in bytes to buffer before triggering processing. Default: 0.

### Output

- Output Type: JSON string
- Returns the buffer contents when the buffer size is met.

## Time Buffer Node

Buffers data until a configured duration has elapsed.

### Inputs

- Number of Inputs: 1
- Input Type: JSON-like Python object

Configuration Options

- bufferTime: Time to buffer in seconds. Default: 0.

### Output

- Output Type: JSON string
- Example:

```json
{
  "key1": "value1",
  "key2": "value2"
}
```

### Translate Attributes Node

Translates incoming JSON data into cluster/attribute mappings based on processing rules.

### Inputs

- Number of Inputs: 1
- Input Type: JSON-like Python object

# Output

- Output Type: JSON string
- Example:

```json
{
  "key1": "translatedValue1",
  "key2": "translatedValue2"
}
```

## Unflatten Attributes Node

Reorganizes flattened JSON paths into their original nested structure for easier interpretation.

### Inputs

- Number of Inputs: 1
- Input Type: JSON-like Python object

### Output

- Output Type: JSON string
- Example:

```json
{
  "nested": {
    "key1": "value1",
    "key2": "value2"
  }
}
```
