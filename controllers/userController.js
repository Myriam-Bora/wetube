import passport from "passport";
import routes from "../routes";
import User from "../models/User";

export const getJoinController = (req,res) => res.render("join",{
    pageTitle:"Join"

})

export const postJoinController = async (req,res,next) =>   {
    console.log(req.body);
    const {body:{name,email,password,password2}} = req;  // const {name,email,password,password2} = req.body.name ....
    
    if(password2 !== password){
        res.status(400);
        res.render("join",{
            pageTitle:"Join"
        })
    }else{
        //오로지 username과 패스워드로만 조인
        try{
            const user = await User({
                name,
                email
            });
            await User.register(user,password);   //유저 등록
            next(); //postLogin에게 이메일과 비번을 넘겨준다
        }catch(error){
            console.log(error);
            res.redirect(routes.home);
        }
    }
}

export const getLoginController = (req,res) => res.render("login",{
    pageTitle:"Login"
})

export const postLoginController = passport.authenticate("local",{
    failureRedirect:routes.login,
    successRedirect:routes.home
});

export const githubLogin = passport.authenticate("github");

export const githubLoginCallback = async (_, __, profile, cb) => {
    const {
      _json: { id, avatar_url, name, email }
    } = profile;
    try {
      const user = await User.findOne({ email });
      if (user) {  //원래 가입한 이메일과 깃허브 이메일이 같을 경우 같은 유저로 한다
        user.githubId = id;
        user.save();
        return cb(null, user);
      }
      const newUser = await User.create({
        email,
        name,
        githubId: id,
        avatarUrl: avatar_url
      });
      return cb(null, newUser);
    } catch (error) {
      return cb(error);
    }
  };

export const postGithubLogIn = (req, res) => {
    res.redirect(routes.home);
};

export const logoutController = (req,res) => {
    req.logout();
    res.redirect(routes.home);
};

export const userDetailController = (req,res) => res.render("userDetail",{
    pageTitle:"User Detail"
})

export const editProfileController = (req,res) => res.render("editProfile",{
    pageTitle:"Edit Profile"
})

export const changePasswordController = (req,res) => res.render("changePassword",{
    pageTitle:"Change Password"
})
