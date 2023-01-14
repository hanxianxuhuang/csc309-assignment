const express = require("express");
const router = express.Router();
const a1 = require("./student/a1");
const a3 = require("./student/a3");

router.use("/", function (req, res, next) {
    next();
})

router.use("/a1", a1);
router.use("/a3", a3);

module.exports = router;