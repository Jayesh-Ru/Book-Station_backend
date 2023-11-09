# Simple CRUD app made using MEVN stack

### MEVN - MongoDB, Express.js, Vue.js, Node.js

Live demo of the app:
https://crud-mevn-app.herokuapp.com/

# Node.js CRUD App

This is a simple CRUD (Create, Read, Update, Delete) application built with Node.js, Express, and MongoDB.

## Features

- Create a new record
- Retrieve all records
- Retrieve a single record by ID
- Update a record by ID
- Delete a record by ID

## API Endpoints

### 1. Create a new record
```http
POST /
```

### 2. Retrieve all records
```http
GET /
```
### 3. Retrieve a single record by ID

```http
GET /:id
```
### 4. Update a record by ID

```http
PUT /:id
```

### 5. Delete a record by ID

```http
DELETE /:id
```

Setup

Instructions
Clone the repository:
``` bash
    git clone https://github.com/Jayesh-Ru/Book-Station_backend.git
    cd node-crud-app
```

Install dependencies:
``` bash
  npm install
```
Set up your env:
``` env
    MONGODB_URI=mongodb://localhost:27017/your-database-name
    PORT=8000
```
Start the application:
``` bash
    npm run server
```

The app should now be running at http://localhost:8000.

## Frontend Setup

To set up the frontend, follow these steps:

1. Clone the frontend repository:

    ```bash
    git clone https://github.com/Jayesh-Ru/Book-Station_frontend.git
    ```

2. Install dependencies:

    ```bash
    npm i
    ```

3. Set up environment variables:

   ``` Ensure your environment is properly configured. ```


4. Set Proxy in 'vue.config.js' to the url where our backend is running:
    ```
        target: "http://localhost:8000"
    ```   
5. Start the application:

    ```bash
    npm run serve
    ```

This will initiate the frontend application. Make sure to follow these steps to run the Book-Station frontend successfully.






