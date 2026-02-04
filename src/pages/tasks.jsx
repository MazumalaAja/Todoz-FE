// ===== Imports =====
import { FaChartBar, FaHome, FaList, FaUser } from "react-icons/fa";
import Navbar from "../components/navbar";
import { FiCheck, FiPlus, FiSearch } from "react-icons/fi";
import Selectx from "../components/select";
import { DatePicker } from "@mui/x-date-pickers";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import Modal from "../components/modal";

// ===== Code =====
export default function TasksPage() {
     // ===== States =====
     const [date, setDate] = useState(null);
     const [open, setOpen] = useState({
          modal: false,
     })

     // ===== Data Navigation =====
     const data = [
          { path: "/", label: "Dashboard", icon: FaHome },
          { path: "/profile", label: "Profile", icon: FaUser },
          { path: "/tasks", label: "Tasks Management", icon: FaList },
          { path: "/statistics", label: "Statistics", icon: FaChartBar },
     ]

     return (
          <>
               {/* ===== Navbar ===== */}
               <Navbar data={data} />

               {/* ===== Modal ===== */}
               <Modal onClick={() => {
                    setOpen(prev => ({ ...prev, modal: false }))
               }} open={open.modal} >
                    <div onClick={(e) => {
                         e.stopPropagation();
                    }} className={`bg-neutral-950 ${open.modal ? `scale-100` : `scale-0`} transition-all delay-200 duration-200 rounded-lg text-neutral-300 p-5`}>
                         <div>
                              <h2>Title</h2>
                         </div>
                    </div>
               </Modal>

               {/* ===== Place ===== */}
               <div className={`bg-neutral-900 min-h-screen`}>
                    {/* ===== Container ===== */}
                    <div className="w-full max-w-6xl mx-auto py-20 space-y-2">
                         {/* ===== Title ===== */}
                         <div className="text-center text-2xl text-neutral-200 mb-3">
                              <h1>Task Management.</h1>
                         </div>

                         {/* ===== Actions ===== */}
                         <div className="flex justify-between gap-2 items-center">
                              {/* ===== Button  ===== */}
                              <button onClick={() => setOpen(prev => ({ ...prev, modal: !prev.modal }))} className="bg-neutral-950 flex-1 justify-center text-amber-300 hover:bg-neutral-300/10 cursor-pointer m-1 flex items-center gap-2 py-1.5 px-4 hover:text-neutral-300 rounded-md">
                                   <span>Add Task</span>
                                   <FiPlus className="text-lg" />
                              </button>

                              {/* ===== DatePicker ===== */}
                              <DatePicker
                                   label="Filter Date"
                                   value={date}
                                   onChange={(newValue) => setDate(newValue)}
                                   slotProps={{
                                        textField: {
                                             size: "small",
                                             sx: {
                                                  backgroundColor: "#0a0a0a",
                                                  color: "yellow",
                                                  borderRadius: "6px",
                                             },
                                        },
                                   }}
                              />

                              {/* ===== Input search ===== */}
                              <div className="text-neutral-200 flex-1 flex text-sm items-center border m-1 border-neutral-600 p-1.5 bg-neutral-950 px-3 rounded-md gap-3">
                                   <input placeholder="Search..." type="text" className="focus:outline-0 w-full" />
                                   <FiSearch className="text-lg" />
                              </div>

                              {/* ===== Status ===== */}
                              <Selectx value="All" data={["All", "Success", "Pending", "Failed"]} />
                         </div>

                         {/* ===== Table ===== */}
                         <div className="w-full tables text-neutral-200 bg-neutral-950 rounded-md">
                              <table className="border-collapse w-full text-center">
                                   <thead className="">
                                        <tr className="bg-neutral-900">
                                             <td>ID</td>
                                             <td>Date</td>
                                             <td>Task Name</td>
                                             <td>Status</td>
                                             <td>Actions</td>
                                        </tr>
                                   </thead>

                                   <tbody>
                                        <tr>
                                             <td>1234</td>
                                             <td>2026-02-11</td>
                                             <td>Belajar Coding</td>
                                             <td>
                                                  <span className="text-green-300 mx-auto text-sm bg-green-600/10 py-0.5 px-2 rounded-full outline outline-green-300/30 flex gap-2 items-center justify-center w-max">
                                                       <FiCheck />
                                                       <span>Success</span>
                                                  </span>
                                             </td>
                                             <td className="flex gap-2 items-center  justify-center">
                                                  <button className="bg-neutral-800 px-2 py-0.5 rounded-md hover:bg-neutral-600/30">Delete</button>
                                                  <button className="bg-neutral-800 px-2 py-0.5 rounded-md hover:bg-neutral-600/30">Edit</button>
                                             </td>
                                        </tr>
                                   </tbody>
                              </table>
                         </div>
                    </div>
               </div>
          </>
     )
}