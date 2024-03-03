import express from "express";
import { addProduct, fetchProduct, updateProduct } from "../controllers/product.js";
const app = express.Router();

app.post("/fetchprod", fetchProduct)
app.post("/addproduct",addProduct)
app.put("/updateproduct",updateProduct)

export default app;