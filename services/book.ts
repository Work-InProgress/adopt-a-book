import { BookInterface, Book } from "../models/Book";

export const fetchAllBooks = async (): Promise<BookInterface[]> => {
    const books = await Book.find();

    return books;
}

export const fetchSingleBook = async (id: string): Promise<BookInterface | null> => {
    const book = await Book.findById(id);

    return book;
}

export const createBook = async (data: BookInterface): Promise<BookInterface | null> => {
    const book = await Book.create(data);

    return book;
}

export const editBook = async (id: string, data: BookInterface): Promise<BookInterface | null> => {
    const book = await Book.findByIdAndUpdate(id, data, { new: true });

    return book;
}

export const deleteBook = async (id: string): Promise<BookInterface | null> => {
    const book = await Book.findByIdAndDelete(id);

    return book;
}