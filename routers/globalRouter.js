import express from "express";
import { postJoinController,getJoinController, getLoginController, postLoginController, logoutController } from "../controllers/userController";
import { homeController, searchController } from "../controllers/videoController";
import routes from "../routes";

const globalRouter = express.Router(); 

// 각 controller에서 export한 객체 사용
globalRouter.post(routes.join, postJoinController);
globalRouter.get(routes.join, getJoinController);

globalRouter.get(routes.login, getLoginController);
globalRouter.post(routes.login, postLoginController);

globalRouter.get(routes.home, homeController);
globalRouter.get(routes.logout, logoutController);
globalRouter.get(routes.search, searchController);

export default globalRouter;