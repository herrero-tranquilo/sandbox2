var express = require("express");
var router = express.Router();
const { UserCrl } = require("../controllers");
/* GET users listing. */
router.get("/", function(req, res, next) {
  UserCrl.getUsers()
    .then(_ => res.status(200).json(_))
    .catch(err => console.log(err));
});

module.exports = router;
