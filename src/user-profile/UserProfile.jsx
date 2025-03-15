import { useState, useEffect, useContext } from "react";
import { v4 as uuid } from "uuid";
import {
  FaHeart,
  FaComment,
  FaTrash,
  FaEdit,
  FaCheck,
  FaUserPlus,
} from "react-icons/fa";

import "./UserProfile.css";
import { PostContext } from "../postContextApi/PostContext";

const UserProfile = () => {
  const { setAllPosts } = useContext(PostContext);
  const storedProfile = JSON.parse(localStorage.getItem("userProfile")) || {
    name: "Priti ",
    username: "@priticode",
    bio: "Exploring Nature",
    profilePic: "https://via.placeholder.com/150",
    backgroundPic: "https://source.unsplash.com/random/800x600?nature",
    posts: 0,
    followers: 100,
    following: 50,
  };

  const storedPosts = JSON.parse(localStorage.getItem("userPosts")) || [];
  const storedFollowing =
    JSON.parse(localStorage.getItem("isFollowing")) || false;

  const [user, setUser] = useState(storedProfile);
  const [tweets, setTweets] = useState(storedPosts);
  const [newTweetText, setNewTweetText] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [isFollowing, setIsFollowing] = useState(storedFollowing);

  useEffect(() => {
    localStorage.setItem("userProfile", JSON.stringify(user));
    localStorage.setItem("userPosts", JSON.stringify(tweets));
    localStorage.setItem("isFollowing", JSON.stringify(isFollowing));
  }, [user, tweets, isFollowing]);

  const handleImageUpload = (event, field) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUser((prevUser) => {
          const updatedUser = { ...prevUser, [field]: reader.result };
          localStorage.setItem("userProfile", JSON.stringify(updatedUser));
          return updatedUser;
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleBackgroundUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const updatedUser = { ...user, backgroundPic: reader.result };
        setUser(updatedUser);
        localStorage.setItem("userProfile", JSON.stringify(updatedUser)); // Save immediately
      };
      reader.readAsDataURL(file);
    }
  };

  const handleEditToggle = () => setIsEditing(!isEditing);

  const handleInputChange = (field, value) => {
    setUser((prevUser) => ({ ...prevUser, [field]: value }));
  };

  const formatTime = (timestamp) => {
    const now = Date.now();
    const diff = Math.floor((now - timestamp) / 1000);

    if (diff < 60) return "Just now";
    if (diff < 3600) return `${Math.floor(diff / 60)} min ago`;
    if (diff < 86400) return `${Math.floor(diff / 3600)} hours ago`;
    return new Date(timestamp).toLocaleString();
  };

  // const handleAddTweet = () => {
  //   if (newTweetText.trim() !== "") {
  //     const newTweet = {
  //       text: newTweetText,
  //       timestamp: Date.now(),
  //       user,
  //       likes: 0,
  //       comments: 0,
  //     };
  //     setTweets([newTweet, ...tweets]);
  //     setUser((prevUser) => ({ ...prevUser, posts: prevUser.posts + 1 }));
  //     setNewTweetText("");
  //   }
  // };
  const handleAddTweet = () => {
    if (newTweetText.trim() !== "") {
      const newTweet = {
        text: newTweetText,
        timestamp: Date.now(),
        user,
        likes: 0,
        comments: 0,
      };

      const updatedTweets = [newTweet, ...tweets];

      setTweets(updatedTweets);

      // newPost object to be added in the allPost state variable
      let newPost = {
        id: uuid(),
        created_at: newTweet.timestamp,
        userProfile: user.profilePic,
        username: user.username,
        caption: newTweet.text,
        comments: [],
        no_of_likes: 0,
        no_of_dislike: 0,
      };

      setAllPosts((prevPosts) => [newPost, ...prevPosts]);

      localStorage.setItem("userPosts", JSON.stringify(updatedTweets));

      setUser((prevUser) => ({ ...prevUser, posts: prevUser.posts + 1 }));
      localStorage.setItem("userProfile", JSON.stringify(user));
      setNewTweetText("");
    }
  };

  const handleDeleteTweet = (index) => {
    if (window.confirm("Are you sure you want to delete this tweet?")) {
      setTweets(tweets.filter((_, i) => i !== index));
      setUser((prevUser) => ({ ...prevUser, posts: prevUser.posts - 1 }));
    }
  };

  const handleLike = (index) => {
    const updatedTweets = [...tweets];
    updatedTweets[index].likes += 1;
    setTweets(updatedTweets);
  };

  // const handleComment = (index) => {
  //   const updatedTweets = [...tweets];
  //   updatedTweets[index].comments += 1;
  //   setTweets(updatedTweets);
  // };

  const handleFollowToggle = () => {
    setIsFollowing(!isFollowing);
    setUser((prevUser) => ({
      ...prevUser,
      followers: isFollowing ? prevUser.followers - 1 : prevUser.followers + 1,
    }));
  };

  return (
    <div className="user-container">
      <div
        className="profile-header"
        style={{
          backgroundImage: `url(${user.backgroundPic})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <input
          type="file"
          accept="image/*"
          className="hidden-input"
          id="backgroundUpload"
          onChange={(e) => handleBackgroundUpload(e, "backgroundImage")}
        />
      </div>

      <div className="profile-pic-container">
        <input
          type="file"
          accept="image/*"
          className="hidden-input"
          id="profilePicUpload"
          onChange={(e) => handleImageUpload(e, "profilePic")}
        />
        <label htmlFor="profilePicUpload">
          <img src={user.profilePic} alt="Profile" className="profile-pic" />
        </label>
      </div>

      <div className="profile-info">
        {isEditing ? (
          <>
            <input
              type="text"
              value={user.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              className="edit-input"
            />

            <input
              type="text"
              value={user.username}
              onChange={(e) => handleInputChange("username", e.target.value)}
              className="edit-input"
            />
            <textarea
              value={user.bio}
              onChange={(e) => handleInputChange("bio", e.target.value)}
              className="edit-input"
            />
          </>
        ) : (
          <>
            <h2 className="profile-name">{user.name}</h2>
            <p className="profile-username">{user.username}</p>
            <p className="profile-bio">{user.bio}</p>
          </>
        )}

        <div className="profile-stats">
          <div>{user.posts} Posts</div>
          <div>{user.followers} Followers</div>
          <div>{user.following} Following</div>
        </div>

        <div className="btn-group">
          <button onClick={handleEditToggle} className="profile-btn">
            {isEditing ? <FaCheck /> : <FaEdit />}{" "}
            {isEditing ? "Save" : "Edit Profile"}
          </button>
          <button onClick={handleFollowToggle} className="profile-btn">
            <FaUserPlus /> {isFollowing ? "Unfollow" : "Follow"}
          </button>
        </div>
      </div>

      <div className="tweet-section">
        <input
          type="text"
          placeholder="What's happening?"
          value={newTweetText}
          onChange={(e) => setNewTweetText(e.target.value)}
          className="tweet-input"
        />
        <button onClick={handleAddTweet} className="tweet-btn">
          Post
        </button>
      </div>

      <div className="tweet-list">
        {tweets.map((tweet, index) => (
          <div key={index} className="tweet-item">
            <div className="tweet-header">
              <img
                src={tweet.user.profilePic}
                alt="User"
                className="tweet-user-pic"
              />
              <div className="tweet-user-info">
                <span className="tweet-user-name">{tweet.user.name}</span>
                <span className="tweet-time">
                  {formatTime(tweet.timestamp)}
                </span>
              </div>
            </div>

            <p className="tweet-text">{tweet.text}</p>

            <div className="tweet-actions">
              <button onClick={() => handleLike(index)} className="like-btn">
                <FaHeart /> {tweet.likes}
              </button>
              <button onClick={() => handleComment(index)} className="like-btn">
                <FaComment /> {tweet.comments}
              </button>
              <button
                onClick={() => handleDeleteTweet(index)}
                className="delete-btn"
              >
                <FaTrash />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserProfile;
