const express = require("express");
const router = express.Router();
const animeController = require("../controllers/animes");

// Get ongoing Anime
router.get("/ongoing", animeController.ongoingAnimes);

module.exports = router;
