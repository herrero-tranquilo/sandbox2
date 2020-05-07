#### monorepo

- [x] npm init
- [x] Add README
- [x] Add .gitignore
- [x] monorepo... package.json
  ```json
   "private": true,
    "workspaces": [
        "packages/*"
    ],
  ```
- [x] yarn add -W -D lerna
- [x] yarn lerna init
- [x] cd packages & mkdir api & yarn init
- [x] rename api packages to @graphqlsample/api
- [x] yarn add -W -D typescript ts-node
- [x] add src/index.ts
  - yarn ts-node packages/api/src/index.ts

#### eslint

- [x] eslint, prettier

  - yarn add -W -D eslint
  - yarn add -W -D prettier eslint-plugin-prettier eslint-config-prettier
  - yarn eslint --init
  - eslintrc custom
  - eslint add prettier
    ```json
      extends: ["plugin:react/recommended", "airbnb", "plugin:prettier/recommended"],
      plugins: ["react", "@typescript-eslint", "prettier"],
      rules: {
         "prettier/prettier": "error",
      }
    ```
  - Add .prettierrc

#### nodemon

- [x] add -D nodemon
  ```bash
    ./packages/api
      $yarn add -D nodemon
  ```
- [x] add nodemon.json & add package.json scripts:{ "dev": "" }

#### tsconfig

- [x] npx tsc --init
- [x] custom tsconfig.json
- [x] add packages tsconfig.json & add dist .gitignore

#### koa packages/api

- [x] yarn add koa
- [x] yarn add -D @types/koa

#### koa/router packages/api

- [x] yarn add @koa/router
- [x] yarn add -D @types/koa\_\_router @types/node

#### graphql packages/api

- [x] yarn add graphql graphql-api-koa
- [x] yarn add -D @types/graphql-api-koa
- [x] yarn add koa-bodyparser
- [x] yarn add -D @types/koa-bodyparser
- [x] POST http://localhost:8000/graphql

  request

  ```json
  { "query": "query hello{hello}" }
  ```

  response

  ```json
  {
    "data": {
      "hello": "hello!"
    }
  }
  ```
