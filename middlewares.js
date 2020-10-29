import routes from "./routes";
import multer from "multer";

//업로드를 하면 내컴퓨터에 있는 폴더(=videos)에 올라간다
// uploads/videos 으로 수정 (앞에 /를 포함시키면 프로젝트안에 있는 경로로 인식하기 때문에 주의할것
const multerVideo = multer({dest:"uploads/videos/"});

// 변수를  local 함수에 담아서 모든 템플릿(뷰,레이아웃 pug..)에서도 해당 변수를 사용 할 수 있게 만든다
export const localsMiddleware = (req,res,next) =>{
    res.locals.siteName = "WeTube";
    res.locals.routes = routes;
    res.locals.user = {
        isAuthenticated:true,
        id:1
    };
    next();  //local안에서 다음 함수로 넘기기위한 함수
}

export const uploadVideo = multerVideo.single('videoFile'); 
//videoFile : upload form 에서 보낸 name
// single : 하나의 파일만 업로드 할 수 있게 한다