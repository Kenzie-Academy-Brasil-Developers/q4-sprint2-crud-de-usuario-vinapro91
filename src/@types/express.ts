/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/no-unused-vars */
import * as express from "express";

import { IUserInterface } from "../repositories/user/interface";

declare global {
  namespace Express {
    export interface Request {
      validate: IUserInterface;
    }
  }
}
