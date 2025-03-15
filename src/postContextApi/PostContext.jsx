import { createContext, useEffect, useState } from "react";
import posts from "../posts_data.json";

export const PostContext = createContext();

const PostContextProvider = ({ children }) => {
  let [Allposts, setAllPosts] = useState(
    JSON.parse(localStorage.getItem("Allposts")) || posts
  );

  // storing posts in local storage
  useEffect(() => {
    localStorage.setItem("Allposts", JSON.stringify(Allposts));
  }, [Allposts]);
  return (
    <PostContext.Provider value={{ Allposts, setAllPosts }}>
      {children}
    </PostContext.Provider>
  );
};

export default PostContextProvider;
