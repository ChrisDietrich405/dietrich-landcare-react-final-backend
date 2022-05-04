const sequelize = require("sequelize");
const db = require("../config/db");

const Customer = db.define("customers", {
  id: {
    type: sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  first_name: {
    type: sequelize.STRING,
  },
  last_name: {
    type: sequelize.STRING,
  },
  email: {
    type: sequelize.STRING,
  },
  phone: {
    type: sequelize.STRING,
  },
});

module.exports = Customer;
