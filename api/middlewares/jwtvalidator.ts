import { NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/user';


export const jwtValidator = async(req:Request, res:Response, next:NextFunction )=> {

    const token = req.header('x-token');

    if(!token){
        return res.status(401).json('Token is required')
    }

    try{
        const { id } = jwt.verify(token, process.env.SECRETORPRIVATEKEY);
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