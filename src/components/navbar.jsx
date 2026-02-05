// Imports...
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { useState } from "react";
import { FiCheckSquare, FiList, FiToggleLeft } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import Toggle from "./toggle";

// My-code...
export default function Navbar({ data = [] }) {
     // States...
     const [active, setActive] = useState(false);
     return (
          <>
               {/* =====> Container */}
               <AppBar className={`fixed top-0 left-0 shadow-none! right-0 bg-white! dark:bg-neutral-900! border-b border-neutral-300 dark:border-neutral-500`}>
                    <Toolbar className={`flex justify-between shadow-none!`}>
                         {/* =====> Logo */}
                         <Box className={`flex items-center gap-2`}>
                              <FiCheckSquare className="text-lg md:text-xl text-neutral-950 dark:text-neutral-300" />
                              <Typography className={`text-base! md:text-lg! text-neutral-950 dark:text-neutral-300`} sx={{ fontFamily: "poppins" }}>Todoz.</Typography>
                         </Box>

                         {/* =====> Navigation */}
                         <Box className={`hidden md:flex items-center gap-2`}>
                              {data && data.map((v, i) => (
                                   <Links key={i} path={v.path} label={v.label} />
                              ))}
                         </Box>

                         {/* =====> Toggle */}
                         <Box className={`block md:hidden`}>
                              <Toggle />
                         </Box>
                    </Toolbar>
               </AppBar>
          </>
     )
};

// Links Functions...
function Links({ path, label }) {
     return (
          <NavLink style={{ fontFamily: "poppins" }} className={(({ isActive }) => `${isActive ? ` text-neutral-950 dark:text-neutral-300` : `text-neutral-400 dark:text-neutral-500`} hover:text-neutral-950 dark:hover:text-neutral-300 duration-200`)} to={path}>{label}</NavLink>
     )
}