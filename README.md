# Project Management System 📋

A full-featured project management system built with a client-server architecture. The client is developed using **Next.js** and **TypeScript**, while the server leverages **Node.js**, **Prisma**, and **Bun** for backend logic and database interaction. The project is deployed on **AWS**.

---

## Project Structure

```
project-management/
├── client/ # Frontend application built with Next.js
│ ├── .env.local # Environment variables for the client
│ ├── .gitignore # Git ignore file
│ ├── .next/ # Next.js build output directory
│ ├── .prettierrc # Prettier configuration file
│ ├── app/ # Core application components and pages
│ ├── constants/ # Reusable constant values
│ ├── eslint.config.mjs # ESLint configuration file
│ ├── lib/ # Shared utility functions and modules
│ ├── next-env.d.ts # TypeScript environment declaration
│ ├── next.config.ts # Next.js configuration file
│ ├── package.json # Package information and dependencies
│ ├── postcss.config.mjs # PostCSS configuration file
│ ├── public/ # Public assets like images and icons
│ ├── README.md # Documentation for the client
│ ├── store/ # Redux Toolkit store configuration
│ ├── tailwind.config.ts # Tailwind CSS configuration file
│ ├── tsconfig.json # TypeScript configuration file
│ └── types/ # TypeScript type definitions
├── server/ # Backend application built with Node.js
│ ├── .env # Environment variables for the server
│ ├── .gitignore # Git ignore file
│ ├── aws-ec2-instructions.md # AWS EC2 deployment guide
│ ├── bun.lockb # Bun lock file
│ ├── ecosystem.config.js # PM2 process manager configuration
│ ├── package.json # Package information and dependencies
│ ├── prisma/ # Prisma schema and migrations
│ ├── README.md # Documentation for the server
│ ├── src/ # Main server code and API logic
│ └── tsconfig.json # TypeScript configuration file
```

---

## Client

The frontend is built using **Next.js**, **TypeScript**, and styled with **Tailwind CSS**. It leverages **Redux Toolkit** for state management and incorporates modern libraries for dynamic and efficient UI components.

### Key Directories

- `app/`: Core application components and pages.
- `constants/`: Reusable constant values.
- `lib/`: Utility functions and shared modules.
- `store/`: State management using Redux Toolkit.
- `types/`: TypeScript type definitions for enhanced code safety.

---

## Server

The backend is powered by **Node.js**, **Prisma**, and **Bun**. It ensures efficient API handling and database management using **PostgreSQL**.

### Key Directories

- `prisma/`: Contains Prisma schema and migration files for database interaction.
- `src/`: Main application logic, including routes and controllers.

---

## Getting Started

### Prerequisites

- **Bun** (v1.0+)
- **PostgreSQL**
- **Node.js**

### Installation

1. Clone the repository:

   ```
   git clone <repository-url>
   ```

2. Install dependencies for the client and server:
   - **Client**
     cd project-management/client
     ```
     bun install
     ```
   - **Server**
     cd ../server
     ```
     bun install
     ```

3 Set up environment variables:

- For the client, create a .env.local file and add necessary variables.
- For the server, create a .env file and configure database connection settings for PostgreSQL.

4. Run the development servers:
   - In the client directory
   ```
   bun dev
   ```
   - In the server directory
   ```
   bun dev
   ```

## Usage

- Development
  - Access the client application at: http://localhost:3000
  - The server will run at: http://localhost:4000
- Deployment
  - App link: https://main.d2wvw6k7wxmiaq.amplifyapp.com/

## Technology Stack

- Client
  - Next.js
  - TypeScript
  - Tailwind CSS
  - Redux Toolkit
  - MUI (Material-UI)
  - Axios
  - Recharts
- Server
  - Node.js
  - Prisma
  - PostgreSQL
  - Helmet (for security)
- Deployment
  - AWS EC2
  - AWS Cognito
  - AWS Amplify
  - AWS RDS
  - AWS API Gateway
  - AWS Lambda
  - AWS S3
