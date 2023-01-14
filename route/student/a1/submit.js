const express = require("express");
const router = express.Router();
const multer = require('multer');
const rate_limit = require("../../../setup/rate_limit");

const upload = multer({
    dest: './tmp/upload/',
    limits: { fileSize: 1024 }
});

router.post("/submit", rate_limit.upload_limiter, upload.any(), (req, res) => {
    let fail_message = "Something is wrong! Unfortunately, we can't tell you the reason and you have to figure it out on your own.";
    if (!("email" in req.body)) {
        res.status(400).json({ message: fail_message })
    } else if (!("feedback" in req.body)) {
        res.status(400).json({ message: fail_message })
    } else if (!("country" in req.body)) {
        res.status(400).json({ message: fail_message })
    } else if (!("files" in req) || req.files.length !== 1 || (req.files[0]["fieldname"] != "attachments") || !("originalname" in req.files[0])) {
        res.status(400).json({ message: fail_message })
    } else if (!("acknowledge" in req.body)) {
        res.status(400).json({ message: fail_message })
    } else {
        res.status(400).json({ message: "Sanity check passes. This doesn't guarantee your request is correct though." })
    }
})

module.exports = router;