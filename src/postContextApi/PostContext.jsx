import { createContext } from "react";
import posts from "../posts_data.json";
export const PostContext = createContext();

const PostContextProvider = ({ children }) => {
  let Allposts = JSON.parse(JSON.stringify(posts));
  return (
    <PostContext.Provider value={{ Allposts }}>{children}</PostContext.Provider>
  );zz
};

export default PostContextProvider;
