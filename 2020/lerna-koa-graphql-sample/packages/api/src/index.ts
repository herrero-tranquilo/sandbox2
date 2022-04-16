import { router } from "./router";

import bodyparser = require("koa-bodyparser");

import Koa = require("koa");

const app = new Koa();

app.use(bodyparser());
app.use((ctx, next) => {
  ctx.body = "helloworld";
  return next();
});

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(8000, () => {
  console.log("server is running");
});
