import { NextFunction, Response, Request } from "express";

export interface NewuserRequestBody {
    name: string;
    email: string;
    password: string;
    gender: string;
    _id: string;
    dob: Date;
}


export type ControllerType = (
    req: Request,
    res: Response,
    next: NextFunction
) => Promise<void | Response<any, Record<string, any>>>;