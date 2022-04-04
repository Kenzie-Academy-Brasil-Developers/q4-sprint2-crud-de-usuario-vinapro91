import bcrypt from "bcryptjs";
import { Request, Response } from "express";
import jwt from "jsonwebtoken";

import config from "../../config/config";
import { UserRepository } from "../../repositories/user";

const loginControler = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { email, password } = req.validate;

  const user = await new UserRepository().findOne(email);
  if (!user) {
    return res.status(401).json({ message: "User not found." });
  }
  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    return res.status(401).json({ message: "Wrong credentials. Try again!" });
  }
  const token: string = jwt.sign({ user }, config.secret, {
    expiresIn: config.expiresIn,
  });
  return res.status(200).json({ token });
};

export { loginControler };
