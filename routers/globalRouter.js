import express from "express";
import { postJoinController,getJoinController, getLoginController, postLoginController, logoutController } from "../controllers/userController";
import { onlyPublic } from "../middlewares";
import { homeController, searchController } from "../controllers/videoController";
import routes from "../routes";

const globalRouter = express.Router(); 

globalRouter.post(routes.join, onlyPublic, postJoinController,postLoginController); //join하여 받은 이메일과 비번을 postLogin으로 보낸다
globalRouter.get(routes.join,onlyPublic,  getJoinController,);

globalRouter.get(routes.login, onlyPublic,getLoginController);
globalRouter.post(routes.login, onlyPublic, postLoginController);

globalRouter.get(routes.home, homeController);
globalRouter.get(routes.logout, onlyPublic, logoutController);
globalRouter.get(routes.search, searchController);

export default globalRouter;