import express from "express";
import { addProduct, fetchProduct, updateProduct, deleteProduct } from "../controllers/product.js";
const app = express.Router();

app.post("/fetchprod", fetchProduct)   // Route to fetch a product
app.post("/addproduct",addProduct)  // Route to add a new product
app.put("/updateproduct",updateProduct)  // Route to update an existing product
app.delete("/deleteproduct",deleteProduct)  // Route to delete a product

export default app;
