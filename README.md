# Botanify Backend

This repository contains the backend services for the Botanify application. The backend is divided into two main parts:
1. Backend for fetching data from MySQL: `botanify_mysql_backend`
2. Backend for AI-based plant name detection: `scan_plant_backend`

## Main Application Repository

To set up and run the Botanify application, please refer to the main application repository: [Botanify Application Repository](https://github.com/rfqagst/botanify)

## Prerequisites
- Node.js installed
- Python installed
- MySQL installed and running

## Setup and Installation

### Clone the repository

```bash
git clone https://github.com/rfqagst/botanify_backend.git
cd botanify_backend
```

### Set up the MySQL database

1. Start MySQL on your computer.
2. Import the provided SQL dump into your MySQL database using the `botanify.sql` file:
    ```bash
    mysql -u your_username -p your_database_name < path_to_botanify.sql
    ```

### Set up and run the MySQL backend

1. Navigate to the `botanify_mysql_backend` folder:
    ```bash
    cd botanify_mysql_backend
    ```
2. Install the necessary dependencies:
    ```bash
    npm install
    ```
3. Start the MySQL backend server:
    ```bash
    node index.js
    ```

## How to Run the Flask Backend for AI Plant Detection

### Set up and run the AI plant detection backend

1. Navigate to the `scan_plant_backend` folder:
    ```bash
    cd ../scan_plant_backend
    ```
    
#### 1. Create a virtual environment
Create a new virtual environment with:

```bash
python -m venv new-env
``` 

#### 2. Activate the virtual environment
Activate the virtual environment with:

- Windows

```bash
.\/new-env/Scripts/activate.bat 
```
Or
```bash
.\/new-env/Scripts/activate.ps1 
```

- Linux

```bash
source new-env/bin/activate
```

#### 3. Install required modules
Install the required modules listed in `requirements.txt` with:

```bash
pip install -r requirements.txt
```
Wait until the installation is complete.

#### 4. Create a `.env` file and add necessary credentials
Create a `.env` file based on the example file `.env.example`.
Fill in the `.env` file with your `API_KEY` and `SCORING_URL`:

```
API_KEY=YOUR_API_KEY # Find this in your IBM Cloud profile settings
SCORING_URL=YOUR_MODEL_DEPLOYMENT_URL # Find this in your model deployments in IBM Studio
```

#### 5. Run the Flask Backend
Run the Flask backend with:

```bash
python app.py
```
Wait until it starts, the application will be live at `localhost:5000`.
