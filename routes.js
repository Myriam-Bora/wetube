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
const ME = "/me";

//videos
const VIDEOS = "/videos";    //   /videos/videos
const UPLOAD = "/upload";    //   /videos/upload
const VIDEO_DETAIL = "/:id";
const EDIT_VIDEO = "/:id/edit-video";
const DELETE_VIDEO = "/:id/delete-video";

// Github
const GITHUB = "/auth/github";
const GITHUB_CALLBACK = "/auth/github/callback";

// API
const API = "/api";
const REGISTER_VIEW = "/:id/view";

const routes = {
    home: HOME,
    join:JOIN,
    login:LOGIN,
    logout:LOGOUT,
    search:SEARCH,
    users:USERS,
    userDetail: (id) =>{
        if(id){
            return `/users/${id}`
        }else{
            return USER_DETAIL;
        }
    },
    editProfile:EDIT_PROFILE,
    changePassword:CHANGE_PASSWORD,
    videos:VIDEOS,
    upload:UPLOAD,
    videoDetail:(id)=>{
        if(id){
            return `/videos/${id}`
        }else{
            return VIDEO_DETAIL
        }
    },
    editVideo:(id)=>{
        if(id){
            return `/videos/${id}/edit-video`
        }else{
            return EDIT_VIDEO
        }
    },
    deleteVideo :(id)=>{
        if(id){
            return `/videos/${id}/delete-video`
        }else{
             return DELETE_VIDEO;
        }
    },
    gitHub: GITHUB,
    githubCallback: GITHUB_CALLBACK,
    me: ME,
    api: API,
    registerView: REGISTER_VIEW
}

export default routes;