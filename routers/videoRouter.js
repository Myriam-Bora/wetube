import express from "express";
import routes from "../routes";
import {videosController,uploadController,videoDetailController,editVideoController,deleteVideoController} from "../controllers/videoController";

const videoRouter = express.Router();  //다른 곳에서 임포트 하기 위해 export

videoRouter.get(routes.videos, (req,res) => res.send("videos!"));
videoRouter.get(routes.upload, (req,res) => res.send("upload!"));
videoRouter.get(routes.editVideo, (req,res) => res.send("editVideo!")); //videoDetail 보다 먼저 인식시키기 위해 videoDetail을 아래로 내림
videoRouter.get(routes.deleteVideo, (req,res) => res.send("deleteVideo!"));
videoRouter.get(routes.videoDetail, (req,res) => res.send("videoDetail!"));

export default videoRouter;