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

  //Error: Failed to serialize user into session 해결방법!
  //email을 username (인증값, 쿠키에서 불러오는 값)으로 사용했기 때문에 
  //email이 private이 아닌 public(공용) 설정으로 되어 있어야 했던 것.
  passport.serializeUser(function (user, done) {
    done(null, user);
    });
    
    passport.deserializeUser(function(id, done){
      User.findById(id, function(err, user){
      done(err, user);
      });
      });


