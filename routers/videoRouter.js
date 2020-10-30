import express from "express";
import routes from "../routes";
import {videosController,getUploadController,postUploadController,videoDetailController,getEditVideoController,postEditVideoController,deleteVideoController} from "../controllers/videoController";
import { uploadVideo } from "../middlewares";

const videoRouter = express.Router();  //다른 곳에서 임포트 하기 위해 export

videoRouter.get(routes.upload, getUploadController);
videoRouter.post(routes.upload, uploadVideo,postUploadController);  //post로 받고 respose 


videoRouter.get(routes.editVideo(), getEditVideoController); 
videoRouter.post(routes.editVideo(), postEditVideoController); 

videoRouter.get(routes.videoDetail(),videoDetailController);

videoRouter.get(routes.deleteVideo,deleteVideoController);

export default videoRouter;