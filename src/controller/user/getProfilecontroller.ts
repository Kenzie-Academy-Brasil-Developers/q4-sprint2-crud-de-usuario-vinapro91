import { Request, Response } from "express";

import { UserRepository } from "../../repositories/user";

const getProfileController = async (req: Request, res: Response) => {
  try {
    const { uuid } = req.validate;
    const users = await new UserRepository().findById(uuid);
    return res.status(200).json(users);
  } catch (error) {
    return res.status(400).json({ Error: error.detail });
  }
};

export { getProfileController };
