const express = require("express");

const router = express.Router();

const { postComment, getComments } = require("../controllers/message");

router.post("/comment", postComment);
router.get("/getComments", getComments);

module.exports = router;
