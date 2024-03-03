import { NextFunction, Request, Response } from "express";
import { User } from "../models/user.js";
import { NewuserRequestBody } from "../types/types.js";
import { TryCatch } from "../middlewares/error.js";
import bcrypt from 'bcrypt';

export const newUser = TryCatch(
    async (req: Request<{}, {}, NewuserRequestBody>, res: Response, next: NextFunction) => {

    const { name, email, password, gender, _id, dob } = req.body;
    const user = await User.create({
        name,
        email,
        password,
        gender,
        _id,
        dob: new Date(dob),
    });

    return res.status(200).json({
        success: true,
        message: `Welcome, ${user.name}`
    })

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
        return res.status(200).json({
            success: true,
            token,
            message: "Login successful."
        });
    }
);