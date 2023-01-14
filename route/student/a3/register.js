const express = require("express");
const router = express.Router();
const client = require("../../../setup/db");
const rate_limit = require("../../../setup/rate_limit");

router.post("/register", (req, res) => {
    if (!("username" in req.body) || req.body["username"] === "") {
        res.status(400).json({ message: "Username is not valid." });
    } else {
        let sql_register = "INSERT INTO csc309.users VALUES ($1)";
        client.query(sql_register, [req.body["username"]], (err, pgRes) => {
            if (err) {
                if (err.code === "23505") {
                    res.status(409).json({ message: "Username already exists." });
                } else {
                    res.status(404).json({ message: "Unknown error." });
                }
            } else {
                res.json({ message: "User added." });
            }
        });
    }
})

module.exports = router;