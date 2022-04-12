import { financialEventsRepository } from "../repositories/financialEventsRepository.js";

export async function insertFinancialEvent(userId, value, type){
    await financialEventsRepository.inserFinancialEvent(userId, value, type);
}

export async function findFinancialEvents(userId){
    const events = await financialEventsRepository.findFinancialEvents(userId);
    
    if(!events){
        throw {type: "Not_Found", message:"Financial Events Not Found"}
    }

    return events;
}

export async function sumEvents(events){
    const sum = events.rows.reduce(
        (total, event) =>
        event.type === "INCOME" ? total + event.value : total - event.value,
        0
    );
    
    return sum;
}