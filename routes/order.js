const router = require("express").Router();
const Order = require("../models/Order");

//newOrder
router.post("/newOrder", async (req, res) => {
  try {
    const newOrder = new Order(req.body);
    const order = await newOrder.save();
    res.status(201).json(order);
  } catch (error) {
    res.status(500).json(error);
  }
});

//getAll orders
router.get("/getOrders", async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
