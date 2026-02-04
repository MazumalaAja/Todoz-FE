// ===== Code =====
export default function Modal({ open, onClick, children }) {
     return (
          <div onClick={onClick} className={`${open ? `z-99999 opacity-100` : `-z-1 opacity-0`} transition-all duration-200 fixed inset-0  bg-neutral-900/70 backdrop-blur-sm flex justify-center items-center`}>
               {children}
          </div>
     )
}