import { signInRepository } from "../repositories/signInRepository.js";

export async function findUserByEmail(email){
    const rows = await signInRepository.findUserByEmail(email);
    return rows;
}
