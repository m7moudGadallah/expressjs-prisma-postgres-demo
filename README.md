# Express.js, Prisma, and PostgreSQL Demo

This is a personal practice project for experimenting with Prisma, Express.js, and PostgreSQL.

## Table of content

<!-- TOC -->

- [Express.js, Prisma, and PostgreSQL Demo](#expressjs-prisma-and-postgresql-demo)
  - [Table of content](#table-of-content)
  - [Getting Started](#getting-started)
  - [Usage](#usage)

<!-- /TOC -->

## Getting Started

**1. Clone the repository**

```bash
  git clone <repository-url>
  cd expressjs-prisma-postgres-demo
```

**[&uarr; Top](#expressjs-prisma-and-postgresql-demo)**

**2. Install dependencies**

```bash
  npm install
```

**[&uarr; Top](#expressjs-prisma-and-postgresql-demo)**

**3. Set up your PostgreSQL database**

**4. Update the database credentials**

- In src/config/.env, provide the necessary database credentials:

  ```
  DATABASE_URL=postgresql://<username>:<password>@localhost:5432/<DB>
  DATABASE_DEV=db_name
  DATABASE_PROD=db_name
  DATABASE_TEST=db_name
  DATABASE_USERNAME=user_name
  DATABASE_PASSWORD=password
  ```

- In `prisma/.env``, make sure the database URL matches your PostgreSQL database configuration:
  ```
  # db_url like that 'postgresql://mo:test123@localhost:5432/prisma_demo'
  DATABASE_URL=db_url
  DATABASE_URL_TEST=db_url
  ```

**[&uarr; Top](#expressjs-prisma-and-postgresql-demo)**

**5.Migrate and seed the database**

```bash
  npx prisma migrate dev
```

**[&uarr; Top](#expressjs-prisma-and-postgresql-demo)**

**6. Start the Server**

- **_Development Mode_**: Run npm run `start:dev` to start the server with nodemon for automatic reloading during development.
- **_Production Mode_**: Run npm run `start:prod` to start the server in production mode.

**[&uarr; Top](#expressjs-prisma-and-postgresql-demo)**

**Testing**

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
