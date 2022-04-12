import { signUpRepository } from "../repositories/signUpRepository.js";

export async function findUserByEmail(email){
    const existingUsers = await signUpRepository.findUserByEmail(email);
    if (existingUsers.rowCount > 0) {
        throw {type:"Conflict", message: "E-mail already in use"};
    }
}

export async function insertUser(name, email, hashedPassword){
    await signUpRepository.insertUser(name, email, hashedPassword);
}