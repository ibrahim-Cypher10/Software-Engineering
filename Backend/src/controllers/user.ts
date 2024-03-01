import { NextFunction, Request, Response } from "express";
import { User } from "../models/user.js";
import { NewUserRequestBody } from "../types/user.js";


export const newUser = async (req: Request<{},{},NewUserRequestBody>, res: Response, next: NextFunction) => {
    try {
        const {name, email, photo, gender, role, _id, dob} = req.body;
        const user = await User.create({});


        res.status(200).json({ success: true, message: "New user" });
    } catch (error) {
        next(error);
    }
    next();
    return;
};