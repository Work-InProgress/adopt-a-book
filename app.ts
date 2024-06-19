import express, { Express, Response, Request, NextFunction } from 'express';
import { mongoConnect } from "./utils/dbConfig";
import { loginController } from "./controllers/loginController";
import { authenticateToken } from "./middleware/auth";
import { bookController } from "./controllers/book.controller";
import { userController } from "./controllers/user.controller";
import { pageController } from "./controllers/page.controller";
import { AppError } from "./interfaces/interfaces";

export const app: Express = express();
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoConnect();

app.use("/login", loginController);
app.use("/", pageController);

app.use(authenticateToken);

app.use("/books", bookController);
app.use("/users", userController);

app.use((error: any, _req: Request, res: Response, _next: NextFunction): any => {
    throw new AppError({ status: error.status || 500, message: error.status ? error.message : "Internal server error" });
})


