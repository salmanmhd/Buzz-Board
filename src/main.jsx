import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import PostContextProvider from "./postContextApi/PostContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PostContextProvider>
      <App />
    </PostContextProvider>
  </StrictMode>
);
