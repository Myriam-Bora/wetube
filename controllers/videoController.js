export const homeController = (req,res) => res.render("home")   // .render : views폴더에서 파일명이 home이고 확장자가 pug인 파일을 찾은 후 보여준다
export const searchController = (req,res) => res.send("search!")
export const videosController = (req,res) => res.send("videosController");
export const uploadController = (req,res) => res.send("uploadController");
export const videoDetailController = (req,res) => res.send("videoDetailController");
export const editVideoController = (req,res) => res.send("editVideoController");
export const deleteVideoController = (req,res) => res.send("deleteVideoController");