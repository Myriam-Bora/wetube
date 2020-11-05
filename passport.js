//passport-local : 사용자이름과 패스워드를 쓰는 사용자 인증 방식(=strategy)
//깃허브, 페이스북... 등
//변경,찾기 등을 알아서 다 해준다!

import passport from "passport";
import User from "./models/User";

passport.use(User.createStrategy());   //strategy 생성
passport.serializeUser(User.serializeUser());//serializeUser : 어떤 정보를 쿠키에게 주는가
passport.deserializeUser(User.deserializeUser());//deserialize : 어느 사용자인지 어떻게 찾는가  


