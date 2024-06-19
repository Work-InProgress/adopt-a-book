import bcrypt from 'bcryptjs';
import jwt, { Secret } from 'jsonwebtoken';

const dotenv = require('dotenv');
dotenv.config();


export const hashPassword = (password: string): string => {
    const saltRounds = 10;
    const hashedPassword = bcrypt.hashSync(password, saltRounds);
    return hashedPassword;
}

export const compareHash = (rawPassword: string, hashedPassword: string): boolean => {
    return bcrypt.compareSync(rawPassword, hashedPassword);
}

const privateKey: Secret = process.env.TOKEN_SECRET || "";

export const generateAccessToken = (username: string) => {
    return jwt.sign({ username: username }, privateKey, { expiresIn: 86400000 });
}