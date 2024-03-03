import express from "express";
import { addProduct, fetchProduct, updateProduct, deleteProduct } from "../controllers/product.js";
const app = express.Router();

app.post("/fetchprod", fetchProduct)
app.post("/addproduct",addProduct)
app.put("/updateproduct",updateProduct)
app.delete("/deleteproduct",deleteProduct)

export default app;
