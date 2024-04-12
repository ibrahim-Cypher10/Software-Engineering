import { User } from "../models/user.js";
import { ChatMessage } from "../models/chat.js";
import { TryCatch } from "../middlewares/error.js";
import bcrypt from 'bcrypt';
import Product from '../models/product.js'; 

export const fetchMessages = TryCatch(async (req, res, next) => {
    const { clientID, vendorID } = req.params;
    try {
        const messages = await ChatMessage.find({
            $or: [
                { from: clientID, to: vendorID },
                { from: vendorID, to: clientID }
            ]
        })
        .sort({ timestamp: 1 })
        .populate('from', 'username user_type')
        .populate('to', 'username user_type');

        res.status(200).json(messages);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch messages." });
    }
});

export const createMessage = TryCatch(async (req, res, next) => {
    const { from, to, message } = req.body;

    if (!from || !to || !message) {
        return res.status(400).json({ error: "Missing required fields: from, to, message." });
    }

    const newMessage = new ChatMessage({
        from,
        to,
        message
    });

    await newMessage.save();

    res.status(201).json(newMessage);
});