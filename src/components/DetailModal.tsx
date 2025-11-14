import type { SummaryFile } from "../data";

import { MdClose } from "react-icons/md";
import { FaFilePdf } from "react-icons/fa6";
import { useTheme } from "../context/ThemeContext";
type DetailModalProps = {
  selectedFile: SummaryFile;
  closeModal: () => void;
};

export default function DetailModal({ selectedFile, closeModal }: DetailModalProps) {
  const { theme } = useTheme();

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50" onClick={closeModal}>
      <div className={`rounded-xl shadow-lg w-full max-w-xl mx-4 p-6 border relative ${theme === "light" ? "bg-white border-gray-100" : "bg-[#262626] border-gray-600"}`} onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-gray-300">
          <h3 className="text-xl font-semibold ">File Summary</h3>
          <button onClick={closeModal} className="cursor-pointer text-gray-400 hover:text-cyan-700 transition">
            <MdClose className="w-7 h-7" />
          </button>
        </div>

        <div className="flex gap-3 mb-3">
          <div className="bg-red-100 p-3 rounded-xl">
            <FaFilePdf className="text-red-500 w-6 h-6" />
          </div>
          <div>
            <p className="font-medium">{selectedFile.name}</p>
            <p className={`text-sm ${theme === "light" ? "text-gray-500" : "text-gray-400"}`}>Uploaded {selectedFile.uploadedAt}</p>
          </div>
        </div>

        <div className="flex items-center gap-2 mb-6">
          <div
            className={`text-xs px-3 py-1.5 rounded-full font-bold ${selectedFile.status === "Completed" ? "bg-green-100 text-green-700" : selectedFile.status === "Processing" ? "bg-yellow-100 text-yellow-700" : "bg-red-100 text-red-700"}`}
          >
            {selectedFile.status}
          </div>
          <span className={`text-xs ${theme === "light" ? "text-gray-500" : "text-gray-400"}`}>PDF</span>
        </div>

        <h4 className="text-sm font-semibold mb-3">Summary</h4>
        <div className={`text-sm p-3 rounded-lg max-h-40 overflow-y-auto ${theme === "light" ? "text-gray-700 bg-gray-100" : "bg-[#1F1F1F] text-gray-300"}`}>
          This is a summary for {selectedFile.name}. The document contains important information and has been successfully processed by Documind AI system. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse commodo, lorem
          eget cursus tincidunt, urna odio tristique justo, vel finibus purus magna non urna. Curabitur convallis sapien et felis bibendum, nec facilisis erat malesuada. Sed in lacus vitae erat aliquam tincidunt. Donec vel nisi ut arcu
          tempor aliquet. Duis fermentum magna ac mattis sodales. Integer sit amet suscipit velit. Morbi sit amet justo nunc. Nullam finibus imperdiet enim at ultricies. Vestibulum vel risus id nulla porttitor egestas.
        </div>

        <div className="flex gap-3 mt-6">
          <button className="cursor-pointer flex-1 bg-cyan-700 text-white p-2 rounded-lg hover:bg-cyan-800 transition hover:shadow-lg">View Full Document</button>
          <button className="cursor-pointer flex-1 bg-gray-200 text-black p-2 rounded-lg hover:bg-gray-300 transition hover:shadow-lg">Download Summary</button>
        </div>
      </div>
    </div>
  );
}
