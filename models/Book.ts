import { Schema, model } from 'mongoose';
import { geoJson } from '../interfaces/interfaces';

export interface BookInterface {
    image?: [string];
    title: string;
    genre: string;
    user: { _id: string };
    geometry: any;
    rating: number;
}

const bookSchema = new Schema<BookInterface>({
    image: { type: [String] },
    title: { type: String, required: true },
    genre: { type: String, required: true },
    user: { type: Schema.Types.ObjectId, ref: 'user', required: true },
    geometry: {
        type: {
            type: String,
        },
        coordinates: [Number]
    },
    rating: { type: Number, required: true }
},
    {
        timestamps: true
    });

export const Book = model<BookInterface>('book', bookSchema)