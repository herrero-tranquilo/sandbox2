## Document

@author kimyongkuk

@date 2020-04-15

nestjs 샘플

```bash
$ yarn global add @nestjs/cli
$ nest new nest-sample
```

Error: Cannot find module '@nestjs\schematics\package.json'

[이슈 링크](https://github.com/nestjs/nest-cli/issues/613)

```bash
$ yarn global add @nestjs/schematics
```

```bash
$ nest new nest-sample
```

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
