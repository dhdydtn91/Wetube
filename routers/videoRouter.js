import express from "express";
import routes from "../routes";
import {
  videos,
  upload,
  videoDetail,
  editVideo,
  deleteVideo
} from "../controllers/videoController";

const videoRouter = express.Router();

userRouter.get(routes.videos, videos);
userRouter.get(routes.upload, upload);
userRouter.get(routes.videoDetail, videoDetail);
userRouter.get(routes.editVideo, editVideo);
userRouter.get(routes.deleteVideo, deleteVideo);

export default videoRouter;
