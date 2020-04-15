var express = require("express");
var router = express.Router();
const { user } = require("../models");
/* GET users listing. */
router.get("/", function(req, res, next) {
  user
    .findAll()
    .then(_ => res.status(200).json(_))
    .catch(err => console.log(err));
});
router.post("/", function(req, res, next) {
  const { body } = req;
  console.log(body);
});
module.exports = router;
