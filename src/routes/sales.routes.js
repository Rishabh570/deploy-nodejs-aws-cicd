const express = require("express");
const router = express.Router();

const { salesModel } = require("../models");

router.get("/", async (req, res) => {
  const sales = await salesModel.find(
    {},
    {},
    { limit: 1 }
  );

  res.json({
    data: sales,
    error: false,
    message: "Sales data fetched successfully"
  });
});

module.exports = router;
