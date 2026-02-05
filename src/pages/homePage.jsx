// Imports...
import { Box } from "@mui/material";
import Navbar from "../components/navbar";

// My-code...
export default function HomePage() {
     // Data...
     const navigationData = [
          { path: "/", label: "Home" },
          { path: "/tasks", label: "Task Management" }
     ]
     return (
          <>
               {/* =====> Navbar */}
               <Navbar data={navigationData} />

               {/* =====> Container */}
               <Box className={`min-h-screen bg-neutral-300 dark:bg-neutral-900!`}></Box>
          </>
     )
}