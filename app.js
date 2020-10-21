import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import {userRouter} from "./router";   //router에서 디폴프로 export 한것이 아니기 때문에.. 
// const express = require('express');
const app = express();

const handleHome = (req,res) =>{
    console.log("handleHome !");
    res.send("handleHome response!");
}

const handleProfile = (req,res) => {
    console.log("handleProfile !");
    res.send("handleProfile response!")
}

app.use(bodyParser.urlencoded({extends:true}));
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(morgan("dev"));
app.use(helmet());

app.use("/user", userRouter); //  /user로 접속하면 userRouter를 사용할 수 있다.
app.get("/profile",handleProfile);

export default app;
