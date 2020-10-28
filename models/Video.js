import mongoose from "mongoose";

const VideoSchema = new mongoose.Schema({
    fileUrl:{
        type:String,
        required:"File URL is required"     //url이 없을 경우
    },
    title:{
        type:String,
        required:"Title is required"
    },
    description:String,
    views:{
        type:Number,
        default:0
    },
    createdAt:{
        type:Date,
        default:Date.now
    },
    // []를 쓰는 이유 : 비디오 하나에 코멘트는 여러개 이기 때문
    comments:[{
        type:mongoose.Schema.Types.ObjectId,   //다른 스키마의 타입을 사용
        ref:"Comment"                        //해당 되는 스키마의 아이디
    }]
});

//위의 스키마를 이용해 Model 만들기
const model = mongoose.model("Video", VideoSchema);
export default model;
