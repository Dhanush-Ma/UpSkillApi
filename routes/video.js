const express = require("express");
const router = express.Router();
const supportedLanguages = require("../utilities/supportedLanguages");
const videos = require("../utilities/videosData");

router.get("/", async (req, res) => {
  if (!supportedLanguages.find((lang) => lang.id === req.query.language))
    return res.status(400).json({
      status: "Bad request",
      code: 400,
      reason: "The specified language is not found.",
    });

  try {
    //find correct language
    const requestedLanguage = req.query.language;

    //get the video ids for the requested language
    const responseVideos =
      videos[videos.findIndex((obj) => obj.language === requestedLanguage)];

    //genrerate response
    const responseDataObj = responseVideos.videos.map((video) => {
      return {
        type: typeof video === "string" ? "single" : "playlist",
        videoIds: typeof video === "string" ? [video] : video,
      };
    });

    const response = {
      status: 200,
      language: responseVideos.language,
      data: responseDataObj,
    };
  console.log("hu");

    //send response
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
