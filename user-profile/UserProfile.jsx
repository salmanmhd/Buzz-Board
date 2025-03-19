import React, { useState, useEffect } from "react";
import { FaShareAlt, FaUserEdit, FaUsers, FaUserCheck, FaHeart, FaRegHeart } from "react-icons/fa";
import "./UserProfile.css";
import { FaHome, FaPlus, FaComment, FaLocationArrow, FaArrowUp} from "react-icons/fa";

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [showOtherProfiles, setShowOtherProfiles] = useState(true);
  const [otherUsers, setOtherUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch user data
        const userData = {
          name: "priti M",
          bio: "priti@123",
          image: "g.jpg",
          background: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXa-Cc3DouVXhN8lkzJYjcYKHAwYmhPqYAQA&s",
          followers: 1200,
          following: 300
        };

        // Fetch other users
        const usersResponse = await fetch("/users.json");
        const usersData = await usersResponse.json();

        // Fetch posts
        const postsResponse = await fetch("/posts.json");
        const postsData = await postsResponse.json();

        setUser(userData);
        setEditedUser({ name: userData.name, bio: userData.bio });
        setOtherUsers(usersData);

        // Add "liked" property to posts
        const updatedPosts = postsData.map(post => ({ ...post, liked: false }));
        setPosts(updatedPosts);

        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Toggle Follow/Following
  const handleFollowToggle = (userId) => {
    setOtherUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === userId ? { ...user, following: !user.following } : user
      )
    );
  };

  // Handle like/unlike
  const handleLikeToggle = (postId) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId
          ? { ...post, liked: !post.liked, likes: post.liked ? post.likes - 1 : post.likes + 1 }
          : post
      )
    );
  };

  const handleEditClick = () => {
    setIsEditing(true);
    setShowOtherProfiles(true); // Show other profiles when the edit form is opened
  };

  const handleSaveClick = () => {
    setUser({ ...user, ...editedUser });
    setIsEditing(false);
    setShowOtherProfiles(false); // Hide other profiles when the form is submitted
  };

  if (loading) return <div className="loading">Loading...</div>;

  return (
    <div className="profile-container">
      <div className="background">
        <img src={user.background} alt="Background" className="background-img" />
      </div>

      <div className="profile-content">
        <div className="profile-pic">
          <img src={user.image} alt="Profile" />
        </div>

        <div className="profile-left">
          <button className="profile-btn">
            Share Profile  <FaShareAlt />
          </button>
          <p className="p1"> {user.followers} </p>
          <p className="p2"> Followers</p>
        </div>

        {/* <FaUserCheck />
        <FaUsers /> */}

        <div className="profile-right">
          <button className="profile-btn" onClick={handleEditClick}>
            Edit Profile  <FaUserEdit />
          </button>
          <p className="p1"> {user.following }</p>
          
          <p className="p2"> Following</p>
          
         
        </div>

        <h2 className="user-name1">{user.name}</h2>
        <p className="user-bio">{user.bio}</p>
      </div>

      <div className="rounded-container">
      <div className="icon"><FaHome /></div>
      <div className="icon"><FaPlus /></div>
      <div className="icon"><FaComment /></div>
      <div className="icon"><FaLocationArrow /></div>
    </div>



      {isEditing && (
  <div className="edit-section">
    {/* Other Profiles - Left Side */}
    {showOtherProfiles && (
      <div className="other-profiles left">
        <div className="profiles-scroll">
          {otherUsers.map((u) => (
            <div key={u.id} className="other-user">
              <div className="user-info">
                <img src={u.image} alt={u.name} className="other-user-img" />
                <p className="user-name">{u.name}</p>
              </div>
              <button
                className={`follow-btn ${u.following ? "following" : ""}`}
                onClick={() => handleFollowToggle(u.id)}
              >
                {u.following ? "Following" : "Follow"}
              </button>
            </div>
          ))}
        </div>
      </div>
    )}

    {/* Edit Form - Center */}
    <div className="edit-form">
      <input
        type="text"
        value={editedUser.name}
        onChange={(e) => setEditedUser({ ...editedUser, name: e.target.value })}
        placeholder="Full Name"
      />
      <input
        type="email"
        value={editedUser.email || ""}
        onChange={(e) => setEditedUser({ ...editedUser, email: e.target.value })}
        placeholder="Email"
      />
      <input
        type="password"
        value={editedUser.password || ""}
        onChange={(e) => setEditedUser({ ...editedUser, password: e.target.value })}
        placeholder="Password"
      />
      <input
        type="password"
        value={editedUser.confirmPassword || ""}
        onChange={(e) => setEditedUser({ ...editedUser, confirmPassword: e.target.value })}
        placeholder="Re-enter Password"
      />
      <button className="save-btn" onClick={handleSaveClick}>Submit</button>
    </div>

    {/* Other Profiles - Right Side */}
    {showOtherProfiles && (
      <div className="other-profiles right">
        <div className="profiles-scroll">
          {otherUsers.map((u) => (
            <div key={u.id} className="other-user">
              <div className="user-info">
                <img src={u.image} alt={u.name} className="other-user-img" />
                <p className="user-name">{u.name}</p>
              </div>
              <button
                className={`follow-btn ${u.following ? "following" : ""}`}
                onClick={() => handleFollowToggle(u.id)}
              >
                {u.following ? "Following" : "Follow"}
              </button>
            </div>
          ))}
        </div>
      </div>
    )}
  </div>
)}

  {/* ✅ Integrated Post Section Directly */}
  <div className="posts-section">
        {posts.length === 0 ? (
          <p>No posts available.</p>
        ) : (
          <div className="posts-grid">
            {posts.map((post) => (
              <div key={post.id} className="post">
                <div className="post-header">
                  <img src="g.jpg" alt="Profile" className="profile-pic" />
                  <h3>{post.user}</h3>
                </div>
                <p>{post.content}</p>
                <div className="post-footer">
                  <span onClick={() => handleLikeToggle(post.id)} className="like-btn">
                    {post.liked ? <FaHeart className="liked" /> : <FaRegHeart className="unliked" />}
                  </span>
                  {post.likes}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
export default UserProfile;
