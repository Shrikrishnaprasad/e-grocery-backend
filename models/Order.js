const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  userEmail: { type: String },
  orders: { type: Array, required: true },
  total: { type: String, required: true },
  amount: { type: String, required: true },
});

module.exports = mongoose.model("Order", OrderSchema);
