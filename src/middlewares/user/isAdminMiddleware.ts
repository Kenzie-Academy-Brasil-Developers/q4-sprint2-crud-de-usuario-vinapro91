import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

import config from "../../config/config";
import { UserRepository } from "../../repositories/user";
import { IUserInterface } from "../../repositories/user/interface";

const isAdmMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization.split(" ")[1];
  const decoded: IUserInterface | void = await jwt.verify(
    token,
    config.secret,
    (err, decoded: IUserInterface) => {
      if (err) {
        console.log(err);
        return res.status(401).json({ message: "Invalid Token." });
      }
      return decoded;
    }
  );
  const { email } = decoded.user;

  const user = await new UserRepository().findOne(email);
  if (user.isAdm) {
    return next();
  }
  if (req.params.uuid) {
    const paramsUuid = req.params.uuid;
    if (paramsUuid === user.uuid) {
      return next();
    }
    return res.status(401).json({
      message: "Missing admin permissions",
    });
  }
  return res.status(401).json({ message: "Unauthorized" });
};

export { isAdmMiddleware };
