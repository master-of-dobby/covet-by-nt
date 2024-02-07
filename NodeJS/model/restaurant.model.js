const mongoose = require("mongoose");

const restaurantSchema = mongoose.Schema({
  name: String,
  cuisines: Array,
  starRating: String,
  imageUrl: String,
  locality: String,
  areaName: String,
  costForTwo: String,
  avgRating: String,
});

const restaurantModel = mongoose.model("Restaurant", restaurantSchema);

module.exports = restaurantModel;
