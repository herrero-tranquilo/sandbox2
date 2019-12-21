var createError = require("http-errors");
var express = require("express");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var { PostRouter, UserRouter } = require("./src/routes");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/post", PostRouter);
app.use("/user", UserRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // res.locals.message = err.message;
  // res.locals.error = req.app.get("env") === "development" ? err : {};
  // res.status(err.status || 500);
  console.error("Err:", err);
  // res.json({ error: err });
});

module.exports = app;
