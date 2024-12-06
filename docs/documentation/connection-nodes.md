---
sidebar_position: 1
---

# Connection Nodes

Connection Nodes are designed to integrate external data sources or destinations into the workflow. They handle communication protocols and ensure data flows smoothly between your workflow and external systems.

Each Connection Node includes:
- **Inputs (Options):** Configurable parameters for defining the behavior and connection details of the node.
- **Execution Function:** Processes incoming data (if applicable) and produces an output in a structured JSON format.

If an error occurs during execution, the node raises a `NodeException` or a more specific exception, halting downstream processing.

---

## MQTT Connection (In)

### Description
The **MQTT Connection (In)** node reads data from an MQTT broker and injects it into the workflow. This node is ideal for workflows that consume real-time sensor data or events from IoT devices.

### Inputs (Options)
- **\`file\`** (\`FileParameter\`):  
  Specifies a test JSON file for simulating input data.  
  - **Default:** Empty string (\`""\`)  
  - **Description:** Path to a JSON file.

- **\`connection\`** (\`TextParameter\`):  
  Defines the MQTT broker connection settings.  
  - **Default:**  
    ```json
    {
      "host": "localhost",
      "port": 1883,
      "keepalive": 60,
      "username": "mqtt_user",
      "password": "mqtt_password"
    }
    ```  
  - **Description:** Connection settings, including host, port, and credentials.

- **\`input\`** (\`TextParameter\`):  
  Specifies the topics to subscribe to.  
  - **Default:**  
    ```json
    {
      "topics": ["sensor/temperature", "home/lights/kids_bedroom"]
    }
    ```  
  - **Description:** List of MQTT topics.

### Execution
The \`execute\` function reads data from the MQTT broker using the configured connection and topics. It processes this data into a JSON format for downstream nodes. If no valid data is found, or an error occurs, a \`NodeException\` is raised.

### Example Output
```json
{
  "temperature": 22.5,
  "humidity": 60
}
```

---

## Matter WS Connection (In)

### Description
The **Matter WS Connection (In)** node reads events from a Matter server WebSocket. It filters and processes the events based on configurable criteria.

### Inputs (Options)
- **\`file\`** (\`FileParameter\`):  
  Specifies a test JSON file for simulating input data.  
  - **Default:** Empty string (\`""\`)  
  - **Description:** Path to a JSON file.

- **\`accept_events\`** (\`SelectParameter\`):  
  Defines the events to accept from the WebSocket.  
  - **Options:** \`"*\` (all events), \`"fabric_id"\`, \`"result"\`, \`"event == 'attribute_updated'"\`, and more.  
  - **Default:** \`"*\`  
  - **Description:** Filters events to process.

### Execution
The \`execute\` function:
1. Reads data from the Matter server WebSocket.
2. Filters the data using the \`accept_events\` option.
3. Returns the filtered data in JSON format. If no matching event is found, a \`ResourceWarning\` is raised.

### Example Output
```json
{
  "event": "attribute_updated",
  "data": {
    "attribute": "temperature",
    "value": 23
  }
}
```

---

## MQTT Connection (Out)

### Description
The **MQTT Connection (Out)** node sends processed data to an MQTT broker. It is commonly used for publishing workflow results or sending commands to IoT devices.

### Inputs (Options)
- **\`connection\`** (\`TextParameter\`):  
  Specifies the MQTT broker connection settings.  
  - **Default:**  
    ```json
    {
      "host": "localhost",
      "port": 1883,
      "username": "mqtt_user",
      "password": "mqtt_password"
    }
    ```  
  - **Description:** Connection settings, including host, port, and credentials.

- **\`output\`** (\`TextParameter\`):  
  Defines the output message settings.  
  - **Default:**  
    ```json
    {
      "Topic": "sensors/response",
      "QoS": 1,
      "Named Root": "sensor_data",
      "Retain": false,
      "Breakup Arrays": false,
      "Template": "{temperature}",
      "AWS IoT Core": false
    }
    ```  
  - **Description:** Topic, QoS, and other message settings.

- **\`exclude\`** (\`StringParameter\`):  
  JMESPath query to exclude specific messages from being published.  
  - **Default:** Empty string (\`""\`)  
  - **Description:** Exclude messages that match this query.

### Execution
The \`execute\` function:
1. Applies the \`exclude\` filter to incoming data.
2. Publishes the filtered data to the specified MQTT topic using the configured settings.
3. Handles asynchronous MQTT communication.

### Example Output
```json
{
  "message": "Data published successfully"
}
```

---

### Notes
- Errors during execution (e.g., connection failure, data exclusion mismatch) will raise a \`NodeException\` with details about the error.
- Test files are used to simulate input data during configuration or debugging.

---