import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import UserProfile from "../user-profile/UserProfile";
import App from "./App.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
  
      <App />
   
    <UserProfile />
  </StrictMode>
);
