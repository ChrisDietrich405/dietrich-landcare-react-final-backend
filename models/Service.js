const sequelize = require("sequelize");
const db = require("../config/db");

const Service = db.define("services", {
  id: {
    type: sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: sequelize.STRING,
  },
});

module.exports = Service;
