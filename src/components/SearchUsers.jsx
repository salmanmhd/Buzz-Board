// components/SearchUsers.js
import React, { useState, useEffect } from "react";
import axios from "axios";

const SearchUsers = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [users, setUsers] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);

  useEffect(() => {
    const fetchAllUsers = async () => {
      try {
        const response = await axios.get("http://localhost:3000/users");
        setAllUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchAllUsers();
  }, []);

  useEffect(() => {
    if (searchTerm.trim()) {
      const filteredUsers = allUsers.filter(user =>
        user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setUsers(filteredUsers);
      setHasSearched(true);
    } else {
      setUsers([]);
      setHasSearched(false);
    }
  }, [searchTerm, allUsers]);

  return (
    <div className="search-container">
      <h2>Search Users</h2>
      <input
        type="text"
        placeholder="Search by name or username..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-field "
      />
      <div className="results-container">
        {hasSearched && users.length === 0 ? (
          <div className="no-results">No users found</div>
        ) : (
          users.map((user) => (
            <div key={user.id} className="result-item">
              <h3>{user.name}</h3>
              <p>@{user.username}</p>
              <p>{user.email}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default SearchUsers;