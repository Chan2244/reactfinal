const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MonstersSchema = new Schema ({
   monstersName: {
    type: String,
    required: true,
   },
   monstersType: {
    type: String,
    required: true,
   },
   monstersClimate: {
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
   }

});

module.exports = mongoose.model("monsters", MonstersSchema);