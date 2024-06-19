import { AppError } from "../interfaces/interfaces";
import { User } from "../models/User";
import { compareHash } from "../utils/auth";


export const login = async (userLogin: any) => {
    const user = await User.findOne({ email: userLogin.email });

    if (!user) {
        throw new AppError({ status: 404, message: 'User could not be found' });
    }

    const isAuth = compareHash(userLogin.password, user.password);

    if (isAuth) {
        return user;
    } else {
        throw new AppError({ status: 403, message: 'Wrong credentials, please try again!' })
    }
}