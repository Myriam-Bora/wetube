import express from "express";
import routes from "../routes";
import {usersController,userDetailController,getEditProfileController,changePasswordController} from "../controllers/userController";
import {onlyPrivate} from "../middlewares";

const userRouter = express.Router();

userRouter.get(routes.editProfile,onlyPrivate,getEditProfileController); //userDetail 보다 먼저 인식시키기 위해 editProfile을 위로 올림
userRouter.get(routes.changePassword,onlyPrivate,changePasswordController);
userRouter.get(routes.userDetail(),userDetailController);

export default userRouter;