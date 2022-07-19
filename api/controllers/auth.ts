import { Request, Response } from "express";
import bcryptjs from 'bcryptjs';
import User from '../models/user';
import { jwtGenerator } from '../helpers/jwtgenerator';




export const loginController = async(req:Request, res:Response ) =>{

    const { email , password } = req.body

    try{
        const user = await User.findOne({
            where:{
                email: email
            } 
        } );
      
        if(!user){
            return res.status(400).json('Email is invalid')
        }

        const validatePassword = bcryptjs.compareSync(password, user.password);

        if(!validatePassword){
            return res.status(400).json('Invalid password')
        }

        const token = await jwtGenerator(user.id);

        res.json({user, token})


    }catch(error){
        console.log(error)
        return res.status(500).json('Contact with the administrator')
    }

}




