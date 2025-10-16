import { FaAngleRight, FaFilePdf } from "react-icons/fa6";
import type { SummaryFile } from "../data";

type SummaryFilesProps = {
  filteredFiles: SummaryFile[];
  sortBy: "Recent" | "Name" | "Size";
  setSortBy: (sortBy: "Recent" | "Name" | "Size") => void;
  handleViewDetail: (file: SummaryFile) => void;
};

export default function SummaryFiles({ filteredFiles, sortBy, setSortBy, handleViewDetail }: SummaryFilesProps) {
  return (
    <div className="border border-gray-300 rounded-xl bg-white shadow-lg overflow-hidden">
      <div className="border-b border-gray-300 px-6 py-4 bg-gray-100 flex flex-row items-center justify-between">
        <div className="font-medium">Files</div>
        <div className="flex flex-row items-center justify-between gap-2 text-sm text-gray-500">
          <p>Sort By:</p>
          <select className="border border-gray-300 p-1.5 focus-within:ring-2 focus-within:ring-cyan-600 transition focus:outline-none" value={sortBy} onChange={(e) => setSortBy(e.target.value as "Recent" | "Name" | "Size")}>
            <option value="Recent">Recent</option>
            <option value="Name">Name</option>
            <option value="Size">Size</option>
          </select>
        </div>
      </div>

      <div className="max-h-[300px] overflow-y-auto divide-y divide-gray-200">
        {filteredFiles.map((file: SummaryFile) => (
          <div key={file.id} className="flex items-center justify-between px-6 py-4 hover:bg-gray-50 transition">
            <div className="flex items-center gap-3">
              <div className="bg-red-100 p-2 rounded-xl">
                <FaFilePdf className="text-red-500 w-5 h-5" />
              </div>
              <div>
                <p className="font-medium">{file.name}</p>
                <p className="text-xs text-gray-500">
                  {file.size} MB • Uploaded at {file.uploadedAt}
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between gap-3">
              <span className={`text-xs px-3 py-1.5 rounded-full font-bold ${file.status === "Completed" ? "bg-green-100 text-green-700" : file.status === "Processing" ? "bg-yellow-100 text-yellow-700" : "bg-red-100 text-red-700"}`}>
                {file.status}
              </span>
              <button className="text-gray-400 cursor-pointer hover:text-gray-800" onClick={() => handleViewDetail(file)}>
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
