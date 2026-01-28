const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ClassesSchema = new Schema ({
    ClassesName: {
        type: String,
        required: true,
    },
    hitpoints: {
        type: Number,
        required: true,
    },
    wealth: {
        type: Number,
        required: true,
    },
    classesAlignment: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model("classes", ClassesSchema);