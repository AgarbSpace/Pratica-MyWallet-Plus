import { Router } from "express";
import { getFinancialEvents, getSum, postFinancialEvent } from "../controllers/financialEventsController.js";

const financialEventsRouter = Router();

financialEventsRouter.post("/financial-events", postFinancialEvent);  
financialEventsRouter.get("/financial-events", getFinancialEvents);
financialEventsRouter.get("/financial-events/sum", getSum);

export default financialEventsRouter;