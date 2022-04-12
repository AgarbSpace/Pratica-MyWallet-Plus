import connection from "../database.js";

async function inserFinancialEvent(userId, value, type){
    await connection.query(
        `INSERT INTO "financialEvents" ("userId", "value", "type") VALUES ($1, $2, $3)`,
        [userId, value, type]
    );
}

async function findFinancialEvents(userId){
    const events = await connection.query(
        `SELECT * FROM "financialEvents" WHERE "userId"=$1 ORDER BY "id" DESC`,
        [userId]
    );

    return events
}

export const financialEventsRepository = {
    inserFinancialEvent,
    findFinancialEvents
}