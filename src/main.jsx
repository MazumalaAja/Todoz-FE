// Imports...
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./app";

// My-code...
createRoot(document.getElementById("root")).render(
     <StrictMode>
          <App />
     </StrictMode>
)