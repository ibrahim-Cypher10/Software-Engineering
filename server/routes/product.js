import express from "express";
import { addProduct, fetchProducts, updateProduct, deleteProduct, recentProducts, fetchProductById, addReview, productSearch } from "../controllers/product.js";
const app = express.Router();

// Route to fetch all products.
app.post("/fetchprods", fetchProducts)

// Route to fetch a product by its ID
app.get('/fetchprod/:id', fetchProductById);

// Route to get recent products.
app.get("/recentproducts", recentProducts)

// Route to add a new product
app.post("/addproduct",addProduct)

// Route to update an existing product
app.put("/updateproduct",updateProduct)

// Route to delete a product
app.delete("/deleteproduct",deleteProduct)

// Route to search for products
app.get('/search', productSearch);

// Route to add a review
app.post('/addreview', addReview);

export default app;
