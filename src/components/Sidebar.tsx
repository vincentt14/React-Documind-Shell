import { NavLink } from "react-router-dom";
import { useSidebar } from "../context/LayoutContext";
import { useChat } from "../context/ChatContext";
import documindLogo from "../assets/documind.svg";
import { MdOutlineFileUpload, MdOutlineSearch, MdAdd } from "react-icons/md";
import { LuPanelLeftClose, LuPanelLeftOpen } from "react-icons/lu";

export default function Sidebar() {
  const { collapsed, toggleSidebar } = useSidebar();
  const { getChatList } = useChat();

  const chatList = getChatList();

  const baseLink = `block p-2 rounded-xl transition-colors duration-150 hover:bg-cyan-800 hover:text-white flex items-center ${
    collapsed ? "" : "gap-2"
  }`;
  const activeLink = `bg-gray-200 text-cyan-800 font-semibold shadow-lg border border-cyan-700 ${
    collapsed ? "border-x-5" : "border-l-5"
  }`;

  return (
    <div className={`h-screen flex flex-col bg-white border-r border-gray-300 transition-all duration-300 ${collapsed ? "w-20" : "w-64"}`}>
      <div className={`flex items-center justify-between ${collapsed ? "px-6 py-4" : "pl-6 pr-4 py-4"}`}>
        {collapsed ? (
          <button type="button" className="cursor-pointer text-gray-500 hover:text-cyan-700" onClick={toggleSidebar}>
            <LuPanelLeftOpen className="w-6 h-6" />
          </button>
        ) : (
          <>
            <NavLink to="/" className="cursor-pointer">
              <img src={documindLogo} alt="Documind" className="w-6 h-6" />
            </NavLink>

            <button type="button" className="cursor-pointer text-gray-500 hover:text-cyan-700" onClick={toggleSidebar}>
              <LuPanelLeftClose className="w-6 h-6" />
            </button>
          </>
        )}
      </div>

      <nav className="flex h-full flex-col p-4 pt-1 space-y-1">
        <NavLink to="/uploadDocument" className={({ isActive }) => `${baseLink} ${isActive ? activeLink : ""}`}>
          <MdOutlineFileUpload className="w-5 h-5" />
          {!collapsed && <span>Upload Documents</span>}
        </NavLink>

        <NavLink to="/summarySearch" className={({ isActive }) => `${baseLink} ${isActive ? activeLink : ""}`}>
          <MdOutlineSearch className="w-5 h-5" />
          {!collapsed && <span>Search Summary</span>}
        </NavLink>

        <NavLink to="/askPage" className={({ isActive }) => `${baseLink} ${isActive ? activeLink : ""}`}>
          <MdAdd className="w-5 h-5" />
          {!collapsed && <span>New Chat</span>}
        </NavLink>

        {!collapsed && (
          <div className="flex-1 flex flex-col mt-4 overflow-hidden">
            <p className="text-gray-400 font-semibold px-3 mb-2 flex-shrink-0">History</p>

            <div className="flex-1 overflow-y-auto pr-1 space-y-1 scrollbar-thin">
              {chatList.length > 0 ? (
                chatList.map((chat) => (
                  <NavLink
                    key={chat.id}
                    to={`/chat/${chat.id}`}
                    className={({ isActive }) => `${baseLink} ${isActive ? activeLink : ""}`}
                  >
                    {chat.title}
                  </NavLink>
                ))
              ) : (
                <p className="text-gray-400 text-sm px-3">No chats yet</p>
              )}
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}