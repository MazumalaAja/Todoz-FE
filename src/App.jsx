// ===== Imports =====
import { RouterProvider } from "react-router-dom";
import router from "./routes/route";
import "@fontsource/poppins"

// ===== Code =====
export default function App() {
     return (
          <>
               <RouterProvider router={router} />
          </>
     )
}