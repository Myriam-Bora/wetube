import app from "./app";
import "./db"  //디비 연결

const PORT = 4000;

const handleListening = () => console.log(`✅ Listening on :   http://localhost:${PORT}`);

app.listen(PORT,handleListening);