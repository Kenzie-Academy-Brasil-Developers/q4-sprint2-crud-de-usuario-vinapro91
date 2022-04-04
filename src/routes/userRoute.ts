import { Router, Express } from "express";

import {
  createUserControler,
  deleteUserController,
  getAllUsersController,
  getProfileController,
  updateUserController,
} from "../controller";
import { validateShape } from "../middlewares";
import authenticateUser from "../middlewares/user/authenticateUserMiddleware";
import { isAdmMiddleware } from "../middlewares/user/isAdminMiddleware";
import { createUserShape } from "../shape/user/userShape";

const userRoutes = (app: Express) => {
  const route = Router();

  route.post("/", validateShape(createUserShape), createUserControler);

  route.get("/", authenticateUser, isAdmMiddleware, getAllUsersController);
  route.get("/profile", authenticateUser, getProfileController);

  route.patch(
    "/:uuid",
    authenticateUser,
    isAdmMiddleware,
    updateUserController
  );
  route.delete("/:uuid", authenticateUser, deleteUserController);

  app.use("/users", route);
};
export default userRoutes;
