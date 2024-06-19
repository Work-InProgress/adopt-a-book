import { AppError } from "../interfaces/interfaces";
import { BookInterface, Book } from "../models/Book";

export const fetchAllBooks = async (): Promise<BookInterface[]> => {
    const books = await Book.find();

    if (!books) {
        throw new AppError({ status: 404, message: 'Books could not be found!' });
    }
    return books;
}

export const fetchSingleBook = async (id: string): Promise<BookInterface | null> => {
    const book = await Book.findById(id);
    if (!book) {
        throw new AppError({ status: 404, message: 'Book could not be found!' });
    }
    return book;
}

export const createBook = async (data: BookInterface): Promise<BookInterface | null> => {
    const book = await Book.create(data);
    if (!book) {
        throw new AppError({ status: 404, message: 'Book could not be created!' });
    }
    return book;
}

export const editBook = async (id: string, data: BookInterface): Promise<BookInterface | null> => {
    const book = await Book.findByIdAndUpdate(id, data, { new: true });
    if (!book) {
        throw new AppError({ status: 404, message: 'Book could not be found!' });
    }
    return book;
}

export const deleteBook = async (id: string): Promise<BookInterface | null> => {
    const book = await Book.findByIdAndDelete(id);
    if (!book) {
        throw new AppError({ status: 404, message: 'Book could not be found!' });
    }
    return book;
}