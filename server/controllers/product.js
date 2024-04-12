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
      const { name, category, price, vendor, vendor_id, description } = req.body;
    
      const product = new Product({                    // Creates a new product with input data.
        name,
        category,
        price,
        vendor,
        vendor_id,
        description,
      });
      console.log("Product: ",product)
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

export const getProductsInCart =  TryCatch(async (req, res,next) => {
  try {
      const { customerID } = req.body;
  
      const cart = await Cart.findOne({ customerId: customerID });
  
      if (!cart) {
        return res
          .status(404)
          .json({ error: "Cart not found for this customer." });
      }
  
      const productsInCart = await ProductsinCart.find({ cart: cart._id });
  
      const productIds = productsInCart.map((item) => item.product);
  
      const products = await Product.find({ _id: { $in: productIds } });
  
      const productsWithQuantity = products.map((product) => {
        const productInCart = productsInCart.find(
          (item) => item.product.toString() === product._id.toString()
        );
        return {
          ...product.toObject(),
          quantity: productInCart.quantity,
        };
      });
  
      res.status(200).json(productsWithQuantity);
    } catch (error) {
      res.status(500).json({ error: "Failed to get products in cart" });
    }
  });

  
export const recentProducts = TryCatch(async (req, res,next) => {
  try {
    console.log("hello")
    const userId = req.query.userId;
    console.log(userId)
    const limit = parseInt(req.query.limit) ; // Default limit to 3 if not provided

    if (!userId) {
      return res.status(400).json({ error: 'User ID is required' });
    }

    // Assuming you have a 'createdAt' field in your Product model to track creation time
    const recentProducts = await Product.find({ vendor_id: userId }).sort({ _id: -1 }).limit(limit);
    console.log(recentProducts)

    res.json(recentProducts);
  } catch (error) {
    console.error('Error fetching recent products:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});