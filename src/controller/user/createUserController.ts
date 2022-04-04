import { Request, Response } from "express";

import { UserRepository } from "../../repositories/user";
import { IUserInterface } from "../../repositories/user/interface";
import { serializer } from "../../services/userServices";

const createUserControler = async (req: Request, res: Response) => {
  try {
    const data: IUserInterface = req.validate;
    const user: IUserInterface = await new UserRepository().createUser(data);
    const serialize = serializer(user);
    return res.status(201).json(serialize);
  } catch (error) {
    return res.status(400).json({ Error: error.detail });
  }
};

export { createUserControler };
