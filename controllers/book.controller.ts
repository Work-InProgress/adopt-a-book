import express, { NextFunction, Request, Response } from 'express';

export const bookController = express.Router();

bookController.get('/', async (_req: Request, res: Response, next: NextFunction) => {

})

bookController.get('/:id', async (req: Request, res: Response, next: NextFunction) => {

})

bookController.post('/', async (req: Request, res: Response, next: NextFunction) => {

})

bookController.put('/', async (req: Request, res: Response, next: NextFunction) => {

})

bookController.delete('/:id', async (req: Request, res: Response, next: NextFunction) => {

})