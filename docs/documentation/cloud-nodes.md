---
sidebar_position: 2
---

# Cloud Nodes

This document provides an overview of the Cloud Nodes, their purpose, configuration options, and usage.

---

## 1. BatchPutToSitewiseNode

**Description:**  
Sends a list of asset property values to IoT SiteWise. Each value is a timestamp-quality-value (TQV) data point.

**Raises:**  
`NodeException` for any error writing to SiteWise.

**Node Properties:**  
- **Name:** Batch Put To Sitewise  
- **Inputs:** 1  
- **Outputs:** 0  
- **Download Result:** No  

**Options:**  
| Parameter                | Type            | Default | Description                                    |
|--------------------------|-----------------|---------|------------------------------------------------|
| aws_access_key_id        | StringParameter |         | AWS server public key for SiteWise.           |
| aws_secret_access_key    | StringParameter |         | AWS server secret key for SiteWise.           |
| aws_region_name          | StringParameter |         | AWS region name for SiteWise.                 |
| exclude                  | StringParameter | ""      | Exclude JSON matching this JMESPath query.    |
| array_of_entries         | BooleanParameter| False   | Specify if input is an array of entries.      |

---

## 2. WriteJsonToAzureNode

**Description:**  
Writes the current data (JSON or CSV) to an Azure Blob Storage container.

**Raises:**  
`NodeException` for any error writing to Azure Blob Storage.

**Node Properties:**  
- **Name:** Write Json/CSV To Azure  
- **Inputs:** 1  
- **Outputs:** 0  
- **Download Result:** No  

**Options:**  
| Parameter                | Type             | Default     | Description                                    |
|--------------------------|------------------|-------------|------------------------------------------------|
| azure_connection_string  | StringParameter  | ""          | Azure storage connection string for Blob Storage.|
| container_name           | StringParameter  | ""          | Container name in Azure Blob Storage.         |
| filename                 | StringParameter  | ""          | Filename for the blob in the Azure container. |
| file_format              | SelectParameter  | "json"      | File format to write (JSON or CSV).           |
| write_mode               | SelectParameter  | "overwrite" | Overwrite or append to Azure Blob.            |
| exclude                  | StringParameter  | ""          | Exclude JSON matching this JMESPath query.    |

---

## 3. WriteJsonToGCPNode

**Description:**  
Writes the current data to a GCP bucket, with an option to convert the data to CSV.

**Raises:**  
`NodeException` for any error writing JSON or CSV file, or converting data from JSON.

**Node Properties:**  
- **Name:** Write Json/CSV To GCP  
- **Inputs:** 1  
- **Outputs:** 0  
- **Download Result:** No  

**Options:**  
| Parameter       | Type             | Default     | Description                                    |
|-----------------|------------------|-------------|------------------------------------------------|
| file            | FileParameter    |             | Google Cloud credentials file.                |
| bucket          | StringParameter  | ""          | GCP bucket name.                              |
| filename        | StringParameter  | ""          | Filename to upload to GCP bucket.             |
| write_mode      | SelectParameter  | "overwrite" | Overwrite or append to the GCP file.          |
| exclude         | StringParameter  | ""          | Exclude JSON matching this JMESPath query.    |
| output_format   | SelectParameter  | "json"      | Choose whether to upload as JSON or CSV.      |

---

## 4. WriteJsonToS3Node

**Description:**  
Writes the current JSON to an S3 bucket, with an option to convert the data to CSV.

**Raises:**  
`NodeException` for any error writing JSON or CSV file, or converting data from JSON.

**Node Properties:**  
- **Name:** Write Json/CSV To S3  
- **Inputs:** 1  
- **Outputs:** 0  
- **Download Result:** No  

**Options:**  
| Parameter            | Type             | Default     | Description                                    |
|----------------------|------------------|-------------|------------------------------------------------|
| aws_access_key_id    | StringParameter  |             | AWS server public key for S3.                 |
| aws_secret_access_key| StringParameter  |             | AWS server secret key for S3.                 |
| bucket               | StringParameter  | ""          | S3 bucket name.                               |
| filename             | StringParameter  | ""          | Filename for S3 bucket.                       |
| write_mode           | SelectParameter  | "overwrite" | Overwrite or append to S3 file.               |
| exclude              | StringParameter  | ""          | Exclude JSON matching this JMESPath query.    |
| output_format        | SelectParameter  | "json"      | Choose whether to upload as JSON or CSV.      |

---