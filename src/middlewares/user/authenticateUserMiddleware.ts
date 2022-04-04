import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

import config from "../../config/config";
import { IUserInterface } from "../../repositories/user/interface";

const authenticateUser = (
  req: Request,
  res: Response,
  next: NextFunction
): Response | NextFunction => {
  if (!req.headers.authorization) {
    return res.status(401).json({ message: "Missing authorization" });
  }

  const token = req.headers.authorization.split(" ")[1];

  jwt.verify(token, config.secret, async (err) => {
    if (err) {
      console.log(err);
      return res.status(401).json({ message: "Invalid Token." });
    }
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
    req.validate = decoded.user;
    return next();
  });
  return undefined;
};

export default authenticateUser;
