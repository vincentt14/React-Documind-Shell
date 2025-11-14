import { useState } from "react";
import { dummyData } from "../data";
import DetailModal from "../components/DetailModal";
import type { SummaryFile } from "../data";

import { FiSearch } from "react-icons/fi";
import SummaryFiles from "../components/SummaryFiles";
import { useTheme } from "../context/ThemeContext";

export default function SummaryPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState<"Recent" | "Name" | "Size">("Recent");
  const [selectedFile, setSelectedFile] = useState<SummaryFile | null>(null);
  const { theme } = useTheme();

  const filteredFiles = dummyData
    .filter((file) => file.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => {
      switch (sortBy) {
        case "Recent":
          return new Date(b.uploadedAt).getTime() - new Date(a.uploadedAt).getTime();
        case "Name":
          return a.name.localeCompare(b.name);
        case "Size":
          return b.size - a.size;
        default:
          return 0;
      }
    });

  const handleViewDetail = (file: SummaryFile) => {
    setSelectedFile(file);
  };

  const closeModal = () => {
    setSelectedFile(null);
  };

  return (
    <div className={`flex h-full flex-col items-center justify-center p-6 ${theme === "light" ? "" : " text-white"}`}>
      <div className="w-full max-w-2xl">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-4">Your summary history</h2>
        <p className={`mb-6 ${theme === "light" ? "text-gray-500" : "text-gray-300"}`}>Browse and explore summarization based on your files that you upload earlier.</p>

        <div className="mb-6">
          <div className={`relative w-full`}>
            <FiSearch className="absolute left-3 top-3 text-gray-500" size={18} />
            <input
              type="text"
              placeholder="Search your summary"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={`w-full border rounded-xl pl-9 pr-3 py-2 focus:outline-none focus-within:shadow-xl focus-within:ring-2 transition ${theme === "light" ? "bg-white border-gray-300 focus:ring-cyan-600 focus-within:ring-cyan-600 text-gray-700" : "bg-[#1F1F1F] border-gray-600 focus:ring-cyan-400 focus-within:ring-cyan-400 text-gray-200"}`}
            />
          </div>
        </div>

        <p className={`${theme === "light" ? "text-gray-500" : "text-gray-300"}`}>{filteredFiles.length} files uploaded using Documind</p>
        <hr className="my-6 border-gray-300" />
        
        <SummaryFiles filteredFiles={filteredFiles} sortBy={sortBy} setSortBy={setSortBy} handleViewDetail={handleViewDetail} />
      </div>

      {selectedFile && <DetailModal selectedFile={selectedFile} closeModal={closeModal} />}
    </div>
  );
}
