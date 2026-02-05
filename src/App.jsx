// Imports...
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import "./styles/global.css"

// My-code...
export default function App() {
     return (
          <>
               <RouterProvider router={router} />
          </>
     )
}