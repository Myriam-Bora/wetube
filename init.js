import app from "./app";
import "./db"  //디비 연결
import dotenv from "dotenv";

dotenv.config();

import "./models/Video"        //모델을 데이터베이스가 인지하기 위해 임포트
import "./models/Comment"        //모델을 데이터베이스가 인지하기 위해 임포트
import "./models/User"

const PORT = process.env.PORT || 4000;   //만약에 없으면 4000

const handleListening = () => console.log(`✅ Listening on :   http://localhost:${PORT}`);

app.listen(PORT,handleListening);