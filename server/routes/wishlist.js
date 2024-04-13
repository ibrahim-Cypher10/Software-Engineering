import express from "express";
import { addToWishlist, removeFromWishlist } from "../controllers/wishlist.js";
const app = express.Router();

// Route to add a product/item to client's wishlist.
app.post('/addwishlist', addToWishlist);

// Route to un-wishlist an item for a client.
app.post('/removewishlist', removeFromWishlist);

export default app;