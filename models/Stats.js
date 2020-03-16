const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const StatsSchema = new Schema({
  avg: String,
  hr: String
});

const Stats = mongoose.model("Stats", StatsSchema);

module.exports = Stats;
