import "./db"; // mongo db 연결
import dotenv from "dotenv";
import app from "./app"; // app.js를 옴
dotenv.config();
import "./models/Video";
import "./models/Comment";
import "./models/User";

// file url을 숨겨 놓을때 사용

const PORT = process.env.PORT || 4000;

const handleListening = () =>
  console.log(`✅ Listening on: http://localhost:${PORT}`);

app.listen(PORT, handleListening);
