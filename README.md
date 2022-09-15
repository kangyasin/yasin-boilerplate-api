# Nest JS Boilerplate

## Jalankan aplikasi

```bash
git clone https://github.com/kangyasin/yasin-boilerplate-api my-app
cd my-app/
cp env-example .env
```

```bash
npm install

npm run migration:run

npm run seed:run

npm run start:dev
```

## URL

- Swagger: http://localhost:3000/docs

## Login Admin
- email : yasin@kangyasin.com
- password : demo123

## Database

Generate migration

```bash
npm run migration:generate -- src/database/migrations/CreateNameTable 
```

Run migration

```bash
npm run migration:run
```

Revert migration

```bash
npm run migration:revert
```

Drop all tables in database

```bash
npm run schema:drop
```

Run seed

```bash
npm run seed:run
```
