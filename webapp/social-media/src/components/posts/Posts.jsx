import React from "react";
import "./posts.css";
import { MoreVert } from "@mui/icons-material";
import { Users } from "../../dummyData";

export default function Posts({ post }) {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src={Users.filter((u) => u.id === post.userId)[0].profilePicture}
              alt=""
            />
            <span className="postUsername">
              {Users.filter((u) => u.id === post.userId)[0].username}
            </span>
            <span className="postTime">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert></MoreVert>
          </div>
        </div>
        <div className="postCentre">
          <span className="postText">{post?.desc}</span>
          <img className="postImg" src={post.photo} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likePost" src="assets/like.png" alt="" />
            <img className="likePost" src="assets/heart.png" alt="" />
            <span className="likePostText">
              {post.like} people like this post
            </span>
          </div>
          <div className="postBottomRight">
            <span className="postComments">{post.comment} Comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
