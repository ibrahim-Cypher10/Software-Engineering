import { NextFunction, Request, Response } from "express";
import { User } from "../models/user.js";
import { NewuserRequestBody } from "../types/types.js";


export const newUser = async (req: Request<{}, {}, NewuserRequestBody>, res: Response, next: NextFunction) => {
    try {
        console.log("here0")
        const { name, email, photo, gender, _id, dob } = req.body;
        console.log("here")
        const user = await User.create({
            name,
            email,
            photo,
            gender,
            _id,
            dob: new Date(dob),
        });

        return res.status(200).json({
            success: true,
            message: `Welcome, ${user.name}`
        })

    } catch (error) {

        return res.status(201).json({
            success: false,
            message: error
        })

    }
};