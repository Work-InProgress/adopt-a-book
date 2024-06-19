import jwt, { Secret } from 'jsonwebtoken';
import { Request, Response, NextFunction } from "express";


const dotenv = require('dotenv');
dotenv.config();

interface AuthRequest extends Request {
    user?: any;
}

export const authenticateToken = (req: AuthRequest, res: Response, next: NextFunction) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) return res.sendStatus(401);
    try {

        const tokenData = jwt.verify(token, process.env.TOKEN_SECRET as string);
        req.user = tokenData;
    } catch (error) {
        console.error('An error ocurred', error);
        res.status(500).json({ error });
    }
    next();
}