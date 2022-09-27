## Web Authentication Demo

Demo code for my Web Authentication series, see https://www.dlford.io/series/web-authentication/

## How to Run this Demo

1. Copy `api/.env.example` to `api/.env`
2. Start a PostgreSQL instance, e.g. with Docker
    ```
    docker run --name web-auth-demo-db -e POSTGRES_PASSWORD=changeme -e POSTGRES_USER=webauthuser -p 5432:5432 -d postgres
    ```
3. Generate the Prisma API from schema
    ```
    npm --prefix ./api run prisma:generate
    ```
4. Run database migrations
    ```
    npm --prefix ./api run prisma:migrate:dev
    ```
5. Start the app
    ```
    npm start
    ```