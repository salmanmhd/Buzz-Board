import React from "react";
import FeedsUi from "./Components/FeedsUI";
import { Router, Routes, Route } from "react-router";
const App = () => {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<FeedsUi></FeedsUi>} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
