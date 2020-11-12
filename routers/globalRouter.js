import express from "express";
import passport from "passport";
import { postJoinController,
    getJoinController, 
    getLoginController, 
    postLoginController, 
    logoutController,
    postGithubLogIn, 
    githubLogin,
    getMe} 
from "../controllers/userController";
import { onlyPrivate,onlyPublic  } from "../middlewares";
import { homeController, searchController } from "../controllers/videoController";
import routes from "../routes";

const globalRouter = express.Router(); 

globalRouter.get(routes.join,onlyPublic,  getJoinController,);
globalRouter.post(routes.join, onlyPublic, postJoinController,postLoginController); //join하여 받은 이메일과 비번을 postLogin으로 보낸다

globalRouter.get(routes.login, onlyPublic,getLoginController);
globalRouter.post(routes.login, onlyPublic, postLoginController);

globalRouter.get(routes.home, homeController);
globalRouter.get(routes.logout, onlyPrivate , logoutController);

globalRouter.get(routes.gitHub, githubLogin);

globalRouter.get(
  routes.githubCallback,
  passport.authenticate("github", { failureRedirect: "/login" }),
  postGithubLogIn
);

globalRouter.get(routes.search, searchController);

globalRouter.get(routes.me, getMe);

export default globalRouter;