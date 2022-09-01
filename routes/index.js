const dashboardController = require("../controllers/dashboardController");

const express = require("express");
const router = express.Router();

module.exports = () => {
  router.get("/dashboard", dashboardController.index);
  return router;
};
