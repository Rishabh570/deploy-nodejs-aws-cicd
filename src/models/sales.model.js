"use-strict";
const mongoose = require("mongoose");

const salesSchema = new mongoose.Schema(
  {
    purchaseMethod: {
      type: String,
      required: true,
    },
    items: {
      type: Array,
      required: true,
    },
    saleDate: {
      type: Date,
      required: true,
      index: true,
    },
    customer: {
      type: Object,
      required: true,
    },
    storeLocation: {
      type: String,
      required: true,
    },
    couponUsed: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamps: false,
  }
);


const Sales = mongoose.model("Sales", salesSchema);
module.exports = Sales;
