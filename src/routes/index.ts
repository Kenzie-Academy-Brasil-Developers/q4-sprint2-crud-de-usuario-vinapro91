import express, { Express } from "express";

import loginRoute from "./loginRoute";
import userRoutes from "./userRoute";

const routes = (app: Express) => {
  app.use(express.json());
  userRoutes(app);
  loginRoute(app);
};

export default routes;
