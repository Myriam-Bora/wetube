import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import {localsMiddleware} from "./middlewares";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";   
import videoRouter from "./routers/videoRouter"; 
import routes from "./routes"; 

const app = express();

app.use(function(req, res, next) {
    res.setHeader("Content-Security-Policy", "script-src 'self' https://archive.org");
    return next();
});
app.use(helmet());
app.set("view engine", "pug") //  view에 해당하는 확장자를 pug로 설정

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extends:true}));
app.use(morgan("dev"));

app.use(localsMiddleware);

//이곳에서 users , videos, / 을 붙이게 된다
app.use(routes.home, globalRouter);   // / , /login... 등..
app.use(routes.users, userRouter);    // /users/userDetail 등
app.use(routes.videos, videoRouter);  // /videos/deleteVideo 등

export default app;
