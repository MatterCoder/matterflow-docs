---
sidebar_position: 2
---

# Create a Model

The Model editor tool is designed to help you create and manage models for data mapping from Matter enabled devices.

## Creating a New Model
To create a new model, follow these steps:

- Navigate to the main flow dashboard.
- Click on the "New Model" button. A model with a ramdom name will be created.
- Click on the model name.

### Renaming a Model
To rename a model, follow these steps:

Select the model you want to rename from the list of available models.
- Click on the "Rename" button.
- Enter the new name for your model in the provided input field.
- Click on the "Save" button.
- Your model will be renamed to the new name you provided.

### Defining your Model
To define a model using the Model Editor component, follow these steps:

- Open the Model Editor by clicking on your chosen model name.
- Click on the "+" button to create a new Data field.
- You can make data fields of type Number, String, Object, Boolean.
- If you want a nested object then click on th "+" button under an Object 
- Click on the "Save" button to save your model.
- Your model will be created and saved, and you can use it to map data from Matter enabled devices into the desired data structures.

That's it! You have successfully created a new model using the Model Editor. Now lets get map the Model to actual data.

## Create an Instance
Instances are created from the incoming data according to the Data Model specified in the Model.

To create a new instance, follow these steps:

- Navigate to the main flow dashboard.
- Click on the "New Instance" button. An instance with a ramdom name will be created.
- Click on the instance name.

### Mapping your instance
To map your instance to the model using the Instance Editor component, follow these steps:

- Open the Instance Editor by clicking on your chosen instance name.
- Select the Model from the drop-down.
- Use the JSON viewer to load data from Nodes (note: your flow must be saved first)
- Use JMESpath expression to isolate the required information from the node data
- Drag the JMESpath expression using the "+" icon to your Model field.
- Click on the "Save" button to save your instance.

That's it! You have successfully created a new instance using the Instance Editor. Happy mapping!