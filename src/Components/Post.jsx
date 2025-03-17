import React, { useState } from "react";
import { FaRegHeart, FaShare } from "react-icons/fa";
import { BiCommentDots } from "react-icons/bi";
const Post = ({
  image_url,
  id,
  username,
  caption,
  comments,
  no_of_likes,
  no_of_dislike,
  created_at,
  userProfile,
}) => {
  const formatTime = (timestamp) => {
    const now = Date.now();
    const diff = Math.floor((now - timestamp) / 1000);

    if (diff < 60) return "Just now";
    if (diff < 3600) return `${Math.floor(diff / 60)} min ago`;
    if (diff < 86400) return `${Math.floor(diff / 3600)} hours ago`;
    return new Date(timestamp).toLocaleString();
  };

  return (
    <>
      <div key={id} className="post">
        <div className="post-top">
          <img src={userProfile} alt="" />
          <div className="userName">
            <p> {username} </p>
            <span>@{username}</span>
          </div>
          <p className="created_at">{formatTime(created_at)}</p>
        </div>
        <p className="caption">{caption}</p>
        <div className="like-section">
          <span>
            <FaRegHeart />
            {no_of_likes}
          </span>
          <span>
            <BiCommentDots />
            {comments.length}
          </span>
          <span>
            <FaShare />
            {0}
          </span>
        </div>

        <div className="comment-section">
          <img
            src="https://th.bing.com/th/id/OIP.ZP-E8ZFH11wb1XSm0dn-5wHaJQ?rs=1&pid=ImgDetMain"
            alt=""
          />
          <input type="text" placeholder="Comments " />
        </div>
      </div>
    </>
  );
};

export default Post;
