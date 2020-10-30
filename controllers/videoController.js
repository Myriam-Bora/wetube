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
export const postUploadController = async(req,res) => {
    //videos에 업로드된 파일(url방식으로) 에 접근
    const {
        body :{   //body : 업로드할때 기재한 정보들
            title, 
            description
        },
        file : {path}   //file : path,originalname,distination,size.. 등등의 정보
    } = req;   

    const newVideo = await Video.create({   // Video : 모델에서 만든 스키마
        fileUrl:path,
        title,
        description
    });
    console.log(newVideo); 

    res.redirect(routes.videoDetail(newVideo.id));   //id는 자동으로 만들어진다
}

export const videoDetailController = async (req,res) =>{ 
    const {params:{id}} = req;   
    //a태그로 받은 video.id를 id에 담는다
    //   /:id 으로 된 url에서 온 값은 params을 사용

    try{
        const video = await Video.findById(id);      //Video: 모델, 아이디에 해당되는 비디오를 찾아 video에 담는다
        res.render("videoDetail", {pageTitle:"Video Detail", video})
        console.log(video);
    }catch(error){
    res.redirect(routes.home)
    }
};

 //edit을 클릭하면
export const getEditVideoController = async (req,res) => { 
    const {params:{id}} = req;
    try{
        const video = await Video.findById(id);
        res.render("editVideo", {pageTitle:`Edit ${video.title}`, video});
    }catch(error){
        res.redirect(routes.videoDetail(id));
    }
}

//작성 후 update video
export const postEditVideoController = (req,res) => res.render("editVideo", {pageTitle:"Edit Video"});

export const deleteVideoController = (req,res) => res.render("deleteVideo", {pageTitle:"Delete Video"});