import express, { NextFunction, Request, Response } from 'express';
import { login } from '../services/login';
import { generateAccessToken } from '../utils/auth';
import { AppError } from '../interfaces/interfaces';

export const loginController = express.Router();

loginController.post('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { email, password } = req.body;

        const user = await login({ email: email, password: password });

        if (user) {
            const authToken = generateAccessToken(email);
            res.json({ token: authToken, email: user.email, username: user.username });
        } else {
            throw new AppError({ status: 401, message: 'User is not authorized' });
        }
    } catch (error) {
        next(error);
    }
})



