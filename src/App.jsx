import React from "react";
import FeedsUi from "./Components/FeedsUI";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserProfile from "./user-profile/UserProfile";
const App = () => {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<FeedsUi />} />
          <Route path="/profile" element={<UserProfile />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
