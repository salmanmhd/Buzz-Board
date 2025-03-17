import React from "react";
import FeedsUi from "./Components/FeedsUI";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<FeedsUi />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
