
# PonchoPay Checkout API

## Overview

PonchoPay Checkout API is designed to manage a simple checkout system. This project allows you to create users, products, manage payments, and view payment statuses. The API is built with **Node.js**, **TypeScript**, **PostgreSQL**, and **Sequelize** and is containerized using **Docker**.

## Features

- **User Management**: Create users.
- **Product Management**: Create and list products.
- **Payment System**: Create payments, update payment statuses, and view payments by status.
- **Status Filtering**: Filter payments by status.
- **Total Payments**: Calculate the total amount of all completed payments.

## Assignment Requirements

The task involves creating an API to manage a simple checkout system. The following features were implemented to meet the assignment's requirements:

- Model products & associated payments in a PostgreSQL database.
- **Product Model** includes:
  - `name`: String
  - `description`: String
  - `price`: Decimal
  - `stock level`: Integer
- **Payments Model** includes:
  - `amount`: Decimal
  - `status`: Enum ('initialized', 'user set', 'payment taken', 'complete')
  - `product`: Associated with a product
  - `payment method`: String
  - `user`: Associated with a user
- **API Endpoints**:
  - **Create User**: Add users before making payments.
  - **List Products**: Returns a list of all products.
  - **Create Payment**: Creates a payment and progresses through its stages (`initialized`, `user set`, `payment taken`, `complete`).
  - **List Payments**: Returns a list of all payments.
  - **Filter Payments by Status**: Returns payments filtered by a given status.
  - **Total Completed Payments**: Returns the total of all completed payments.

## Installation

### Prerequisites

- **Node.js** v18 or above
- **PostgreSQL** v13 or above
- **Docker** (for containerized deployment)
- **GitHub Actions** (for CI/CD pipeline)

### Running the Application Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/Sathesh-Ram/ponchopay-api
   cd ponchopay-checkout-api
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up your environment variables for local development by creating a `.env` file in the root directory:
   ```bash
   PORT=4000
   POSTGRES_USER=ponchouser
   POSTGRES_PASSWORD=ponchopass
   POSTGRES_DB=ponchopay_db
   DATABASE_URL=postgres://ponchouser:ponchopass@localhost:5432/ponchopay_db
   ```

4. Start the PostgreSQL database and ensure the connection works.

5. Run the application locally:
   ```bash
   npm run dev
   ```

### Running the Application with Docker

Note: The project contains a **Dockerfile** and **docker-compose.yml** for containerized deployment. However, Docker was attempted but encountered issues. Due to time constraints, I was unable to resolve the issues, and the application was primarily verified in the local development environment.


1. Build and start the services using Docker Compose:
   ```bash
   docker compose up --build
   ```

2. Access the API at `http://localhost:4000`.

### Running Tests

1. To run the unit tests with Jest, use the following command:
   ```bash
   npm test
   ```

### CI/CD with GitHub Actions

The project is set up to automatically run tests on every push to the `main` branch.

- GitHub Actions Workflow:
   - Automatically runs unit tests.
   
You can view the CI pipeline status directly on GitHub under the Actions tab.

### API Endpoints

#### Users

- **POST** `/api/users`: Create a new user.

#### Products

- **POST** `/api/products`: Create a new product.
- **GET** `/api/products`: List all products.

#### Payments

- **POST** `/api/payments`: Create a new payment.
- **PUT** `/api/payments/:id/status`: Update payment status.
- **GET** `/api/payments`: List all payments.
- **GET** `/api/payments?status=<status>`: Filter payments by status.
- **GET** `/api/payments/total`: Get total amount of completed payments.

## Notes on Docker

Docker Attempted: Docker configuration exists, but issues were encountered during testing. The system is tested and works locally. The Docker setup may require further refinement if containerization is pursued in the future.
