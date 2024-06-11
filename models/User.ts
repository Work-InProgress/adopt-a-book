import { Schema, model } from 'mongoose';

export interface UserInterface {
    username: string;
    email: string;
    password: string;
}

const userSchema = new Schema<UserInterface>({
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true }
})

export const User = model<UserInterface>('user', userSchema);

