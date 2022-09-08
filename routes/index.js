const dashboardController = require("../controllers/dashboardController");
const customersController = require("../controllers/customersController");
const quotationsController = require("../controllers/quotationsController");
const servicesController = require("../controllers/servicesController");

const express = require("express");
const router = express.Router();

module.exports = () => {
  router.get("/dashboard", dashboardController.index);
  router.get("/customers", customersController.index);
  router.get("/quotations", quotationsController.index);
  router.get("/services", servicesController.index);
  return router;
};
