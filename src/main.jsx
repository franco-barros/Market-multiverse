import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./Pages/App";
import App from "./Pages/App/index.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
