const express = require("express");
const path = require("path");
const routes = require("./routes/index");
const apiRoutes = require("./routes/api");
const cors = require("cors");
const app = express();
app.use(express.static("public"));

app.set("view engine", "ejs");
// folder views
app.set("views", path.join(__dirname, "./views"));
const db = require("./config/db");
require("./models");
db.sync()
  .then(() => console.log("db connection successful"))
  .catch((e) => console.log(e));
app.use(cors());
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());
app.use((req, res, next) => {
  res.locals.menu = [
    {
      route: "/dashboard",
      name: "Dashboard"
    },
    {
      route: "/customers",
      name: "Customers"
    },
    {
      route: "/quotations",
      name: "Quotations"
    },
    {
      route: "/services",
      name: "Services"
    },
  ]
  next()
})
app.use("/", routes());
app.use("/api", apiRoutes());

app.listen(3001);
