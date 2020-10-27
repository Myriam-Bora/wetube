import express from "express";
import routes from "../routes";
import {usersController,userDetailController,editProfileController,changePasswordController} from "../controllers/userController";

const userRouter = express.Router();

userRouter.get(routes.editProfile,editProfileController); //userDetail 보다 먼저 인식시키기 위해 editProfile을 위로 올림
userRouter.get(routes.changePassword,changePasswordController);
userRouter.get(routes.userDetail(),userDetailController);

export default userRouter;