import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { useSidebar } from "../context/LayoutContext";

export default function RootLayout() {
  const { collapsed } = useSidebar();

  return (
    <div className="flex h-screen overflow-hidden">
      <div className={`bg-white text-gray-800 border-r border-gray-300 transition-all duration-300 ${collapsed ? "w-20" : "w-64"}`}>
        <Sidebar />
      </div>

      <div className="flex-1 flex flex-col overflow-hidden bg-gray-50">
        <Outlet />
      </div>
    </div>
  );
}
