export const homeController = (req,res) => res.render("home")   // .render : views폴더에서 파일명이 home이고 확장자가 pug인 파일을 찾은 후 보여준다
export const searchController = (req,res) => res.render("search")
export const videosController = (req,res) => res.render("videos");
export const uploadController = (req,res) => res.render("upload");
export const videoDetailController = (req,res) => res.render("videoDetail");
export const editVideoController = (req,res) => res.render("editVideo");
export const deleteVideoController = (req,res) => res.render("deleteVideo");