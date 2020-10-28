import app from "./app";
import "./db"  //디비 연결
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 4000;   //만약에 없으면 4000

const handleListening = () => console.log(`✅ Listening on :   http://localhost:${PORT}`);

app.listen(PORT,handleListening);