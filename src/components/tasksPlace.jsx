// ===== Imports =====
import { useState, useEffect } from "react";
// ===== Imports =====
import Checkbox from "./checkbox";
import { RiProgress1Line, RiProgress2Line, RiProgress3Line, RiProgress4Line, RiProgress5Line, RiProgress6Line, RiProgress7Line, RiProgress8Line } from "react-icons/ri";
import { data } from "react-router-dom";

// ===== Tasks Place =====
export default function TasksPlace({ label, date, progressTask }) {
     // ===== Status =====
     const [checked, setChecked] = useState({
          progressSelected: false,
          success: false,
          fail: false,
     });


     // ===== Peogress Icons =====
     const Progress = [{ icon: RiProgress1Line, data: "0%" }, { icon: RiProgress2Line, data: "15%" }, { icon: RiProgress3Line, data: "30%" }, { icon: RiProgress4Line, data: "45%" }, { icon: RiProgress5Line, data: "65%" }, { icon: RiProgress6Line, data: "80%" }, { icon: RiProgress7Line, data: "95%" }, { icon: RiProgress8Line, data: "100%" }]

     // ===== Progress Selected =====
     const [selected, setSelected] = useState(0)
     const isSuccess = selected === 7;

     const ProgressSelectedIcon = Progress[selected].icon;
     return (
          <>
               {/* ===== Container ===== */}
               <div className={`flex ${checked.success || isSuccess ? `opacity-50 relative bg-green-400/20 text-green-100` : `bg-neutral-500/10 text-neutral-200`} items-center outline-1 outline-neutral-500/10 hover:outline-amber-500 duration-150 justify-between p-3 mb-2  cursor-pointer rounded-md`}>
                    {/* ==== Checkbox & Informations */}
                    <div className="flex items-center gap-3">
                         {/* ===== Checkbox ===== */}
                         <div>
                              <Checkbox checked={checked.success || isSuccess} onClick={() => {
                                   if (selected === 7) {
                                        setSelected(0);
                                        setChecked(prev => ({ ...prev, success: false }))
                                   } else {
                                        setChecked(prev => ({ ...prev, success: !prev.success }))
                                   }

                              }} />
                         </div>

                         {/* ===== Information4s ===== */}
                         <div>
                              <h1 className={`${checked.success || isSuccess ? `line-through` : ``} px-2`}>{label}</h1>
                              <small className={`${checked.success || isSuccess ? `text-green-300 bg-green-200/10` : `text-amber-300 bg-amber-600/10`} rounded-full px-3 text-sm`}>{date}</small>
                         </div>
                    </div>

                    {/* ===== Actions ===== */}
                    <div onClick={() => setChecked(prev => ({ ...prev, progressSelected: !prev.progressSelected }))} className="text-neutral-300 flex items-center gap-3 duration-200">
                         {!checked.success ?
                              <ProgressSelectedIcon className={`text-3xl ${isSuccess ? `text-green-300` : `text-amber-300`}`} />
                              :
                              <RiProgress8Line className={`text-3xl text-green-300`} />
                         }

                         <div className={`${checked.progressSelected ? `w-max opacity-100` : `w-0 opacity-0`} duration-200 flex gap-3 overflow-hidden`}>
                              {!checked.success && Progress.map((Icon, i) => (
                                   <div key={i}>
                                        <Icon.icon onClick={() => {
                                             setSelected(i)
                                        }} className={`text-3xl not-hover:opacity-30`} />
                                   </div>
                              ))}
                         </div>
                    </div>

               </div>
          </>
     )
}

