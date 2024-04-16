import express from "express";
import { addProduct, fetchProduct, updateProduct, deleteProduct, getProductsInCart, recentProducts, fetchProductById, productSearch, addReview } from "../controllers/product.js";
const app = express.Router();

// Route to fetch a product
app.post("/fetchprod", fetchProduct)

// Route to fetch a product by its ID
app.get('/fetchprod/:id', fetchProductById);

// Route to get recent products.
app.get("/recentproducts", recentProducts)

// Route to add a new product
app.post("/addproduct", addProduct)

// Route to update an existing product
app.put("/updateproduct", updateProduct)

// Route to delete a product
app.delete("/deleteproduct", deleteProduct)

// Route to get product from cart
app.post("/getproductsincart", getProductsInCart)

// Route to search for products
app.get('/search', productSearch);

// Route to add a review
app.post('/addreview', addReview);

export default app;
