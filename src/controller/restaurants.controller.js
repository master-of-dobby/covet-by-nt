const RestaurantModel = require("../model/restaurant.model");

exports.create = (req, res) => {
  const {
    name,
    cuisines,
    starRating,
    imageUrl,
    // locality,
    // areaName,
    // costForTwo,
    // avgRating,
  } = req.body;

  const newRestaurant = new RestaurantModel({
    name,
    cuisines,
    starRating,
    imageUrl,
    // locality,
    // areaName,
    // costForTwo,
    // avgRating,
  });

  newRestaurant
    .save()
    .then((data) => {
      if (!data) {
        res.status(400).send({ message: "Something went wrong" });
      }

      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: "Server not available" });
    });
};

exports.fetch = (req, res) => {
  RestaurantModel.find()
    .then((data) => {
      if (!data) {
        res.status(400).send({ message: "Something went Wrong!" });
      }
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: "Server not available" });
    });
};

exports.fetchOne = (req, res) => {
  var _id = req.params.id;

  RestaurantModel.findById(_id)
    .then((data) => {
      if (!data) {
        res.status(400).send({ message: "Something went Wrong!" });
      }

      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: "Server not available" });
    });
};

exports.updateOne = (req, res) => {
  const _id = req.params.id;

  const updateData = req.body;

  RestaurantModel.findByIdAndUpdate(_id, updateData, { new: true })
    .then((data) => {
      if (!data) {
        res.status(400).send({ message: "Something went Wrong!" });
      }

      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: "Server not available" });
    });
};

exports.deleteOne = (req, res) => {
  var _id = req.params.id;

  RestaurantModel.findByIdAndDelete(_id)
    .then((data) => {
      if (!data) {
        res.status(400).send({ message: "Something went Wrong!" });
      }

      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: "Server not available" });
    });
};
