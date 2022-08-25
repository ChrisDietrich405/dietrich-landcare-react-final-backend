//comment

const express = require("express");
const routes = require("./routes");
const cors = require("cors");
const app = express();
const db = require("./config/db");
require("./models");
db.sync()
  .then(() => console.log("db connection successful"))
  .catch((e) => console.log(e));
app.use(cors());
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/", routes());

app.listen(3001);
