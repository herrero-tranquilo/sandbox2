import { schema } from "./graphql";

import Router = require("@koa/router");
const { execute } = require("graphql-api-koa");

const router = new Router();

router.get("/hello", (ctx) => {
  ctx.body = "hello";
});
router.post("/graphql", execute({ schema }));

export { router };
