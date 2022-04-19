const express = require("express");
const router = express.Router();

module.exports = () => {
  router.post("/contact", (req, res) => {
    console.log(req.body);
    res.json({
      success: true,
    });
  });
  return router;
};
