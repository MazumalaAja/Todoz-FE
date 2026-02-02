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
          date: new Date().getDate() || 1
     });

     // ===== Data Time =====
     const refrences = useRef(null);
     const getDayInMonth = new Date(selected.year, selected.month + 1, 0).getDate();
     const days = Array.from({ length: getDayInMonth }, (_, i) => i + 1);
     const month = Array.from({ length: 12 }, (_, i) => new Date(2026, i).toLocaleString("id-ID", { month: "long" }));

     // ===== Data Navigation =====
     const data = [
          { path: "/", label: "Dashboard", icon: FaHome },
          { path: "/profile", label: "Profile", icon: FaUser },
          { path: "/tasks", label: "Tasks", icon: FaList },
          { path: "/statistics", label: "Statistics", icon: FaChartBar },
     ]

     // ===== HandleClick =====
     function handleClickDate(value) {
          setSelected(prev => ({ ...prev, date: value }));
     }

     function handleClickMonth(value) {
          setSelected(prev => ({ ...prev, month: value.index, date: 1 }));
     }

     // ===== HandleChangeYear =====
     function handleChangeYear(e) {
          const value = Number(e.target.value);
          setSelected(prev => ({ ...prev, year: Number(value), date: 1 }));
     }

     // ===== HandleChangeYear =====
     function handleChangeDate(e) {
          const value = Number(e.target.value);
          if (value == "" || value < 0 || value > getDayInMonth) return setSelected(prev => ({ ...prev, date: 1 }));
          setSelected(prev => ({ ...prev, date: Number(value) }));
     }

     useEffect(() => {
          if (refrences.current) {
               const index = selected.date - 1;
               const activeDay = refrences.current?.children;
               activeDay[index].scrollIntoView({ behavior: "smooth", inline: "start" })
          }
     }, [selected.month, selected.year, selected.date])
     return (
          <>
               {/* ===== Navbar ===== */}
               <Navbar data={data} />

               {/* ===== List Tasks ===== */}
               <div className={`bg-neutral-900 min-h-screen py-20 space-y-3`}>
                    <div className="w-full max-w-6xl mx-auto flex items-center gap-2">
                         {/* ===== Handle Day ===== */}
                         <div className="border-neutral-400 border w-max px-3 py-1 rounded-md text-neutral-200">
                              <input onChange={handleChangeDate} value={selected.date} type="text" placeholder="Choose your own..." className="focus:outline-0" min={1} max={getDayInMonth} />
                         </div>

                         {/* ===== Handle Month ===== */}
                         <div>
                              <Select onClick={handleClickMonth} selected={selected.month} value={new Date(selected.year, selected.month).toLocaleString("id-ID", { month: "long" })} data={month} />
                         </div>

                         {/* ===== Handle Year ===== */}
                         <div className="border-neutral-400 border w-max px-3 py-1 rounded-md text-neutral-200">
                              <input onChange={handleChangeYear} value={selected.year} type="text" placeholder="Choose your own..." className="focus:outline-0" />
                         </div>
                    </div>

                    {/* ===== List Date ===== */}
                    <div ref={refrences} className="flex items-center gap-3 overflow-x-auto mx-auto w-full max-w-6xl">
                         {days && days.map((v, i) => (
                              <CategoryDay onClick={() => handleClickDate(v)} selected={selected.date == i + 1} key={i} month={new Date(selected.year, selected.month).toLocaleString("id-ID", { month: "short" })} label={v} />
                         ))}
                    </div>

                    {/* ===== List Tasks ===== */}
                    <div className="w-full max-w-6xl mx-auto">
                         {dataTasks && dataTasks.map((v, i) => (
                              <TasksPlace key={i} label={v.title} date={v.updatedAt} />
                         ))}
                    </div>
               </div >
          </>
     )
}

function CategoryDay({ label, month, selected, onClick }) {
     return (
          <button onClick={onClick} className={`${selected ? `bg-neutral-200 text-neutral-900 border-neutral-200` : `text-neutral-200 border-neutral-400`} cursor-pointer active:scale-95 flex items-center gap-2 border  px-4 py-0.5 rounded-lg`}>
               <span>{label}</span>
               <span>{month}</span>
          </button>
     )
}




