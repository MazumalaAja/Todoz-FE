// ===== Imports =====
import { FaChartBar, FaHome, FaList, FaUser } from "react-icons/fa";
import Navbar from "../components/navbar";

// ===== Code =====
export default function StatisticsPage() {
     // ===== Data Navigation =====
     const data = [
          { path: "/", label: "Dashboard", icon: FaHome },
          { path: "/profile", label: "Profile", icon: FaUser },
          { path: "/tasks", label: "Tasks Management", icon: FaList },
          { path: "/statistics", label: "Statistics", icon: FaChartBar },
     ]
     return (
          <>
               <Navbar data={data} />
               <div className={`bg-neutral-900 min-h-screen`}></div>
          </>
     )
}