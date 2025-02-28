"use strict";
/*
import jwt from "jsonwebtoken";
import express from "express";

export function checkAuth (req: express.Request, res: express.Response, next: express.NextFunction) {
    const authorization = req.headers.authorization;
    if (!authorization) {
        res.status(401).json({
            message: "Unauthorized",
            error: "Token not found",
            data: null
        })
    }
    if (authorization?.split(" ")[0] !== "Bearer") {
         res.status(401).json({
            message: "Unauthorized",
            error: "Token not valid",
            data: null
        })
    }

    const token = authorization?.split(" ")[1];
    if (token === undefined) {
        return res.status(401).json({
            message: "Unauthorized",
            error: "Token not found",
            data: null
        })
    }

    try {
        let payload = jwt.verify(token as string, process.env.JWT_SECRET as string) as { email: string, iat: number };
        console.log(`payload: ${JSON.stringify(payload)}`);
        req.body.email = payload.email;
    } catch (error) {
        return res.status(401).json({
            message: "Unauthorized",
            error: "Token not valid",
            data: null
        })
    }

    next();
}

*/
