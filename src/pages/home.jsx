// ===== Imports =====
import { FaChartBar, FaHome, FaList, FaUser } from "react-icons/fa";
import Navbar from "../components/navbar";
import dataTasks from "../../data/tasks.json"
import TasksPlace from "../components/tasksPlace";
import { useEffect, useRef, useState } from "react";
import Select from "../components/select";

// ===== Code =====
export default function HomePage() {
     // ===== Selected =====
     const [selected, setSelected] = useState({
          year: new Date().getFullYear(),
          month: new Date().getMonth(),
     });

     // ===== Day in this Month =====
     const month = Array.from({ length: 12 }, (_, i) => new Date(2026, i).toLocaleString("id-ID", { month: "long" }));

     // ===== Data Navigation =====
     const data = [
          { path: "/", label: "Dashboard", icon: FaHome },
          { path: "/profile", label: "Profile", icon: FaUser },
          { path: "/tasks", label: "Tasks", icon: FaList },
          { path: "/statistics", label: "Statistics", icon: FaChartBar },
     ]

     // ===== HandleClick =====
     function handleClickMonth(value) {
          setSelected(prev => ({ ...prev, month: value.index }));
     }

     // ===== HandleChangeYear =====
     function handleChangeYear(e) {
          const value = Number(e.target.value);
          setSelected(prev => ({ ...prev, year: Number(value) }));
     }

     useEffect(() => {
          console.log("Bulan : " + selected.month, "Tahun : " + selected.year);
     }, [selected.month, selected.year])
     return (
          <>
               {/* ===== Navbar ===== */}
               <Navbar data={data} />

               {/* ===== List Tasks ===== */}
               <div className={`bg-neutral-900 min-h-screen py-20 space-y-3`}>
                    <div className="flex items-center gap-2">
                         {/* ===== Handle Month ===== */}
                         <div>
                              <Select onClick={handleClickMonth} selected={selected.month} value={new Date(selected.year, selected.month).toLocaleString("id-ID", { month: "long" })} data={month} />
                         </div>

                         {/* ===== Handle Year ===== */}
                         <div className="border-neutral-400 border w-max px-3 py-1 rounded-md text-neutral-200">
                              <input onChange={handleChangeYear} value={selected.year} type="text" placeholder="Choose your own..." className="focus:outline-0" />
                         </div>
                    </div>

                    <div className="w-full max-w-6xl mx-auto">
                         {dataTasks && dataTasks.map((v, i) => (
                              <TasksPlace key={i} label={v.title} date={v.updatedAt} />
                         ))}
                    </div>
               </div >
          </>
     )
}

function CategoryDay({ label, desc }) {
     return (
          <button>
               <span>{desc}</span>
               <span>{label}</span>
          </button>
     )
}




