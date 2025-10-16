import { useState } from "react";
import { dummyData } from "../data";
import DetailModal from "../components/DetailModal";
import type { SummaryFile } from "../data";

import { FiSearch } from "react-icons/fi";
import SummaryFiles from "../components/SummaryFiles";

export default function SummaryPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState<"Recent" | "Name" | "Size">("Recent");
  const [selectedFile, setSelectedFile] = useState<SummaryFile | null>(null);

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
    <div className="flex h-full flex-col items-center justify-center p-6">
      <div className="w-full max-w-2xl">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-4">Your summary history</h2>
        <p className="text-gray-500 mb-6">Browse and explore summarization based on your files that you upload earlier.</p>

        <div className="mb-6">
          <div className="relative w-full">
            <FiSearch className="absolute left-3 top-3 text-gray-500" size={18} />
            <input
              type="text"
              placeholder="Search your summary"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full border bg-white border-gray-300 rounded-xl pl-9 pr-3 py-2 text-gray-700 focus:ring-cyan-600 focus:outline-none focus-within:shadow-xl focus-within:ring-2 focus-within:ring-cyan-600 transition"
            />
          </div>
        </div>

        <p className="text-gray-500">{filteredFiles.length} files uploaded using Documind</p>
        <hr className="my-6 border-gray-300 " />
        
        <SummaryFiles filteredFiles={filteredFiles} sortBy={sortBy} setSortBy={setSortBy} handleViewDetail={handleViewDetail} />
      </div>

      {selectedFile && <DetailModal selectedFile={selectedFile} closeModal={closeModal} />}
    </div>
  );
}
