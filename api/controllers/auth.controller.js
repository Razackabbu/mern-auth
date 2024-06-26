import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';
import { errorHandler } from '../utils/errors.js';
export const signup = async (req, res) =>{
   const { username, email, password } = req.body;
   const hashedPassword = bcryptjs.hashSync(password,5)
   const newUser = new User({ username, email, password: hashedPassword });
   try{
    
   await newUser.save()
   res.status(201).json({message:"User created Successfully"});
   }
   catch(error){
    next(error); 
   }
};