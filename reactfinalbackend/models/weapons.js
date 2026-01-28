const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WeaponsSchema = new Schema ({
    weaponsName: {
        type: String,
        required: true,
    },
    weaponDamage: {
        type: Number,
        required: true,
    },
    weaponCost: {
        type: Number,
        required: true,
    },
    weaponClass: {
        type: String,
        required: true,
    },
    weaponType: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model("weapons", WeaponsSchema);