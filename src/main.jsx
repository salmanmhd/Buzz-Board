<<<<<<< HEAD
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import UserProfile from '../user-profile/UserProfile'
// import App from './App.jsx'
=======
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import PostContextProvider from "./postContextApi/PostContext.jsx";
>>>>>>> origin/prasad

createRoot(document.getElementById("root")).render(
  <StrictMode>
<<<<<<< HEAD

    <UserProfile />
    {/* <App /> */}
   
  </StrictMode>,
)
=======
    <PostContextProvider>
      <App />
    </PostContextProvider>
  </StrictMode>
);
>>>>>>> origin/prasad
