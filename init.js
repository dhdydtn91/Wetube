import "./db"; // mongo db 연결
import dotenv from "dotenv";
import app from "./app"; // app.js를 옴
import "./models/Video";
import "./models/Comment";
// file url을 숨겨 놓을때 사용
dotenv.config();

const PORT = process.env.PORT || 4000;

const handleListening = () =>
  console.log(`✅ Listening on: http://localhost:${PORT}`);

app.listen(PORT, handleListening);
