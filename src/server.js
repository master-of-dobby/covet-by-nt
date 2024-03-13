const express = require("express");
const bodyParser = require("body-parser");
const { default: mongoose } = require("mongoose");
const cors = require("cors");

const path = require("path");

const dbConfigs = require("./config/db.config");

const app = express();
const port = 8000;

app.listen(port, () => {
  console.log("server is running on port 8000");
});

mongoose.connect(dbConfigs.url);

const db = mongoose.connection;

db.on("error", () => {
  console.log("Error in connecting DB");
});

db.on("open", () => {
  console.log("Connection Successful");
});

app.use(bodyParser.json());

app.use(cors());

//require("./routes/users.routes")
require(path.join(__dirname, "./routes/restaurants.routes"))(app);

require(path.join(__dirname, "./routes/users.routes"))(app);

port.close();

// import restaurantModel from "./model/restaurant.model";

// app.get("/getRestaurants", (req, res) => {
//   restaurantModel
//     .find({})
//     .then(function (restaurants) {
//       res.json(restaurants);
//     })
//     .catch(function (err) {
//       console.log(err);
//     });
// });
