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

### Set up and run the AI plant detection backend

1. Navigate to the `scan_plant_backend` folder:
    ```bash
    cd ../scan_plant_backend
    ```
2. Install the necessary Python dependencies:
    ```bash
    pip install -r requirements.txt
    ```
3. Start the AI plant detection backend server:
    ```bash
    python app.py
    ```
