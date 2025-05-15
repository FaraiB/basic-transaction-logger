# Transaction Logger

## Overview

The Transaction Logger is a simple web application that allows users to log their card transactions (description and amount) and view a history of these transactions. It consists of a React frontend for the user interface and an Express.js backend with Node.js for the API. The data is currently stored in-memory on the backend (for development purposes).

## Technologies Used

**Frontend:**

- [React](https://react.dev/) - JavaScript library for building user interfaces
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) - Package manager
- CSS (or your chosen styling method)

**Backend:**

- [Node.js](https://nodejs.org/) - JavaScript runtime environment
- [Express](https://expressjs.com/) - Web application framework for Node.js
- [body-parser](https://www.npmjs.com/package/body-parser) - Middleware to handle request body parsing
- [cors](https://www.npmjs.com/package/cors) - Middleware to enable Cross-Origin Resource Sharing

## Setup Instructions

Follow these steps to get the Transaction Logger running on your local machine:

**Backend:**

1.  Navigate to the `card-logger-backend` directory:
    ```bash
    cd card-logger-backend
    ```
2.  Install the backend dependencies:
    ```bash
    npm install
    # or
    yarn install
    ```
3.  Start the backend server:
    ```bash
    node server.js
    ```
    You should see a message in your terminal indicating that the server is listening on port 5001 (or your configured port).

**Frontend:**

1.  Navigate to the `card-logger-frontend` directory:
    ```bash
    cd card-logger-frontend
    ```
2.  Install the frontend dependencies:
    ```bash
    npm install
    # or
    yarn install
    ```
3.  Start the frontend development server:
    ```bash
    npm start
    ```
    This command will usually open the application in your web browser at `http://localhost:3000` (or a similar address).

## API Endpoints

The backend provides the following API endpoints:

- **`GET /api/transactions`**:

  - Description: Retrieves a list of all logged transactions.
  - Response: Returns a JSON array of transaction objects, where each object has `description` and `amount` properties.

- **`POST /api/transactions`**:
  - Description: Logs a new transaction.
  - Request Body: Accepts a JSON object with `description` (string) and `amount` (number) properties.
  - Response: Returns a JSON object with a `message` indicating success (`{"message": "Transaction logged successfully"}`) and a `201 Created` status code. Returns a `400 Bad Request` status code with an error message if the `description` or `amount` is missing.

## Known Limitations (Development Stage)

- **In-Memory Data Storage:** Transaction data is currently stored in memory on the backend. This means that if the server restarts, all logged transactions will be lost. A database integration (e.g., using PostgreSQL, MongoDB) would be the next step for persistent storage.
- **Basic Validation:** Input validation is currently basic on both the frontend and backend. More comprehensive validation could be added (e.g., for the format of the amount, length of description).
- **No User Authentication:** There is no user authentication or authorization implemented. All transactions are currently treated as a single global list.
