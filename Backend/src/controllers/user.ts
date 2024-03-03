import { NextFunction, Request, Response } from "express";
import { User } from "../models/user.js";
import { NewuserRequestBody } from "../types/types.js";
import { TryCatch } from "../middlewares/error.js";
import bcrypt from 'bcrypt';

export const newUser = TryCatch(async (req: Request<{}, {}, NewuserRequestBody>, res: Response, next: NextFunction) => {
    const { name, email, password, gender, _id, dob } = req.body;

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({
        name,
        email,
        password: hashedPassword,
        gender,
        _id,
        dob: new Date(dob),
    });

    return res.status(200).json({
        success: true,
        message: `Welcome, ${user.name}`
    });
});


export const loginUser = TryCatch(
    async (req: Request, res: Response, next: NextFunction) => {
        const { email, password } = req.body;

        console.log(email, password)
        console.log("here")
        const user = await User.findOne({ email });
        console.log(`Checking ${user}`)
        if (!user) {
            return res.status(401).json({
                success: false,
                message: "Authentication failed. User not found."
            });
        }

        console.log(user.password)
        console.log(password)

        const isMatch = await bcrypt.compare(password, user.password);
        console.log("here---")
        console.log(isMatch)

        if (!isMatch) {
            return res.status(401).json({
                success: false,
                message: "Authentication failed. Wrong password."
            });
        }

        const token = user.generateAuthToken();
        console.log("---here---")
        console.log(token)
        return res.status(200).json({
            success: true,
            token,
            message: "Login successful"
        });
    }
);


export const updateUser = TryCatch(async (req: Request, res: Response, next: NextFunction) => {
    const { userId } = req.params; 
    const updateData = req.body;

    if (updateData.password) {
        const salt = await bcrypt.genSalt(10);
        updateData.password = await bcrypt.hash(updateData.password, salt);
    }

    const user = await User.findByIdAndUpdate(userId, updateData, { new: true }); 

    if (!user) {
        return res.status(404).json({
            success: false,
            message: "User not found."
        });
    }

    return res.status(200).json({
        success: true,
        message: "User updated successfully.",
        user,
    });
});


export const deleteUser = TryCatch(async (req: Request, res: Response, next: NextFunction) => {
    const { userId } = req.params; 

    const user = await User.findByIdAndDelete(userId);

    if (!user) {
        return res.status(404).json({
            success: false,
            message: "User not found."
        });
    }

    return res.status(200).json({
        success: true,
        message: "User deleted successfully."
    });
});
