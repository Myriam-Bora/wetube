import express from "express";
import app from "./app";

export const userRouter = express.Router();  //다른 곳에서 임포트 하기 위해 export

userRouter.get("/", (req,res) => res.send("user home"));  //익명 펑션 작성!
userRouter.get("/login", (req,res) => res.send("user login"));  //익명 펑션 작성!
userRouter.get("/password", (req,res) => res.send("user password"));  //익명 펑션 작성!