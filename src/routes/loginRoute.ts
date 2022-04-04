import { Router, Express } from "express";

import { loginControler } from "../controller";
import { validateShape } from "../middlewares";
import { loginShape } from "../shape";

const loginRoute = (app: Express) => {
  const route = Router();

  route.post("/", validateShape(loginShape), loginControler);

  app.use("/login", route);
};
export default loginRoute;
