Recruitment Web - Backend
This is the backend of the recruitment system, built with NestJS and using MongoDB. The system supports user management, companies, roles, JWT authentication, and Swagger integration for API documentation.

Technologies:

- NestJS: Powerful framework based on TypeScript.

- MongoDB & Mongoose: NoSQL database with powerful ORM.

- JWT & Passport: User authentication.

- Swagger: Generate API documentation.

- Throttler: Limit request speed.

- Mailer: Send email.

- Helmet & Cookie-Parser: API security.

Installation

System Requirements

Node.js >= 16

MongoDB Compass

# Clone repository

git clone https://github.com/trungnguyen592/Recruitment_Web_BE.git
cd Recruitment_Web_BE

# Install dependencies

npm install

Environment configuration

Create a .env file in the root directory and add the configuration information:

MONGO_URI=mongodb://localhost:27017/recruitment
JWT_SECRET=your_secret_key
PORT=3000

# Run development mode

npm run start:dev

# Build project

npm run build

# Run production mode

npm run start:prod

Run migration (TypeORM)

# Generate migration

npm run migration:generate --name=MigrationName

# Run migration

npm run migration:run

# Revert migration

npm run migration:revert

# Run unit tests

npm run test

# Run e2e test

npm run test:e2e

# Check coverage

npm run test:cov

API Documentation

API documentation created with Swagger.

After running the server, visit http://localhost:3000/api to view the API documentation.

# docker run -d --name mongodb-container -p 27017:27017 -v D:/mongodb_data:/data/db mongo

# docker run -- name postgres-db -p 5432:5432 -e POSTGRES_USER=user_demo -e POSTGRES_PASSWORD=pg_strong_password -e POSTGRES_DB=demo_db -d postgres
