import { Request, Response } from "express";

import { UserRepository } from "../../repositories/user";

const deleteUserController = async (req: Request, res: Response) => {
  const { uuid } = req.params;
  try {
    await new UserRepository().deleteUser(uuid);
    return res.status(200).json({
      message: "User deleted with success",
    });
  } catch (error) {
    return res.status(400).json({ Error: error.detail });
  }
};

export { deleteUserController };
