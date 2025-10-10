import { NavLink } from "react-router-dom";
import { MdOutlineFileUpload, MdOutlineSearch, MdAdd } from "react-icons/md";

export default function Sidebar() {
  const baseLink = "block block p-2 rounded-xl transition-colors duration-150 hover:bg-cyan-800 hover:text-white flex items-center gap-2";

  const activeLink = "bg-gray-200 text-cyan-800 font-semibold shadow-lg border-l-5 border border-cyan-700";

  return (
    <nav className="flex h-full flex-col p-4 space-y-1">
      <NavLink to="/uploadDocument" className={({ isActive }) => `${baseLink} ${isActive ? activeLink : ""}`}>
        <MdOutlineFileUpload className="w-5 h-5" />
        Upload Documents
      </NavLink>

      <NavLink to="/summarySearch" className={({ isActive }) => `${baseLink} ${isActive ? activeLink : ""}`}>
        <MdOutlineSearch className="w-5 h-5" />
        Search Summary
      </NavLink>

      <NavLink to="/askPage" className={({ isActive }) => `${baseLink} ${isActive ? activeLink : ""}`}>
        <MdAdd className="w-5 h-5" />
        New Chat
      </NavLink>

      <div className="mt-4">
        <p className="text-gray-400 font-semibold px-3">History</p>
        
        <NavLink to="/chat/123" className={({ isActive }) => `${baseLink} ${isActive ? activeLink : ""}`}>
          Chat 123
        </NavLink>

        <NavLink to="/chat/456" className={({ isActive }) => `${baseLink} ${isActive ? activeLink : ""}`}>
          Chat 456
        </NavLink>
      </div>
    </nav>
  );
}
