//url 구조를 굳이 외우지 않고 바로 찾아가기 위해 작성

//global
const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";
const SEARCH = "/search";

//users
const USERS = "/users";
const USER_DETAIL = "/:id";  // :id   express가 바뀌는 url임을 인식
const EDIT_PROFILE = "/editProfile";
const CHANGE_PASSWORD = "/changePassword";

//videod
const VIDEOS = "/videos";
const UPLOAD = "/upload";
const VIDEO_DETAIL = "/:id";
const EDIT_VIDEO = "/editVideo";
const DELETE_VIDEO = "/deleteVideo";

const routes = {
    home: HOME,
    join:JOIN,
    login:LOGIN,
    logout:LOGOUT,
    search:SEARCH,
    users:USERS,
    userDetail:USER_DETAIL,
    editProfile:EDIT_PROFILE,
    changePassword:CHANGE_PASSWORD,
    videos:VIDEOS,
    upload:UPLOAD,
    videoDetail:VIDEO_DETAIL,
    editVideo:EDIT_VIDEO,
    deleteVideo:DELETE_VIDEO
};

export default routes;