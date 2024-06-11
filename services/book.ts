import { BookInterface } from "../models/Book";

export const fetchAllBooks = async (): Promise<BookInterface> => {

}

export const fetchSingleBook = async (id: string): Promise<BookInterface | null> => {

}

export const createBook = async (data: BookInterface): Promise<BookInterface | null> => {

}

export const editBook = async (id: string, data: BookInterface): Promise<BookInterface | null> => {

}

export const deleteBook = async (id: string): Promise<BookInterface | null> => {

}