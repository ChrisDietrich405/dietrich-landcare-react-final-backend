const Customer = require("../models/Customer");
const Service = require("../models/Service");

class ContactServices {  
  sendForm = async (req, res) => {
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
    const services = req.body.service;
    console.log(services);

    for (const service of services) {
      const createdService = await Service.findOne({
        where: { permalink: service },
      });
      quotation.addService(createdService);
    }

    res.json({
      success: true,
    });
  };
}

module.exports = new ContactServices();
