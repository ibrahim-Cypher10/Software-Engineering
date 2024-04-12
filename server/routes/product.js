import express from "express";
import { addProduct, fetchProduct, updateProduct, deleteProduct, getProductsInCart, recentProducts } from "../controllers/product.js";
const app = express.Router();

app.get("/fetchprod", fetchProduct)   // Route to fetch a product
app.get("/recentproducts", recentProducts)   // Route to fetch a product
app.post("/addproduct",addProduct)  // Route to add a new product
app.put("/updateproduct",updateProduct)  // Route to update an existing product
app.delete("/deleteproduct",deleteProduct)  // Route to delete a product
app.post("/getproductsincart", getProductsInCart)  // Route to get product from cart

export default app;
