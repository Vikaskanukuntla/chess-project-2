import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const authMiddleware = (
    req: Request,
    res: Response,
    next: NextFunction
) => {

    const token = req.headers.authorization;

    if (typeof token !== "string") {

        return res.status(401).json({
            message: "Token missing"
        });
    }

    try {

        jwt.verify(token, "SECRET_KEY");

        next();

    } catch (e) {

        return res.status(401).json({
            message: "Invalid token"
        });
    }
};