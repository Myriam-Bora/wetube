import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/wetube",
{
    //기본설정
    useNewUrlParser:true,
    userFindAndModify:false
}
)

//mongoDB와의 연결을 db에 저장
const db = mongoose.connection;
const handleOpen = () => console.log("✅ Connected to DB")
const handleError = () => console.log(`❌Error on DB Connection: ${error}`)
db.once("open", handleOpen);   //디비 연결은 once (=한번) 사용
db.on("error",handleError );   //여러개의 오류는  on(=여러번) 사용