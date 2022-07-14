import { Request, Response } from "express";
import Finance from '../models/finance';
import User from '../models/user';



export const getFinances = async(req:Request, res: Response) =>{
    const finances = await Finance.findAll()
    res.status(201).json(finances)
}

export const getFinancesId = async(req:Request, res: Response)=>{
    const { id } = req.params
    try{
        const finance = await Finance.findByPk(id)

        if(!finance){
            return res.status(400).json(`Register with id ${id} doesnt exist`)
        }
            
        
        return res.status(201).json(finance);
        
        
    }catch(err){
        console.log(err)
        return res.status(400).json(`Contact with the administrator`)
    }




}

export const postFinance = async(req: Request, res: Response) => {

    
    const { name, type , total , description, id } = req.body
    
    try{
        const finance =  await Finance.create({ name, type, total, description })
        
        const user = await User.findByPk(id)

       await user.addFinance(finance)

        res.status(201).json('Register created succesfully')


    }catch(error){
        console.log(error)
        res.status(500).json(`Contact with the administrator`)
    }

}


export const financeEdit = async(req:Request, res: Response) => {

    const { id } = req.params
    const { name , type, total, description } = req.body
    
    try{
        const finance = await Finance.findByPk(id);
        if(!finance){
            return res.status(404).json(`Finance doesnt with ${id} exist`)
        }

        await finance.update({name, type, total, description});

        res.status(201).json(finance)


    }catch(error){
        console.log(error);
        res.status(500).json(`Contact with the administrator`)
    }



}


export const deleteFinance = async(req: Request, res: Response) => {
    const { id } = req.params;
  
    const finance = await Finance.findByPk(id);
    if (!finance) {
      return res.status(404).json(`User with id ${id} doesnt exist`);
    }
  
    await finance.update({state: false})
  
    res.status(201).json(finance)
  
  
  };