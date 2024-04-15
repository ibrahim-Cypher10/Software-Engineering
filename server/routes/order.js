import express from "express";
import { createOrder, customerOrders, vendorOrders, confirmOrder } from "../controllers/order.js";
const app = express.Router();

// Route to create/place an order.
app.post('/createorder', createOrder);

// Route to fetch all orders placed by a customer.
app.post('/customerorders', customerOrders);

// Route to fetch all orders placed to a vendor.
app.post('/vendororders', vendorOrders);

// Route to confirm a placed order.
app.patch('/confirmorder', confirmOrder);

export default app;