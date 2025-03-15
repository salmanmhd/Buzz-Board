import React, { useState } from "react";

const Post = ({
  // Destructure props
  image_url,
  id,
  username,
  caption,
  comments,
  no_of_likes,
  no_of_dislike,
  created_at,
}) => {
  // State hooks for likes, dislikes, comments, new comment, and comment box visibility
  const [likes, setLikes] = useState(no_of_likes);
  const [dislikes, setDislikes] = useState(no_of_dislike);
  const [commentList, setCommentList] = useState(comments);
  const [newComment, setNewComment] = useState("");
  const [showCommentBox, setShowCommentBox] = useState(false);

  // Handlers for like, dislike, comment change, comment submit, and toggling comment box
  const handleLike = () => setLikes(likes + 1);
  const handleDislike = () => setDislikes(dislikes + 1);
  const handleCommentChange = (e) => setNewComment(e.target.value);
  const handleCommentSubmit = () => {
    if (newComment) {
      setCommentList([...commentList, newComment]);
      setNewComment("");
      setShowCommentBox(false);
    }
  };
  const toggleCommentBox = () => setShowCommentBox(!showCommentBox);
  const handleCommentParagraph = () => setShowCommentBox(true);

  // Formatting the date
  let dayBefore = new Date(created_at);
  let day = dayBefore.getDate();
  let months = [
    "jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec",
  ];
  let month = months[dayBefore.getMonth()];

  return (
    <>
      <div key={id} className="post">
        {/* User information */}
        <div className="userName">
          <img
            height="40"
            src="https://storage.googleapis.com/a1aa/image/lfFVtszJ_SSrEM5E_wbgcFAFMnKDcDyDKuZf7ce3AjA.jpg"
            width="40"
            alt=""
          />
          <h2>{username}</h2>
          <span>.{month} {day}</span>
        </div>
        {/* Post caption */}
        <p className="caption">{caption}</p>
        {/* Post image */}
        <div className="post-image">
          <img src={image_url} alt="post_img" />
        </div>
        {/* Post buttons */}
        <div className="post-buttons">
          <span onClick={handleLike}><i className="far fa-heart text-xl"></i></span>
          <span onClick={handleDislike}><i className="far fa-thumbs-down text-xl"></i></span>
          <span onClick={toggleCommentBox}><i className="far fa-comment text-xl"></i></span>
          <span><i className="far fa-paper-plane text-xl"></i></span>
        </div>
        {/* Post statistics */}
        <div className="post-likes">
          <p onClick={handleLike}><span>{likes}</span> Likes</p>
          <p onClick={handleDislike}><span>{dislikes}</span> Dislike</p>
          <p onClick={handleCommentParagraph}><span>{commentList.length}</span> Comments</p>
          <p>Share</p>
        </div>
        <br/>
        {/* Comment box */}
        {showCommentBox && (
          <div className="comment-box">
            <input
              type="text"
              value={newComment}
              onChange={handleCommentChange}
              placeholder="Add a comment"
            />
            <span onClick={handleCommentSubmit}>Submit</span>
          </div>
        )}
      </div>
    </>
  );
};

export default Post;
