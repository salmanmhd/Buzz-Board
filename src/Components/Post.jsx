import React from "react";

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
  let dayBefore = new Date(created_at);
  let day = dayBefore.getDate();
  let months = [
    "jan",
    "feb",
    "mar",
    "apr",
    "may",
    "jun",
    "jul",
    "aug",
    "sep",
    "oct",
    "nov",
    "dec",
  ];
  let month = months[dayBefore.getMonth()];

  return (
    <>
      <div key={id} className="post">
        <div className="userName">
          <img
            height="40"
            src={
              userProfile
                ? userProfile
                : "https://storage.googleapis.com/a1aa/image/lfFVtszJ_SSrEM5E_wbgcFAFMnKDcDyDKuZf7ce3AjA.jpg"
            }
            width="40"
            alt=""
          />
          <h2>{username}</h2>

          <span>
            .{month} {day}
          </span>
        </div>
        <p className="caption">{caption}</p>
        <div className="post-image">
          {image_url ? <img src={image_url} alt="post_img" /> : null}
        </div>
        <div className="post-buttons">
          <i className="far fa-heart text-xl"></i>
          <i className="far fa-thumbs-down text-xl"></i>
          <i className="far fa-comment text-xl"></i>
          <i className="far fa-paper-plane text-xl"></i>
        </div>
        <div className="post-likes">
          <p>
            {" "}
            <span>{no_of_likes}</span> Likes
          </p>
          <p>
            <span> {no_of_dislike}</span> Dislike
          </p>
          <p>
            {" "}
            <span> {comments.length}</span> Comments
          </p>
          <p>Share</p>
        </div>
      </div>
    </>
  );
};

export default Post;
