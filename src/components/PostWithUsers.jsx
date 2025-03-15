import React, { useState, useEffect } from "react";
import axios from "axios";

const PostsWithUsers = () => {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);

  // Fetch all posts and users
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [postsResponse, usersResponse] = await Promise.all([
          axios.get("http://localhost:3000/posts"),
          axios.get("http://localhost:3000/users"),
        ]);
        setPosts(postsResponse.data);
        setUsers(usersResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Find the author of a post
  const findAuthor = (userId) => {
    const author = users.find((user) => user.id === userId);
    return author ? author.name : "Unknown Author";
  };

  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <p>
              <strong>Author:</strong> {findAuthor(post.userId)}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsWithUsers;