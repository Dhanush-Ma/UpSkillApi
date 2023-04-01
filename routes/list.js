const express = require("express");
const router = express.Router();
const supportedLanguages = require("../utilities/supportedLanguages");

router.get("/", async (req, res) => {
  return res.status(200).json({
    languages: supportedLanguages,
  });
});

module.exports = router;

// list to get the supported languages
