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
        message: err.message || "Internal server error",
    });
};

//global error handler
export class AppError extends Error {
    statusCode;
    isOperational;
    constructor(message, statusCode, isOperational){
        super(message);
        this.statusCode = statusCode;
        this.isOperational = isOperational;
        Error.captureStackTrace(this, this.constructor);
    }
}

export class NotFoundError extends AppError {
    constructor(message = "Resouce not found"){
        super(message, 404);
    }
}

export class ConflictError extends AppError {
    constructor(message = "Conflict occured"){
        super(message, 409);
    }
}

export class BadRequestError extends AppError {
    constructor(message = "Bad request"){
        super(message, 400);
    }
}

export class UnauthorizedError extends AppError {
    constructor(message = "Unauthorized"){
        super(message, 401);
    }
}