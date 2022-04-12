import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import * as signInService from "../services/signInService.js"

export async function signInController (req, res) {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.sendStatus(422);
        }

        const rows = await signInService.findUserByEmail(email);

        const [user] = rows;

        if (!user || !bcrypt.compareSync(password, user.password)) {
            return res.sendStatus(401);
        }

        const token = jwt.sign(
            {
            id: user.id,
            },
            process.env.JWT_SECRET
        );

        res.send({
            token,
        });
        
}