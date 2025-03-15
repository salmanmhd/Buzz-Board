import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import SearchUsers from "./components/SearchUsers";
import SearchPosts from "./components/SearchPosts";


function App() {
  return (
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/search-users" element={<SearchUsers />} />
    //     <Route path="/search-posts" element={<SearchPosts />} />
        
       
    //   </Routes>
    // </Router>
    <div className="container">
      <div class="left-side">
      <SearchUsers />
      </div>
      <div className="right-side">
      <SearchPosts />
      </div>
      
    </div>
   
  );
}

export default App;