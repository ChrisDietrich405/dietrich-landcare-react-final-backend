const sequelize = require("sequelize");
const db = require("../config/db");

const Quotation = db.define("quotations", {
  id: {
    type: sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  customer_id: {
    type: sequelize.INTEGER,
  },
  message: {
    type: sequelize.STRING,
  },
});

module.exports = Quotation;
