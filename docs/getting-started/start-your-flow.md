---
sidebar_position: 3
---

# Start your flow

Once you have created you flow to process data you will want to run your flow as a process. Matterflow uses Supervisord to manage processes in the background. Supervisord is responsible for starting flow processes, responding to start/stop commands from the user interface, restarting crashed or exited subprocesseses.

## Start / Stop flow

When you have tested your flow and after you have saved it, you can click the "Start" button to start your flow. Using the Manage Processes button you can see how your flow process is running. You can see the logging from stdout or errors from stderr. If you flow process start successfully, you will see the **traffic lights** beside your flow name turning to Green

You can stop your flow process by clicking the "Stop" button or click on the traffic lights. The process will be stopped but not deleted. 

Please note, the process may be restarted automatically when other flows processes are created.
