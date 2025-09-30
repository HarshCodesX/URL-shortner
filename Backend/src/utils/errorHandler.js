import {Request, Response, NextFunction} from "express";
import {AppError} from "../errors/AppError";

export const ErrorHandler = (err, req, res, next) => {
    if(err instanceof AppError){
        return res.status(err.statusCode).json({
            success: false,
            message: err.message
        });
    }

    console.error(err);
    res.status(500).json({
        success: false,
        message: "Internal server error",
    });
};