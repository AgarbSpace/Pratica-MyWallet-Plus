import bcrypt from "bcrypt";
import * as signUpService from "../services/signUpService.js"

export async function signUpController(req, res){

      const { name, email, password } = req.body;
  
      if (!name || !email || !password) {
        return res.sendStatus(422);
      }

      await signUpService.findUserByEmail(email);
      
      const hashedPassword = bcrypt.hashSync(password, 12);
  
      await signUpService.insertUser(name, email, hashedPassword);
  
      res.sendStatus(201);

  }