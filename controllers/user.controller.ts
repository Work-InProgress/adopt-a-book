import express, { NextFunction, Request, Response } from 'express';
import { fetchAllUsers } from '../services/user';

export const userController = express.Router();

userController.get('/', async (_req: Request, res: Response, next: NextFunction) => {
    try {
        const users = await fetchAllUsers();
    } catch (error) {
        next(error)
    }
})

userController.get('/:id', async (req: Request, res: Response, next: NextFunction) => {

})

userController.post('/', async (req: Request, res: Response, next: NextFunction) => {

})

userController.put('/', async (req: Request, res: Response, next: NextFunction) => {

})

userController.delete('/:id', async (req: Request, res: Response, next: NextFunction) => {

})