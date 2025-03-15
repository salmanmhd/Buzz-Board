// components/SearchPosts.js
import React, { useState, useEffect } from "react";
import axios from "axios";

const SearchPosts = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [posts, setPosts] = useState([]);
  const [allPosts, setAllPosts] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);

  useEffect(() => {
    const fetchAllPosts = async () => {
      try {
        const response = await axios.get("http://localhost:3000/posts");
        setAllPosts(response.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };
    fetchAllPosts();
  }, []);

  useEffect(() => {
    if (searchTerm.trim()) {
      const filteredPosts = allPosts.filter(post =>
        post.caption.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.username.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setPosts(filteredPosts);
      setHasSearched(true);
    } else {
      setPosts([]);
      setHasSearched(false);
    }
  }, [searchTerm, allPosts]);

  return (
    <div className="search-container">
      <h2>Search Posts</h2>
      <input
        type="text"
        placeholder="Search by caption or username..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-field"
      />
      <div className="results-container">
        {hasSearched && posts.length === 0 ? (
          <div className="no-results">No posts found</div>
        ) : (
          posts.map((post) => (
            <div key={post.id} className="result-item">
              <img 
                src={post.image_url} 
                alt={post.caption} 
                className="post-image"
              />
              <h3>{post.caption}</h3>
              <p>By @{post.username}</p>
              <div className="post-stats">
                <span>❤️ {post.no_of_likes}</span>
                <span>💬 {post.comments.length}</span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default SearchPosts;