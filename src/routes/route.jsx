// ===== Imports =====
import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout";
import { HomePage } from "../pages";

// ===== Code =====
const router = createBrowserRouter([
     {
          path: "/",
          element: <Layout />,
          children: [
               { index: true, element: <HomePage /> }
          ]
     }
])

export default router;