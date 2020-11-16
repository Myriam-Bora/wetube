import mongoose from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  avatarUrl: String,
  facebookId: Number,
  githubId: Number,
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment"
    }
  ],
  videos: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Video"
    }
  ]
});

//나중에 아이디를 변경하거나 하는 문제가 생기는 경우가 있어 알아서 
//관리해주는 passport를 이메일로 지정하여 준다
UserSchema.plugin(passportLocalMongoose, {usernameField:"email"});

const model = mongoose.model("User", UserSchema);

export default model;