import { NextFunction, Request, Response } from "express";
import { AnySchema } from "yup";

const validateShape =
  (shape: AnySchema) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      req.validate = await shape.validate(req.body);
      next();
    } catch (error) {
      res.status(400).send(error.message);
    }
  };

export { validateShape };
