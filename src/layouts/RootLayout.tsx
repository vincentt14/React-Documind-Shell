import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { useTheme } from "../context/ThemeContext";
import { useSidebar } from "../context/LayoutContext";
import { MdLightMode, MdDarkMode } from "react-icons/md";

export default function RootLayout() {
  const { theme, toggleTheme } = useTheme();
  const { collapsed } = useSidebar();

  return (
    <div className="flex h-screen overflow-hidden">
      <div className={`border-r transition-all duration-300 ${collapsed ? "w-20" : "w-64"} ${theme === "light" ? "bg-white text-gray-800 border-gray-300" : "bg-[#1F1F1F] text-white border-gray-300"}`}>
        <Sidebar />
      </div>

      <div className={`flex-1 relative ${theme === "light" ? "bg-gray-50" : "bg-[#262626]"}`}>
        <div
          className={`cursor-pointer absolute top-0 right-0 m-4 px-4 h-10 flex items-center justify-end rounded-lg shadow-md border transition 
          ${theme === "light" ? "bg-white border-gray-300 text-gray-800" : "bg-[#1F1F1F] border-gray-700 text-gray-200"}`}
          onClick={toggleTheme}
        >
          <button className="p-2 rounded-md hover:scale-110 transition-all">{theme === "light" ? <MdDarkMode className="text-gray-700 w-5 h-5" /> : <MdLightMode className="text-white w-5 h-5" />}</button>
        </div>

        <div className="flex-1 h-full overflow-hidden overflow-x-hidden">
          <div className="w-full h-full overflow-y-auto overflow-x-hidden p-6">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
