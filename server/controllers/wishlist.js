import { User } from "../models/user.js";
import { Wishlist } from "../models/wishlist.js";
import { TryCatch } from "../middlewares/error.js";
import bcrypt from 'bcrypt';
import Product from '../models/product.js'; 

// Method to add a product to the wishlist with duplicate check
export const addToWishlist = TryCatch(async (req, res, next) => {
    const { client_id, product_id } = req.body;

    const exists = await Wishlist.findOne({
        client_id: client_id,
        product_id: product_id
    });

    if (exists) {
        res.status(409).json({ message: "Product is already in your wishlist." });
    } else {
        const newWishlistEntry = await new Wishlist({ client_id, product_id }).save();
        res.status(201).json(newWishlistEntry);
    }
});

// Method to remove a product from the wishlist
export const removeFromWishlist = TryCatch(async (req, res, next) => {
    const { client_id, product_id } = req.body;

    const result = await Wishlist.findOneAndDelete({
        client_id: client_id,
        product_id: product_id
    });

    if (result) {
        res.status(200).json({ message: "Product has been removed from wishlist." });
    } else {
        res.status(404).json({ error: "Wishlist entry not found." });
    }
});