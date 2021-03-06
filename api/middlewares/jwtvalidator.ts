import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/user';

interface MyUserRequest extends Request {
    user?: string ;
  }


export const jwtValidator = async(req:MyUserRequest, res:Response, next:NextFunction )=> {
 
    const token = req.header('x-token');


    if(!token){
        return res.status(401).json('Token is required')
    }

    try{
        const { id }:any = jwt.verify(token, 'Th1S1SMyS3CR37k3Y');
        const user = await User.findByPk(id);
        
    if(!user){
        return res.status(401).json('User doesnt exist')
    }
    
        req.user = user

        next();
        
    }catch(error){
        console.log(error)
        res.status(401).json('Token invalid')
    }

}