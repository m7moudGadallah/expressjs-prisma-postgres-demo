# Express.js, Prisma, and PostgreSQL Demo

This is a personal practice project for experimenting with Prisma, Express.js, and PostgreSQL.

## Table of content

<!-- TOC -->

- [Express.js, Prisma, and PostgreSQL Demo](#expressjs-prisma-and-postgresql-demo)
  - [Table of content](#table-of-content)
  - [Getting Started](#getting-started)
    - [Clone the repository](#clone-the-repository)
    - [Install dependencies](#install-dependencies)
    - [Set up your PostgreSQL database](#set-up-your-postgresql-database)
    - [Update the database credentials](#update-the-database-credentials)
    - [Migrate and seed the database](#migrate-and-seed-the-database)
    - [Start the Server](#start-the-server)
    - [Testing](#testing)
  - [Usage](#usage)

<!-- /TOC -->

## Getting Started

### Clone the repository

```bash
  git clone <repository-url>
  cd expressjs-prisma-postgres-demo
```

**[&uarr; Top](#expressjs-prisma-and-postgresql-demo)**

### Install dependencies

```bash
  npm install
```

**[&uarr; Top](#expressjs-prisma-and-postgresql-demo)**

### Set up your PostgreSQL database

- Open psql shell and connect postgres database on your local machine

```bash
psql -h localhost -p 5432 -U postgres postgres
```

- Create database using psql

```sql
CREATE DATABASE your-db-name;

```

- Create a new user with a password on you postgresql server and give it rule as superuser

```sql
CREATE USER your-db-user WITH PASSWORD your-password SUPERUSER;
```

- Exit the `psql` shell

```psql
\q
```

**[&uarr; Top](#expressjs-prisma-and-postgresql-demo)**

### Update the database credentials

- In src/config/.env, provide the necessary database credentials:

  ```env
  DATABASE_URL=postgresql://<username>:<password>@localhost:5432/<DB>
  DATABASE_DEV=db_name
  DATABASE_PROD=db_name
  DATABASE_TEST=db_name
  DATABASE_USERNAME=user_name
  DATABASE_PASSWORD=password
  ```

- In `prisma/.env``, make sure the database URL matches your PostgreSQL database configuration:

  ```env
  # db_url like that 'postgresql://mo:test123@localhost:5432/prisma_demo'
  DATABASE_URL=db_url
  DATABASE_URL_TEST=db_url
  ```

**[&uarr; Top](#expressjs-prisma-and-postgresql-demo)**

### Migrate and seed the database

```bash
  npx prisma migrate dev
```

**[&uarr; Top](#expressjs-prisma-and-postgresql-demo)**

### Start the Server

- **_Development Mode_**: Run npm run `start:dev` to start the server with nodemon for automatic reloading during development.
- **_Production Mode_**: Run npm run `start:prod` to start the server in production mode.

**[&uarr; Top](#expressjs-prisma-and-postgresql-demo)**

### Testing

- Run tests using Jest:
  - `npm test`: Run tests in the testing environment.
  - `npm run test:coverage`: Run tests with code coverage report.

**[&uarr; Top](#expressjs-prisma-and-postgresql-demo)**

## Usage

- Use your preferred API client (e.g., Postman, curl) to interact with the API.
- Alternatively, you can use the [REST Client extension](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) in Visual Studio Code to test the API directly from the provided `rest.http` file. The `rest.http` file contains URLs to all endpoints, making it convenient to make requests and test your API.

> The npm test command will not only start the server but also run Jest for testing purposes.

**[&uarr; Top](#expressjs-prisma-and-postgresql-demo)**

**_Enjoy the demo!_**
