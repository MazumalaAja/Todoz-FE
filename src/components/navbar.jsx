// ==== Imports =====
import { FiCheckSquare, } from "react-icons/fi"
import { NavLink, useNavigate } from "react-router-dom"

// ===== Code =====
export default function Navbar({ data = [] }) {
     // ===== Navigation =====
     const navigate = useNavigate();
     return (
          <>
               {/* ===== Container ===== */}
               <header className={`fixed z-999 top-0 left-0 bg-neutral-900 right-0 border-b-2 border-neutral-600 p-3 md:p-4 flex justify-between items-center`}>
                    {/* ===== Brand ===== */}
                    <div onClick={() => navigate("/")} className="flex items-center gap-1 active:scale-90 cursor-pointer">
                         <FiCheckSquare className="text-neutral-200 text-xl" />
                         <h2 className="text-xl  text-neutral-200 font-medium">Todoz.</h2>
                    </div>

                    {/* ===== Navigation ==== */}
                    <nav className="hidden md:block space-x-3">
                         {data && data.map((v, i) => (
                              <Links key={i} to={v.path} label={v.label} />
                         ))}
                    </nav>
               </header>

               {/* ===== Mobile Navigation ===== */}
               <nav className="md:hidden bg-neutral-900 z-999 border-t-2 border-neutral-500/30 fixed bottom-0 left-0 right-0 flex justify-between p-3">
                    {
                         data && data.map((v, i) => (
                              <Links key={i} to={v.path} icon={v.icon} />
                         ))
                    }
               </nav>
          </>
     )
}

// ===== Links =====
function Links({ to, label, style, icon: Icon }) {
     return (
          <>
               {!Icon && <NavLink className={({ isActive }) => `${style ? style : ``} ${isActive ? `text-neutral-100` : `text-neutral-500`} p-2 hover:text-neutral-100 duration-150 relative after:absolute after:bottom-1 after:border after:w-full after:scale-x-0 hover:after:scale-x-75 active:scale-90 after:duration-150 after:left-0`} to={to} >
                    <span>{label}</span>
               </NavLink >}
               {Icon &&
                    <NavLink to={to} className={({ isActive }) => `${style ? `` : ``} ${isActive ? `text-neutral-100` : `text-neutral-500`} text-md sm:text-xl active:scale-90`}>
                         <Icon />
                    </NavLink>
               }

          </>
     )
}