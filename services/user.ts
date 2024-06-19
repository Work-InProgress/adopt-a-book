import { AppError } from "../interfaces/interfaces";
import { User, UserInterface } from "../models/User";
import { compareHash, hashPassword } from "../utils/auth";

export const fetchAllUsers = async (): Promise<UserInterface[]> => {
    const users = await User.find();
    if (!users) {
        throw new AppError({ status: 404, message: 'Users could not be found!' })
    }
    return users;
}

export const fetchSingleUser = async (id: any): Promise<UserInterface | null> => {
    const user = await User.findById(id);
    if (!user) {
        throw new AppError({ status: 404, message: 'User not found!' });
    }
    return user;
}

export const createUser = async (data: UserInterface): Promise<UserInterface | null> => {
    let userExists = await User.find({ email: data.email });
    if (!userExists) {
        const hashedPassword: string = hashPassword(data.password);
        const newUser = await User.create({ ...data, password: hashedPassword });
        if (!newUser) {
            throw new AppError({ status: 405, message: 'User could not be created, please try again' });
        }
        return newUser;
    } else {
        throw new AppError({ status: 400, message: 'User already exists!' });
    }
}

export const editUser = async (id: any, data: UserInterface): Promise<UserInterface | null> => {
    const user = await User.findById(id);
    if (!user) {
        throw new AppError({ status: 404, message: 'User could not be found!' });
    }

    if (user && !compareHash(data.password, user.password) && data.password != '') {
        const hashedPassword = hashPassword(data.password);
        return await User.findByIdAndUpdate(id, { ...data, password: hashedPassword }, { new: true });
    } else {
        return await User.findByIdAndUpdate(id, { ...data, password: user.password }, { new: true });
    }
}

export const deleteUser = async (id: any): Promise<UserInterface | null> => {
    const user = await User.findByIdAndDelete(id);
    if (!user) {
        throw new AppError({ status: 404, message: 'User could not be found' });
    }

    return user;
}

