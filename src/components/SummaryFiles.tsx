import { FaAngleRight, FaFilePdf } from "react-icons/fa6";
import type { SummaryFile } from "../data";
import { useTheme } from "../context/ThemeContext";

type SummaryFilesProps = {
  filteredFiles: SummaryFile[];
  sortBy: "Recent" | "Name" | "Size";
  setSortBy: (sortBy: "Recent" | "Name" | "Size") => void;
  handleViewDetail: (file: SummaryFile) => void;
};

export default function SummaryFiles({ filteredFiles, sortBy, setSortBy, handleViewDetail }: SummaryFilesProps) {
  const { theme } = useTheme();

  return (
    <div className={`border rounded-xl shadow-lg overflow-hidden ${theme === "light" ? "bg-white border-gray-300" : "bg-[#242424] border-gray-600 text-white"  }`}>
      <div className={`border-b px-6 py-4 flex flex-row items-center justify-between ${theme === "light" ? "border-gray-300 bg-gray-100" : "bg-[#1F1F1F] border-gray-600"}`}>
        <div className="font-medium">Files</div>
        <div className={`flex flex-row items-center justify-between gap-2 text-sm ${theme === "light" ? "text-gray-500" : "text-gray-300"}`}>
          <p>Sort By:</p>
          <select className={`border  p-1.5 focus-within:ring-2 transition focus:outline-none ${theme === "light" ? "border-gray-300 focus-within:ring-cyan-600" : "border-gray-600 focus-within:ring-cyan-600 bg-[#242424]"}`} value={sortBy} onChange={(e) => setSortBy(e.target.value as "Recent" | "Name" | "Size")}>
            <option value="Recent">Recent</option>
            <option value="Name">Name</option>
            <option value="Size">Size</option>
          </select>
        </div>
      </div>

      <div className={`max-h-[300px] overflow-y-auto divide-y ${theme === "light" ? "divide-gray-200" : "divide-gray-600"}`}>
        {filteredFiles.map((file: SummaryFile) => (
          <div key={file.id} className={`flex items-center justify-between px-6 py-4 transition ${theme === "light" ? "hover:bg-gray-50" : "hover:bg-[#1E1E1E]"}`}>
            <div className="flex items-center gap-3">
              <div className="bg-red-100 p-2 rounded-xl">
                <FaFilePdf className="text-red-500 w-5 h-5" />
              </div>
              <div>
                <p className="font-medium">{file.name}</p>
                <p className={`text-xs ${theme === "light" ? "text-gray-500" : "text-gray-400"}`}>
                  {file.size} MB • Uploaded at {file.uploadedAt}
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between gap-3">
              <span className={`text-xs px-3 py-1.5 rounded-full font-bold ${file.status === "Completed" ? "bg-green-100 text-green-700" : file.status === "Processing" ? "bg-yellow-100 text-yellow-700" : "bg-red-100 text-red-700"}`}>
                {file.status}
              </span>
              <button className={`text-gray-400 cursor-pointer ${theme === "light" ? "hover:text-gray-800" : "hover:text-cyan-500"}`} onClick={() => handleViewDetail(file)}>
                <FaAngleRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}

        {filteredFiles.length === 0 && <div className="text-center text-gray-500 py-6">No results found.</div>}
      </div>
    </div>
  );
}
