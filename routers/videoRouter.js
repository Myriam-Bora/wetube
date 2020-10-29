import express from "express";
import routes from "../routes";
import {videosController,getUploadController,postUploadController,videoDetailController,editVideoController,deleteVideoController} from "../controllers/videoController";
import { uploadVideo } from "../middlewares";

const videoRouter = express.Router();  //다른 곳에서 임포트 하기 위해 export

videoRouter.get(routes.upload, getUploadController);
videoRouter.post(routes.upload, uploadVideo,postUploadController);  //post로 받고 respose 


videoRouter.get(routes.editVideo, editVideoController); //videoDetail 보다 먼저 인식시키기 위해 videoDetail을 아래로 내림
videoRouter.get(routes.deleteVideo,deleteVideoController);
videoRouter.get(routes.videoDetail(),videoDetailController);

export default videoRouter;