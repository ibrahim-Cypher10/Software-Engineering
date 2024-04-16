import express from "express";
import { addToCart, removeFromCart, productsinCart } from "../controllers/productsincart.js";
const app = express.Router();

// Route to add an item to a cart.
app.post('/addtocart', addToCart);

// Route to remove an item from a cart.
app.post('/removefromcart', removeFromCart);

// Route to get current items in cart.
app.post('/getcartitems', productsinCart);

export default app;