// Imports...
import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout";
import ErrorPage from "../pages/errorPage";
import HomePage from "../pages/homePage";
import TasksPage from "../pages/taskPage";

// My-Code...
const router = createBrowserRouter([
     {
          path: "/",
          element: <Layout />,
          errorElement: <ErrorPage />,
          children: [
               { index: true, element: <HomePage /> },
               { path: "tasks", element: <TasksPage /> },
          ]
     }
])

// Export...
export default router;