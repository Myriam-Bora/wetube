import passport from "passport";
import GithubStrategy from "passport-github";
import User from "./models/User";
import { githubLoginCallback } from "./controllers/userController";
import routes from "./routes";

passport.use(User.createStrategy());   //strategy 생성

passport.use(
    new GithubStrategy(
        {
          clientID: process.env.GH_ID,
          clientSecret: process.env.GH_SECRET,
          callbackURL: `http://localhost:4000${routes.githubCallback}`
        },
        githubLoginCallback
      )
  );

passport.serializeUser(User.serializeUser());//serializeUser : 어떤 정보를 쿠키에게 주는가
passport.deserializeUser(User.deserializeUser());//deserialize : 어느 사용자인지 어떻게 찾는가  


