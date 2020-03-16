const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PlayerSchema = new Schema({
  name: {
    type: String,
    require: true
  },
  team: {
    type: String,
    require: true
  },
  stats: {
    type: Schema.Types.ObjectId,
    ref: "Stats"
  }
});

const Player = mongoose.model("Player", PlayerSchema);

module.exports = Player;
