import { Request, Response } from "express";
import User from "../models/user";

export const getUsers = async (req: Request, res: Response) => {
  const users = await User.findAll();

  res.status(201).json(users);
};

export const getUser = async (req: Request, res: Response) => {
  const { id } = req.params;

  const user = await User.findByPk(id);
  console.log(user);

  if (!user) {
    res.status(404).json(`User ${id} doesnt exist.`);
  } else {
    res.status(201).json(user);
  }
};

export const postUser = async (req: Request, res: Response) => {
  const { body } = req;

  try {
    const email = await User.findOne({
      where: {
        email: body.email,
      },
    });
    if (email) {
      return res.status(400).json(`E-mail already exist ${body.email}`);
    }

    const user = new User(body);
    await user.save();

    res.status(201).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json(`Server problem, contact admin`);
  }
};

export const updateUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { body } = req;

  try {
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json(`User with id ${id} doesnt exist`);
    }

    await user.update(body);

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
