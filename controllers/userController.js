import routes from "../routes";

export const getJoinController = (req,res) => res.render("join",{
    pageTitle:"Join"

})

export const postJoinController = (req,res) =>   {
    console.log(req.body);
    const {body:{name,email,password,password2}} = req;  // const {name,email,password,password2} = req.body.name ....
    
    if(password2 !== password){
        res.status(400);
        res.render("join",{
            pageTitle:"Join"
        })
    }else{
        res.redirect(routes.home);
    }
}

export const getLoginController = (req,res) => res.render("login",{
    pageTitle:"Login"
})

export const postLoginController = (req,res) => {
    res.redirect(routes.home);

    res.render("login",{
    pageTitle:"Login"
    })
}

export const logoutController = (req,res) => {
    res.redirect(routes.home);
    res.render("logout",
    {pageTitle:"Logout"}
    )
}

export const userDetailController = (req,res) => res.render("userDetail",{
    pageTitle:"User Detail"
})

export const editProfileController = (req,res) => res.render("editProfile",{
    pageTitle:"Edit Profile"
})

export const changePasswordController = (req,res) => res.render("changePassword",{
    pageTitle:"Change Password"
})
