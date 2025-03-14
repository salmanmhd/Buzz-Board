import React, { useContext } from "react";
import { PostContext } from "../postContextApi/PostContext";
import Post from "./Post";
const FeedsUI = () => {
  const { Allposts } = useContext(PostContext);
  console.log(Allposts);

  return (
    <div className="feedPosts">
      {Allposts.slice(0, 10).map((post) => {
        return (
          <Post
            id={post.id}
            created_at={post.created_at}
            image_url={post.image_url}
            no_of_dislike={post.no_of_dislike}
            no_of_likes={post.no_of_likes}
            username={post.username}
            comments={post.comments}
            caption={post.caption}
            reactions={post.reactions}
            userProfile={post.userProfile}
          />
        );
      })}
    </div>
  );
};

export default FeedsUI;
