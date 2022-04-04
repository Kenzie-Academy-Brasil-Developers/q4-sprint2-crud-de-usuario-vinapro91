import { Request, Response } from "express";

import { UserRepository } from "../../repositories/user";

const getAllUsersController = async (req: Request, res: Response) => {
  try {
    const users = await new UserRepository().getUsers();
    return res.status(200).json(users);
  } catch (error) {
    return res.status(400).json({ Error: error.detail });
  }
};

export { getAllUsersController };
