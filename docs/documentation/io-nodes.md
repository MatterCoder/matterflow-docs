---
sidebar_position: 3
---

# IO Nodes

This document provides detailed information about the available **I/O Nodes**. Each node is described with its functionality, options, and exceptions.

---

## Nodes

### 1. ReadCsvNode

**Description:**  
Reads a CSV file into a pandas DataFrame.

**Options:**  
- `file` (FileParameter): The CSV file to read.  
- `sep` (StringParameter): Column delimiter (default: `,`).  
- `header` (StringParameter): Row number containing column names (0-indexed, default: `infer`).  

**Exceptions:**  
- Raises `NodeException` for any error during file reading or DataFrame conversion.

---

### 2. ReadJsonNode

**Description:**  
Reads a JSON file into a workflow.

**Options:**  
- `file` (FileParameter): The JSON file to read.  
- `multiline` (BooleanParameter): Indicates if the file contains multiple JSON objects (default: `False`).  
- `pollingTime` (IntegerParameter): Polling interval in seconds (default: `0`).  

**Exceptions:**  
- Raises `NodeException` for any error during file reading or JSON parsing.

---

### 3. TableCreatorNode

**Description:**  
Accepts raw-text CSV input to create data tables.

**Options:**  
- `input` (TextParameter): The raw text input (default: empty string).  
- `sep` (StringParameter): Column delimiter (default: `,`).  
- `header` (StringParameter): Row number containing column names (default: `infer`).  

**Exceptions:**  
- Raises `NodeException` for any error during data table creation.

---

### 4. WriteCsvNode

**Description:**  
Writes the current DataFrame to a CSV file.

**Options:**  
- `file` (StringParameter): The filename for the CSV file.  
- `sep` (StringParameter): Column delimiter (default: `,`).  
- `index` (BooleanParameter): Indicates whether to write the index as a column (default: `True`).  

**Exceptions:**  
- Raises `NodeException` for any error during file writing or data conversion.

---

### 5. WriteJsonToCsvNode

**Description:**  
Writes JSON data to a CSV file. The JSON must be a single object or a list of objects with the same structure.

**Options:**  
- `file` (StringParameter): The filename for the CSV file.  
- `write_mode` (SelectParameter): Choose between `overwrite` or `append` (default: `append`).  
- `exclude` (StringParameter): Exclude JSON matching a specific JMESPath query (default: empty).  

**Exceptions:**  
- Raises `NodeException` for any error during file writing or data conversion.

---

### 6. WriteJsonNode

**Description:**  
Writes JSON data to a file.

**Options:**  
- `file` (StringParameter): The filename for the JSON file.  
- `write_mode` (SelectParameter): Choose between `overwrite` or `append` (default: `append`).  
- `exclude` (StringParameter): Exclude JSON matching a specific JMESPath query (default: empty).  

**Exceptions:**  
- Raises `NodeException` for any error during file writing or data conversion.

---

**Note:** Ensure proper configuration of each node before execution to avoid unexpected errors.