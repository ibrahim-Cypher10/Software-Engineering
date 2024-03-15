import { User } from "../models/user.js";
import { TryCatch } from "../middlewares/error.js";
import bcrypt from 'bcrypt';
import Product from '../models/product.js'; 

// Method to fetch all current products.
export const fetchProduct = TryCatch(async(req,res,next) =>{
    try {
      const products = await Product.find();
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch product." });
    }
})

// Method to add a product to the database.
export const addProduct = TryCatch(async(req,res,next)=>{

    try {
      const { name, category, price, vendor, description } = req.body;
      console.log(name)
    
      const product = new Product({                    // Creates a new product with input data.
        name,
        category,
        price,
        vendor,
        description,
      });
      
       await product.save();
    
      res.status(201).json({ message: "Product added successfully." });
    } catch (error) {
      res.status(500).json({ error: "Failed to add product." });
    }
})

// Method to update a product currently in the database.
export const updateProduct =  TryCatch(async (req, res,next) => {
  try {
    const { _id, name, color, price, vendor, description } = req.body;

    const product = await Product.findById(_id);                          // Checks if the product exists in the database.

    if (!product) {                                                            
      return res.status(404).json({ error: "Product does not exist." });
    }
    
    product.name = name;
    product.color = color;
    product.price = price;
    product.vendor = vendor;
    product.description = description;

    await product.save();                                                // Saves updated details of product into the database.

    res.status(200).json({ message: "Product updated successfully." });
  } catch (error) {
    res.status(500).json({ error: "Failed to update product details." });
  }
});

// Method to delete a product that is in the database.
export const deleteProduct =  TryCatch(async (req, res,next) => {

  try {
    const { productId } = req.body;

    const product = await Product.findByIdAndDelete(productId);         // Checks if the product exists in the database.

    if (!product) {
      return res.status(404).json({ error: "Product does not exist." });
    }

    res.status(200).json({ message: "Product deleted successfully." });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete product." });
  }
})