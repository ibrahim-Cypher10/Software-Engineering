import { NextFunction, Request, Response } from "express";
import ErrorHandler from "../utils/utility-class.js";
import { ControllerType } from "../types/types.js";

// Defines middleware for handling errors in Express by setting default values for error messages and status codes, then responding with a JSON object containing these details.
export const errorMiddleware = (err: ErrorHandler, req: Request, res: Response, next: NextFunction) => {    
    err.message = err.message || "Internal Server Error";
    err.statusCode = err.statusCode || 500;

    return res.status(err.statusCode).json({ success: false, message: err.message });
}

// The try catch block was being used repetitively, so i made this trycatch wrapper function that replaces the try catch block.
export const TryCatch = (func: ControllerType) => {
    return (req: Request, res: Response, next: NextFunction) => {
        return Promise.resolve(func(req, res, next)).catch(next);
    }
}
