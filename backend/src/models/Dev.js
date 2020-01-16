const mongoose = require("mongoose");
const PointSchema = require("./utils/Point");

const DevSchema = new mongoose.Schema({
  name: String,
  github_usename: String,
  bio: String,
  avatar_url: String,
  techs: [String],
  location: {
    type: PointSchema,
    index: "2dsphare"
  }
});

module.exports = mongoose.model("Dev", DevSchema);
