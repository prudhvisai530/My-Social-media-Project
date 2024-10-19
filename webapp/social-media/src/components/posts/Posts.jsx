import React from "react";
import "./posts.css";
import { MoreVert } from "@mui/icons-material";

export default function Posts() {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img className="postProfileImg" src="assets/person/1.jpeg" alt="" />
            <span className="postUsername">Prudhvi Chengalpattu</span>
            <span className="postTime">5 mins ago</span>
          </div>
          <div className="postTopRight">
            <MoreVert></MoreVert>
          </div>
        </div>
        <div className="postCentre">
          <spam className="postText">Hey This my first post</spam>
          <img className="postImg" src="assets/post/1.jpeg" alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likePost" src="assets/like.png" alt="" />
            <img className="likePost" src="assets/heart.png" alt="" />
            <span className="likePostText">32 people like this post</span>
          </div>
          <div className="postBottomRight">
            <span className="postComments">9 Comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
