const express = require("express");
const routes = require("./routes");
const cors = require("cors");
const app = express();
const db = require("./config/db");
db.sync()
  .then(() => console.log("db connection successful"))
  .catch((e) => console.log(e));
app.use(cors());
const bodyParser = require("body-parser");

// app.use("/", (req, res) => {
//   res.send("hello");
// });
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/", routes());

app.listen(3001);
