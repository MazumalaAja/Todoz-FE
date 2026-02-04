// ===== Imports =====
import { RouterProvider } from "react-router-dom";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { ThemeProvider, createTheme } from "@mui/material";
import router from "./routes/route";
import "@fontsource/poppins"

// ===== Code =====
export default function App() {
     const darkTheme = createTheme({
          palette: {
               mode: "dark"
          }
     })
     return (
          <>
               <ThemeProvider theme={darkTheme}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                         <RouterProvider router={router} />
                    </LocalizationProvider>
               </ThemeProvider>
          </>
     )
}