const express = require("express");
const router = express.Router();
const Customer = require("../models/Customer");

module.exports = () => {
  router.post("/contact", async (req, res) => {
    const customer = await Customer.findOne({
      where: { email: req.body.email },
    });
    if (!customer) {
      await Customer.create({
        first_name: req.body.firstName,
        last_name: req.body.lastName,
        email: req.body.email,
        phone: req.body.phone,
      });
    } else {
      await Customer.update(
        {
          first_name: req.body.firstName,
          last_name: req.body.lastName,
          phone: req.body.phone,
        },
        {
          where: {
            email: req.body.email,
          },
        }
      );
    }
    const createdCustomer = await Customer.findOne({
      where: { email: req.body.email },
    });
    const quotation = await createdCustomer.createQuotation({
      message: req.body.message,
    });
    res.json({
      success: true,
    });
  });
  return router;
};
