import Video from "../models/Video";
import routes from "../routes";

export const homeController = async (req,res) =>{ 
    try{
    const videos = await Video.find({});        //find():데이터베이스에 있는 모든 비디오를 찾는다
    res.render("home", {
        pageTitle:"Home", 
        videos
    })
    }catch(error){
        console.log(error);
        res.render("home", {pageTitle:"Home", videos:[] })  //에러가 있으면 비어있는 비디오 목록을 보여준다
    }
} 

export const searchController = (req,res) => {
    const {query : {term : searchingBy}} = req;     
    console.log(searchingBy)
    res.render("search" , {
        pageTitle:"Search", 
        searchingBy:searchingBy,
        videos
    })
}

export const getUploadController = (req,res) => res.render("upload", {pageTitle:"Upload Video"});
export const postUploadController = (req,res) => {
    res.redirect(routes.videoDetail(324393));
    res.render("upload", 
    {pageTitle:"Upload Video"}
    )};

export const videoDetailController = (req,res) => res.render("videoDetail", {pageTitle:"Video Detail"});

export const editVideoController = (req,res) => res.render("editVideo", {pageTitle:"Edit Video"});

export const deleteVideoController = (req,res) => res.render("deleteVideo", {pageTitle:"Delete Video"});