const express = require("express");
const router = express.Router();
const animesController = require("../controllers/animes");

// Get ongoing Anime
router.get("/ongoing", animesController.ongoingAnimes);

// Get completed Anime
router.get("/completed", animesController.completedAnimes);

//Get anime info
router.get("/info", animesController.animesInfo);

// get anime data
router.get("/watch", animesController.animeWatch);

module.exports = router;
