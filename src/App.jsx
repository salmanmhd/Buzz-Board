import React from "react";
import SearchUsers from "./components/SearchUsers";
import SearchPosts from "./components/SearchPosts";

const App = () => {
  return (
    <div>
      <div className="container">
      <div class="left-side">
      <SearchUsers />
      </div>
      <div className="right-side">
      <SearchPosts />
      </div>
    </div>
    </div>
  )
}

export default App;
