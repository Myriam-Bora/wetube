export const homeController = (req,res) => res.render("home", {pageTitle:"Home"}) // render(템플릿이름 , 템플릿에 추가할 정보)
export const searchController = (req,res) => {
    const {query : {term : searchingBy}} = req;     
    //ES6 방식 - > const searchingBy = req.query.term 과 같은 말이다.
    console.log(searchingBy)
    res.render("search" , {pageTitle:"Search", searchingBy:searchingBy})
}
export const uploadController = (req,res) => res.render("upload", {pageTitle:"Upload Video"});
export const videoDetailController = (req,res) => res.render("videoDetail", {pageTitle:"Video Detail"});
export const editVideoController = (req,res) => res.render("editVideo", {pageTitle:"Edit Video"});
export const deleteVideoController = (req,res) => res.render("deleteVideo", {pageTitle:"Delete Video"});