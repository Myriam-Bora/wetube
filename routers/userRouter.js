import express from "express";
import routes from "../routes";
import {usersController,
    userDetailController,
    getEditProfileController,
    postEditProfileController,
    getChangePasswordController,
    postChangePasswordController} from "../controllers/userController";
import {onlyPrivate, uploadAvatar} from "../middlewares";

const userRouter = express.Router();

userRouter.get(routes.editProfile,onlyPrivate,getEditProfileController); //userDetail 보다 먼저 인식시키기 위해 editProfile을 위로 올림
userRouter.post(routes.editProfile,onlyPrivate,uploadAvatar,postEditProfileController);

userRouter.get(routes.changePassword,onlyPrivate,getChangePasswordController);
userRouter.post(routes.changePassword,onlyPrivate,postChangePasswordController);
userRouter.get(routes.userDetail(),userDetailController);

export default userRouter;