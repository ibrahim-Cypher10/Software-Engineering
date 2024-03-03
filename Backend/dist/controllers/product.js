import { User } from "../models/user.js";
import { TryCatch } from "../middlewares/error.js";
import bcrypt from 'bcrypt';
import Product from '../models/product.js'; 


export const fetchProduct = TryCatch(async(req,res,next) =>{
    try {
      const products = await Product.find();
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch product." });
    }

})

export const addProduct = TryCatch(async(req,res,next)=>{

    try {
      const { name, category, price, vendor } = req.body;
      console.log(name)
    
      const product = new Product({
        name,
        category,
        price,
        vendor,
      });
      
       await product.save();
    
      res.status(201).json({ message: "Product added successfully." });
    } catch (error) {
      res.status(500).json({ error: "Failed to add product." });
    }
})

export const updateProduct =  TryCatch(async (req, res,next) => {
  try {
    const { _id, name, color, price, vendor } = req.body;

    const product = await Product.findById(_id);

    if (!product) {
      return res.status(404).json({ error: "Product does not exist." });
    }
    product.name = name;
    product.color = color;
    product.price = price;
    product.vendor = vendor;

    await product.save();

    res.status(200).json({ message: "Product updated successfully." });
  } catch (error) {
    res.status(500).json({ error: "Failed to update product details." });
  }
});


export const deleteProduct =  TryCatch(async (req, res,next) => {

  try {
    const { productId } = req.body;

    const product = await Product.findByIdAndDelete(productId);

    if (!product) {
      return res.status(404).json({ error: "Product does not exist." });
    }

    res.status(200).json({ message: "Product deleted successfully." });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete product." });
  }
})

