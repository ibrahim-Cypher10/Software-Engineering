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


