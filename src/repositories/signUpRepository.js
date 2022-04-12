import connection from "../database.js";

async function findUserByEmail(email){
    const existingUsers = await connection.query(
        `SELECT * FROM "users" WHERE "email"=$1`,
        [email]
    );
    return existingUsers;
}

async function insertUser(name, email, hashedPassword){
    await connection.query(
        `INSERT INTO "users" ("name", "email", "password") VALUES ($1, $2, $3)`,
        [name, email, hashedPassword]
    );
}

export const signUpRepository = {
    findUserByEmail,
    insertUser
}
