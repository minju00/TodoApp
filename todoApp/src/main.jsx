import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  // <StrictMode> // StrictMode는 개발 중이기에 사용 X
  <App />
  // </StrictMode>,
);
