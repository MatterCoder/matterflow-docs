---
sidebar_position: 1
---

# Installation Guide

Matterflow offers multiple installation options to fit your environment. 

There are several ways to deploy Matterflow:

- Using a Home Assistant add-on
- In the Matterflow Docker container
- Or using the Github Repo to deploy your own setup

Follow the steps below to set it up.

---

## Home Assistant Add-on Installation

The recommended way to install Matterflow is as a Home Assistant add-on:

1. Navigate to **Settings** > **Add-ons** in your Home Assistant dashboard.
2. Go to the **Add-on store** in Home Assistant.
3. Click **⋮ → Repositories**, and paste the following URL:
   
[https://github.com/MatterCoder/addon-matterflow](https://github.com/MatterCoder/addon-matterflow)

Click **Add → Close**, or click the button below to add the repository directly:  
[![Add Repository](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2FMattercoder%2Faddon-matterflow)

4. Configure the add-on in the options panel as needed.
5. Start the add-on and ensure it’s running without errors.

---

## Docker Installation

It is possible to run this application as a docker container on amd64 using
but you will need to know the IP address of your main docker interface
Find the docker0 ip address using  ip a | grep docker0

To run Matterflow in a Docker environment:

```
docker run --rm --add-host="localhost:172.17.0.1" -p 4173:4173 -p 9001:9001 -v /data:/data:rw  -v /config:/config oideibrett/image-amd64-matterflow:0.0.1
```

Its essential that you have a Matter Server running and this can be run in Docker using

```
docker run -d \
  --name matter-server \
  --restart=unless-stopped \
  --security-opt apparmor=unconfined \
  -v /data:/data \
  -v /run/dbus:/run/dbus:ro \
  --network=host \
  ghcr.io/home-assistant-libs/python-matter-server:stable --storage-path /data --paa-root-cert-dir /data/credentials --bluetooth-adapter 0
```

## Local Github based Installation

You can install and run the Matterflow application from Github. This is useful if you want to make changes and contribute to the Matterflow open source project.

### Server (Django)

1. Clone the githib repo and change directory into matterflow:
[https://github.com/MatterCoder/matterflow](https://github.com/MatterCoder/matterflow)

```
git clone https://github.com/MatterCoder/matterflow.git
cd api
```

2. Install and activate python3.12 `virtual environment` 

```
/usr/bin/python3.12 -m venv ./venv
source venv/bin/activate
```

***On Mac OS***
Installing and activating python3.12 on Mac OS

Ensure you install python3.12

```
brew install python@3.12
```

Ensure you use the correct python binary path when activating the environment

```
/usr/local/bin/python3 -m venv ./venv
source venv/bin/activate
```
        
23. Install dependencies
In the `api` directory with `requirements.txt`.
```
pip install -r requirements.txt
```
4. Setup your local environment

- Create environment file with app secret 
```
echo "SECRET_KEY='TEMPORARY SECRET KEY'" > mf/.environment
```

4.1. (Optionally) set location of db-sqlite3 file and tmp config files. Otherwise defaults to /tmp

- Create environment variable your specific db path 
```
echo "DIR_PATH='/data'" >> mf/.environment
```
5. Supervisor - This project requires supervisord to control unix based processes which run the flows in the background. 

5.1. Start/Restart the supervisor

Cd to the `api` directory with `supervisord.conf` file
```
supervisord -c ./supervisord.conf 
```

5.2. Check the status of the supervisor

```
supervisorctl status
```

Note: there should be one process running that is specified in the supervisor_confs folder and defined in the foo.conf file

6. Start dev server from app root
```
cd mf
python manage.py migrate
python manage.py runserver
```
    

### Web Client 
In a separate terminal window, perform the following steps to start the
front-end.

1. Install Prerequisites
```
cd web
npm install
```
2. Start dev server
```
npm run dev
```

By default, your default browser should open on the main
application page. If not, you can go to [http://localhost:5173/](http://localhost:5173/)
in your browser.

