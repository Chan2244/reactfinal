const express = require("express");
const router = express.Router();

const MonstersController = require("../controllers/index");

router.get("/", MonstersController.getAllMonsters);

router.get("/:id", MonstersController.getSingleMonster);

router.post("/", MonstersController.createMonster);

module.exports = router;