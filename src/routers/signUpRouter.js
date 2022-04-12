import { Router } from "express"
import { signUpController } from "../controllers/signUpController.js";

const signUpRouter = Router();

signUpRouter.post("/sign-up", signUpController);

export default signUpRouter;