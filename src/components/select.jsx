// ===== Imports =====
import { act, useState } from "react";
import { RiArrowLeftSLine } from "react-icons/ri";

// ===== Code ====== 
export default function Selectx({ data = [], value = "", selected, onClick }) {
     const [active, setActive] = useState(false)
     return (
          <>
               {/* ====== Container ===== */}
               <div className="border relative bg-neutral-950 border-neutral-600 p-1 px-3 w-max m-1 rounded-md flex justify-between  items-center">
                    <input className=" focus:outline-0 text-amber-300" readOnly type="text" value={value} placeholder="choose your own..." />
                    <div onClick={() => setActive(!active)}>
                         <RiArrowLeftSLine className={` ${active ? `-rotate-90` : ``} duration-200 text-neutral-200 text-xl cursor-pointer`} />
                    </div>

                    {/* ===== List Option */}
                    {data && <ul className={`w-full ${active ? `p-2 h-max` : `h-0`} duration-200 overflow-auto bg-neutral-950 backdrop-blur-sm  rounded-md left-0 absolute my-2 top-full`}>
                         {data.map((v, i) => (
                              <li onClick={() => {
                                   setActive(false);
                                   onClick({ value: v, index: i });
                              }} className={`text-neutral-300 cursor-pointer py-1 px-2 hover:bg-neutral-800 ${selected == i ? `bg-neutral-800` : ``} rounded-md`} key={i}>{v}</li>
                         ))}
                    </ul>}
               </div>
          </>
     )
}