//url 구조를 굳이 외우지 않고 바로 찾아가기 위해 작성

//global
const HOME = "/";
const JOIN = "/join";    //  /join
const LOGIN = "/login";  //  /login
const LOGOUT = "/logout";
const SEARCH = "/search";

//users
const USERS = "/users";
const USER_DETAIL = "/:id";  // :id   express가 바뀌는 url임을 인식
const EDIT_PROFILE = "/edit-profile";  // /users/edit-profile
const CHANGE_PASSWORD = "/change-password"; // /users/change-password

//videos
const VIDEOS = "/videos";    //   /videos/videos
const UPLOAD = "/upload";    //   /videos/upload
const VIDEO_DETAIL = "/:id";
const EDIT_VIDEO = "/:id/edit-video";
const DELETE_VIDEO = "/:id/delete-video";

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