import express from "express";
import { postJoinController,getJoinController, getLoginController, postLoginController, logoutController } from "../controllers/userController";
import { homeController, searchController } from "../controllers/videoController";
import routes from "../routes";

const globalRouter = express.Router(); 

globalRouter.post(routes.join, postJoinController,postLoginController); //join하여 받은 이메일과 비번을 postLogin으로 보낸다
globalRouter.get(routes.join, getJoinController,);

globalRouter.get(routes.login, getLoginController);
globalRouter.post(routes.login, postLoginController);

globalRouter.get(routes.home, homeController);
globalRouter.get(routes.logout, logoutController);
globalRouter.get(routes.search, searchController);

export default globalRouter;