import * as financialEventsService from "../services/financialEventsService.js"
import jwt from "jsonwebtoken";

export async function postFinancialEvent(req, res){
    const authorization = req.headers.authorization || "";
    const token = authorization.replace("Bearer ", "");
    
    if (!token) {
        return res.sendStatus(401);
    }
    
    let user;
    
    try {
        user = jwt.verify(token, process.env.JWT_SECRET);
    } catch {
        return res.sendStatus(401);
    }
    
    const { value, type } = req.body;
    
    if (!value || !type) {
        return res.sendStatus(422);
    }
    
    const financialTypes = ["INCOME", "OUTCOME"];
    if (!financialTypes.includes(type)) {
        return res.sendStatus(422);
    }
    
    if (value < 0) {
        return res.sendStatus(422);
    }
    
    await financialEventsService.insertFinancialEvent(user.id, value, type);
    
    res.sendStatus(201);

}

export async function getFinancialEvents(req, res){
    const authorization = req.headers.authorization || "";
    const token = authorization.replace("Bearer ", "");
    
    if (!token) {
        return res.sendStatus(401);
    }
    
    let user;
    
    try {
        user = jwt.verify(token, process.env.JWT_SECRET);
    } catch {
        return res.sendStatus(401);
    }
    
    const events = financialEventsService.findFinancialEvents(user.id);

    res.send(events.rows);

}

export async function getSum(req, res){
    const authorization = req.headers.authorization || "";
    const token = authorization.replace("Bearer ", "");
    
    if (!token) {
        return res.sendStatus(401);
    }
    
    let user;
    
    try {
        user = jwt.verify(token, process.env.JWT_SECRET);
    } catch {
        return res.sendStatus(401);
    }
    
    const events = await financialEventsService.findFinancialEvents(user.id);
    const sum = await financialEventsService.sumEvents(events);

    res.send({sum});
}