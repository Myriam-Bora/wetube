import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";   
import videoRouter from "./routers/videoRouter"; 
import routes from "./routes"; 

const app = express();

app.use(bodyParser.urlencoded({extends:true}));
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(morgan("dev"));
app.use(helmet());

app.use(routes.home, globalRouter);   //login 등..
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;
