import express from "express";
import { addProduct, fetchProduct } from "../controllers/product.js";
const app = express.Router();

app.post("/fetchprod", fetchProduct)
app.post("/addproduct",addProduct)

export default app;