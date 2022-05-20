const Customer = require("./Customer");
const Service = require("./Service");
const Quotation = require("./Quotation");

Customer.hasMany(Quotation, {
  foreignKey: "customer_id",
  sourceKey: "id",
});

Service.belongsTo(Customer, {
  foreignKey: "customer_id",
  targetKey: "id",
});

Quotation.belongsToMany(Service, {
  through: "quotation_services",
  foreignKey: "quotation_id",
  otherKey: "service_id",
});

Service.belongsToMany(Quotation, {
  through: "quotation_services",
  foreignKey: "service_id",
  otherKey: "quotation_id",
});
