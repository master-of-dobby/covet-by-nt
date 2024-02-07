const express = require("express");
const bodyParser = require("body-parser");
const { default: mongoose } = require("mongoose");
const cors = require("cors");

const path = require("path");

const dbConfigs = require("./config/db.config");

const app = express();

app.listen("8000", () => {
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
