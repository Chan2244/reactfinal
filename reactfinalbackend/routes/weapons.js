const express = require("express");
const router = express.Router();

const weaponsController = require("../controllers/index");

router.get("/", weaponsController.getAllWeapons);

router.get("/:id", weaponsController.getSingleWeapon);

router.post("/", weaponsController.createWeapon);

module.exports = router; 