// ===== Imports =====
import errorPage from "../assets/images/png/404-3.png";

// ===== Code =====
export default function ErrorPage() {
     return (
          <>
               <div className="bg-neutral-900 min-h-screen flex justify-center-safe items-center-safe">
                    <img className="w-full max-w-2xl" src={errorPage} alt={`Error Page Photo`} />
               </div>
          </>
     )
}