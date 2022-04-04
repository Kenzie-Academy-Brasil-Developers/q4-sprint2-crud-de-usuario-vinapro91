import { Request, Response } from "express";

import { UserRepository } from "../../repositories/user";

const updateUserController = async (req: Request, res: Response) => {
  const { uuid } = req.params;
  if (req.body.name) {
    try {
      const { name } = req.body;
      await new UserRepository().updateName(uuid, name);
      const users = await new UserRepository().findById(uuid);
      return res.status(200).json(users);
    } catch (error) {
      return res.status(400).json({ Error: error.detail });
    }
  }

  if (req.body.email) {
    try {
      const { email } = req.body;
      const users = await new UserRepository().updateEmail(uuid, email);
      return res.status(200).json(users);
    } catch (error) {
      return res.status(400).json({ Error: error.detail });
    }
  }
  if (req.body.password) {
    try {
      const { password } = req.body;
      const users = await new UserRepository().updatePassword(uuid, password);
      return res.status(200).json(users);
    } catch (error) {
      return res.status(400).json({ Error: error.detail });
    }
  }
  return undefined;
};

export { updateUserController };
