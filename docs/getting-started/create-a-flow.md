---
sidebar_position: 1
---
# Create a Flow

Learn how to create an automated workflow in Matterflow to gather, transform, and send data from Matter-enabled IoT devices to cloud or AI applications.

---

## Step-by-Step Guide to Creating a Flow

1. **Create a New Flow**  
   Start by creating a new flow in the Matterflow interface. This will open the flow canvas.

2. **Add a Node to the Canvas**  
   Drag a node, such as the **Matter WS connection (In)** node, from the left panel onto the canvas.

3. **Configure the Node**  
   - Click the **cog icon** on the node to open its configuration panel.  
   - Add the required details for the node to function.  
   - Optionally, load **test data** (available in the `data` folder of the [GitHub repository](https://github.com/MatterCoder/matterflow)) to perform a "dry-run" of the flow.

4. **Test the Flow**  
   - Click the **Test button** at the top of the canvas.  
   - This allows you to verify if the flow is working as expected.

5. **Inspect Node Outputs**  
   - Click the **JSON brackets icon** to open the inspection panel at the bottom of the screen.  
   - Reload the data to view the node outputs. The inspection panel provides multiple views:
     - **Raw Data**  
     - **JSON View**  
     - **Table View** (if applicable)

6. **Add Additional Nodes**  
   - Drag and drop additional nodes (e.g., manipulation nodes) to the canvas.  
   - Connect these nodes to create a chain.  

7. **Inspect Outputs for Each Node**  
   - Configure and test each node sequentially.  
   - Use the inspection panel to verify the outputs before proceeding.

8. **Finalize the Flow**  
   - Include a final **I/O node** to write transformed data to a file or send it to the cloud.  

9. **Error Handling**  
   - If a node encounters an error, downstream nodes will not run.  
   - Errors are visible in the inspection panel, making it easy to debug.

10. **Start the Flow**  
    - Once satisfied, **start the flow process**.  
    - The background process will run continuously, processing data in real-time as it is received.

---

## Node Categories

Explore the available nodes for building your flows. Each category has a dedicated guide:

- [**Cloud Nodes**](../documentation/cloud-nodes.md): Transfer data to cloud platforms such as AWS, Azure, and Google Cloud.  
- [**Connection Nodes**](../documentation/connection-nodes.md): Connect to local Matter devices or MQTT servers.  
- [**Flow Control Nodes**](../documentation/flow-control-nodes.md): Define common variables accessible across all nodes in a flow.  
- [**I/O Nodes**](../documentation/io-nodes.md): Read from or write to local files (JSON, CSV, etc.).  
- [**Manipulation Nodes**](../documentation/manipulation-nodes.md): Transform and modify data.  
- [**Visualization Nodes**](../documentation/visualization-nodes.md): Display data visually, if possible.  

---

With Matterflow, building and testing flows is intuitive, enabling you to process data in minutes. Explore the available nodes and unleash the power of your IoT devices!
