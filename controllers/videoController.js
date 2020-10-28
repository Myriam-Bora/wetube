import routes from "../routes";

export const homeController = (req,res) =>{ 
    res.render("home", {
        pageTitle:"Home", 
        videos
    })
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