import express, { Express } from "express";
import { mongoConnect } from "./utils/dbConfig";
import { loginController } from "./controllers/loginController";

export const app: Express = express();

mongoConnect();

app.use("login", loginController);


