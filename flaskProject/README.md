# WorkShop backend
Backend application for Workshop.

A REST service on python Flask framework.

# Local development

## Requirements

- [Python 3.8](https://www.python.org/downloads/) or higher
- [Docker](https://docs.docker.com/engine/install/) and [Docker Compose](https://docs.docker.com/compose/install/)

## Run on local machine
Create a virtualenv

```shell script
virtualenv venv
```

Activate virtualenv

```shell script
source venv/bin/activate
```
Start docker-compose services

```shell script
sudo docker-compose up -d
```

For Database initialization

```
flask db init
```
flask run
Install  dependencies


```shell script
python3 -m pip install -r requirements.txt
```

Copy the `.env.example` file to `.env` and change configuration to appropriate values

```shell script
cp .env.example .env
```

Run the migrations

```shell script
flask db upgrade
```

Start the application locally

```shell script
flask run
```

## Running tests

```shell
python3 -m unittest discover tests
```

```shell
python -m coverage run -m unittest discover
```

```shell
python -m coverage html
```

For creating a new migration

```shell script
flask db migrate -m "migration message"
```
Acc ID = 0f38bce1-edc4-4400-8462-90e10d57968f
SecKey = efffeef1-9fe9-4c9d-8e68-8ace457e7e9b
IntKey = 82487e49-cf70-46dc-9ed2-f4349097a143
code =
https://account-d.docusign.com/oauth/auth?response_type=code&scope=signature&client_id=82487e49-cf70-46dc-9ed2-f4349097a143&redirect_uri=http://127.0.0.1:5000/documents/code

## Environment variables
| Variable                       | Description                                                   |
| -------------                  |:-------------:                                                |
| Some var                       | description .                                                 |
