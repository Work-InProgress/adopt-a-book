import express, { NextFunction, Request, Response } from 'express';
import { createBook, deleteBook, editBook, fetchAllBooks, fetchSingleBook } from '../services/book';

export const bookController = express.Router();

bookController.get('/', async (_req: Request, res: Response, next: NextFunction) => {
    try {
        const books = await fetchAllBooks();
        res.json(books);
    } catch (error) {
        next(error)
    }
})

bookController.get('/:id', async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    try {
        const book = await fetchSingleBook(id);
        res.json(book);
    } catch (error) {
        next(error);
    }
})

bookController.post('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const newBook = await createBook(req.body);
        res.json(newBook);
    } catch (error) {
        next(error);
    }
})

bookController.put('/:id', async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    try {
        const bookToEdit = await editBook(id, req.body);
        res.json(bookToEdit);
    } catch (error) {
        next(error);
    }
})

bookController.delete('/:id', async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    try {
        const bookToDelete = await deleteBook(id);
        res.json(bookToDelete)
    } catch (error) {
        next(error);
    }
})