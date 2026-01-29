// ===== Imports =====
import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout";
import { ErrorPage, HomePage, ProfilePage, StatisticsPage, TasksPage } from "../pages";

// ===== Code =====
const router = createBrowserRouter([
     {
          path: "/",
          element: <Layout />,
          errorElement: <ErrorPage />,
          children: [
               { index: true, element: <HomePage /> },
               { path: "tasks", element: <TasksPage /> },
               { path: "profile", element: <ProfilePage /> },
               { path: "statistics", element: <StatisticsPage /> }
          ]
     }
])

export default router;