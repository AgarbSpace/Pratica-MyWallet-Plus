import connection from "../database.js";

async function findUserByEmail(email){
    const { rows } = await connection.query(
        `SELECT * FROM "users" WHERE "email"=$1`,
        [email]
    );
    
    return rows;
}

export const signInRepository = {
    findUserByEmail
}