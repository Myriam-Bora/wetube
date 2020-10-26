import routes from "./routes";

// 변수를  local 함수에 담아서 모든 템플릿(뷰,레이아웃 pug..)에서도 해당 변수를 사용 할 수 있게 만든다
export const localsMiddleware = (req,res,next) =>{
    res.locals.siteName = "WeTube";
    res.locals.routes = routes;
    next();  //local안에서 다음 함수로 넘기기위한 함수
}