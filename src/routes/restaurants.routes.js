const restaurantController = require("../controller/restaurants.controller");
const jwtAuth = require("../middleware/authJWT");
const express = require("express");
const router = express.Router();

module.exports = (app) => {
  //create
  app.post("/api/restaurants", restaurantController.create);

  //fetch --> //jwtAuth
  app.get("/api/restaurants", restaurantController.fetch);

  // fetch restaurant with particular id
  app.get("/api/restaurants/:id", restaurantController.fetchOne);

  // update restaurant by id
  app.put("/api/restaurants/:id", restaurantController.updateOne);

  // delete a restaurant by id
  app.delete("/api/restaurants/:id", restaurantController.deleteOne);
};

