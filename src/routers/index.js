import { Router } from "express";
import financialEventsRouter from "./financialEventsRouter.js";
import signInRouter from "./signInRouter.js";
import signUpRouter from "./signUpRouter.js";

const router = Router();

router.use(signUpRouter);
router.use(signInRouter);
router.use(financialEventsRouter);

export default router;