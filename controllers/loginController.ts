import express, { NextFunction, Request, Response } from 'express';

export const loginController = express.Router();

loginController.post('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { username, password } = req.body;

        // const user = await loginController()
    }
})



