import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

export default function RootLayout(){
  return (
    <div className="flex h-screen">
      <div className="w-64 bg-gray-800 text-white">
        <Sidebar />
      </div>

      <div className="flex-1 overflow-hidden bg-gray-50">
        <Outlet />
      </div>
    </div>
  );
}

