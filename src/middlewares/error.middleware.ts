import { Request, Response, NextFunction } from "express";
import { AppError } from "../utils/AppError.js";
import { ZodError } from "zod/v4";
import { MongoError } from "mongodb";

export function errorHandler(
    err: unknown,
    req: Request,
    res: Response,
    next: NextFunction
): Response | void{
    console.error(err);
    
    if (err instanceof AppError){
        return res.status(err.statusCode).json({error: err.message})
    }
    if (err instanceof ZodError){
        const message = err.message
        res.status(400).json({error: "Invalid Request.", message})
    }
    return res.status(500).json({error: "Error interno del servidor."})
    
}