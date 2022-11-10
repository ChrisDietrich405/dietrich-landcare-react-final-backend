const ContactServices = require("../services/contact");
const express = require("express");
const router = express.Router();

const Service = require("../models/Service");

module.exports = () => {
  router.post("/contact", ContactServices.sendForm);

  router.get("/getServices", async (req, res) => {
    try {
      const services = await Service.findAll();
      res.json({ services });
    } catch (error) {}
  });
  return router;
};
