const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  console.log(__dirname);
  res.status(200).sendFile(__dirname + "/Static/index.html");
});

module.exports = router;
