import bcrypt from 'bcryptjs';


export const hashPasswprd = (password: string): string => {
    const saltRounds = 10;
    const hashedPassword = bcrypt.hashSync(password, saltRounds);
    return hashedPassword;
}

export const compareHash = (rawPassword: string, hashedPassword: string): boolean => {
    return bcrypt.compareSync(rawPassword, hashedPassword);
}