const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema({
  name: String,
  cuisines: [String],
  starRating: String,
  imageUrl: String,
});

const Restaurant = mongoose.model("restaurants", restaurantSchema);
module.exports = Restaurant;

// async function findRestaurantById(id) {
//   try {
//     const restaurant = await Restaurant.findById(id);
//     console.log(restaurant + "is the res");
//   } catch (error) {
//     console.error(error + " is the ERROR");
//   }
// }

// findRestaurantById("65aa34bddd4d52bbe59cc52e");

// starRating: String,
// imageUrl: String,
// locality: String,
// areaName: String,
// costForTwo: String,
// avgRating: String,
