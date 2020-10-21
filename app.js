import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";   
import videoRouter from "./routers/videoRouter";  

const app = express();

app.use(bodyParser.urlencoded({extends:true}));
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(morgan("dev"));
app.use(helmet());

app.use("/", globalRouter);   //login 등..
app.use("/user", userRouter);
app.use("/video", videoRouter);


export default app;
