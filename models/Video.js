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
        default:Date.now             //현재시각
    }
});

//위의 스키마를 이용해 Model 만들기
const model = mongoose.model("Video", VideoSchema);
export default model;
