const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const monstersSchema = new Schema ({
    monstersName: {
        type: String,
        required: true,
    },
    monsterType: {
        type: String,
        required: true,
    },
    monsterClimate: {
        type: String,
        required: true,
    },
    monsterTerrain: {
        type: String,
        required: true,
    },
    monsterXp: {
        type: Number,
        required: true,
    },
});

module.exports = mongoose.model("monsters", monstersSchema);