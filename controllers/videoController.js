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

export const searchController = async(req,res) => {
    const {query : {term : searchingBy}} = req;   
    let videos = [];                    //처음은 배열이 비어 있음  
    
    try{
        videos = await Video.find(
            { title:{ $regex : searchingBy ,  $options : "i" }});
            // $regex : 포함된 단어만 find  ,  $options : 검색 옵션. i는 대/소문자 구별 x
        res.render("search" , {
            pageTitle:"Search", 
            searchingBy,
            videos                  //검색 후 배열
            });
    }catch(error){
        console.log(error)
    } 
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
        description,
        creator: req.user.id
    });
    req.user.videos.push(newVideo.id);
    req.user.save(); 
    res.redirect(routes.videoDetail(newVideo.id));   //id는 자동으로 만들어진다
}

export const videoDetailController = async (req,res) =>{ 
    const {params:{id}} = req;   
    //a태그로 받은 video.id를 id에 담는다
    //   /:id 으로 된 url에서 온 값은 params을 사용

    try{
        const video = await Video.findById(id).populate("creator");
        console.log(video);   
        res.render("videoDetail", {pageTitle:video.title, video})  //비디오 타이틀로 페이지이름을 수정
    }catch(error){
    res.redirect(routes.home)
    }
};

 //edit을 클릭하면
export const getEditVideoController = async (req,res) => { 
    const {params:{id}} = req;
    try{
        const video = await Video.findById(id);
        if (`${video.creator}` !== `${req.user.id}`) {
            throw Error();
          } else {
            res.render("editVideo", { pageTitle: `Edit ${video.title}`, video });
          }
    }catch(error){
        res.redirect(routes.videoDetail(id));
    }
}

//작성 후 update video
export const postEditVideoController = async(req,res) => {
    const {
        params:{id},
        body:{title,description}
    } = req;
    try{
        await Video.findOneAndUpdate({_id:id},{title,description});
        res.redirect(routes.videoDetail(id));
    }catch(error){
        res.redirect(routes.home);
    }
}

export const deleteVideoController = async(req,res) =>{ 
    const {
        params:{id}
    } = req;
    try{
        const video = await Video.findById(id);
        if (`${video.creator}` !== `${req.user.id}`) {
        throw Error();
        } else {
        await Video.findOneAndRemove({ _id: id });
        }
    }catch{}
    res.redirect(routes.home);
};

// Register Video View

export const postRegisterView = async (req, res) => {
    const {
      params: { id }
    } = req;
    try {
      const video = await Video.findById(id);
      video.views += 1;
      video.save();
      res.status(200);
    } catch (error) {
      res.status(400);
    } finally {
      res.end();
    }
  };