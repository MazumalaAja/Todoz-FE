// ===== Imports =====
import { useEffect, useState } from "react";
import { RiCheckLine } from "react-icons/ri";

// ==== Checkbox =====
export default function Checkbox({ onClick, checked }) {
     return (
          <>
               {/* ===== Container ===== */}
               <div onClick={onClick} className={`w-5.5 h-5.5 border-2 ${checked ? `bg-neutral-500` : ``} border-neutral-500 rounded-md active:scale-95 duration-150 cursor-pointer grid hover:ring-2 hover:ring-neutral-500 hover:ring-offset-2 hover:ring-offset-neutral-900 place-content-center overflow-hidden `}>
                    <RiCheckLine className={`${checked ? `scale-100` : `scale-0`} duration-150 text-lg`} />
               </div>
          </>
     )
}