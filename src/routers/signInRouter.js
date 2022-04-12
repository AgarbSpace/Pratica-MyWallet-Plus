import { Router } from "express";
import { signInController } from "../controllers/signInController.js";

const signInRouter = Router();

signInRouter.post("/sign-in", signInController);

export default signInRouter;