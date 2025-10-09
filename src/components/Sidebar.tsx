import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <nav className="flex h-full flex-col p-4 space-y-2">
      <Link to="/uploadDocument" className="hover:bg-gray-700 p-2 rounded">
        Upload Documents
      </Link>
      <Link to="/summarySearch" className="hover:bg-gray-700 p-2 rounded">
        Search Summary
      </Link>
      <Link to="/askPage" className="hover:bg-gray-700 p-2 rounded">
        New Chat
      </Link>

      <div className="mt-4 border-t pt-2">
        <p className="text-sm text-gray-400">History</p>
        {/* contoh hardcoded, nanti bisa dari state */}
        <Link to="/chat/123" className="block hover:bg-gray-700 p-2 rounded">
          Chat 123
        </Link>
        <Link to="/chat/456" className="block hover:bg-gray-700 p-2 rounded">
          Chat 456
        </Link>
      </div>
    </nav>
  );
}
