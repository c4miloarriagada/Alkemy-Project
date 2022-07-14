import { Request, Response } from "express";
import bcryptjs from 'bcryptjs'
import { jwtGenerator } from '../helpers/jwtgenerator';
import User from '../models/user';
import Finance from '../models/finance';


export const getUsers = async (req: Request, res: Response) => {
  const users = await User.findAll();

  res.status(201).json(users);
};

export const getUser = async (req: Request, res: Response) => {
  const { id } = req.params;

  const user = await User.findByPk(id,{
    include:{
      model: Finance,
      limit: 10,
      order:[ ['createdAt', 'DESC'] ],
      where: {
        state: true
      }
    }
  })
 
  if (!user) {
    res.status(404).json(`User ${id} doesnt exist.`);
  } else {
    res.status(201).json(user);
  }
};

export const postUser = async (req: Request, res: Response) => {

  const { email , name , password } = req.body

  try {
    const findEmail = await User.findOne({
      where: {
        email: email,
      },
    });
    if (findEmail) {
      return res.status(400).json(`E-mail already exist ${email}`);
    }
    const user = new User({name, email, password, state:true})
    const salt = bcryptjs.genSaltSync();
    
    user.password = bcryptjs.hashSync(password, salt)
   
    await user.save();

    const token = await jwtGenerator(user.id)
   
    res.status(201).json({user, token});

  } catch (error) {
    console.log(error);
    res.status(500).json(`Server problem, contact admin`);
  }
};

export const updateUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { email , name , password } = req.body

  try {
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json(`User with id ${id} doesnt exist`);
    }

    await user.update({email , name , password });

    res.status(201).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json(`Server problem, contact admin`);
  }
};

export const deleteUser = async(req: Request, res: Response) => {
  const { id } = req.params;

  const user = await User.findByPk(id);
  if (!user) {
    return res.status(404).json(`User with id ${id} doesnt exist`);
  }

  await user.update({state: false})

  res.status(201).json(user)


};
