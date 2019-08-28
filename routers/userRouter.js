import express from "express";
import routes from "../routes";
import {
  userDetail,
  editProfile,
  changePassword,
  users
} from "../controllers/userController";

const userRouter = express.Router();

globalRouter.get(routes.user, users);
globalRouter.get(routes.userDetail, userDetail);
globalRouter.get(routes.editProfile, editProfile);
globalRouter.get(routes.changePassword, changePassword);

export default userRouter;
