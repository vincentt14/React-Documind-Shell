import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import { MdOutlineMicNone, MdOutlineArrowUpward } from "react-icons/md";

export default function AskPage() {
  const navigate = useNavigate();
  const [question, setQuestion] = useState("");

  const handleNewChat = (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim()) return;
    const chatId = uuidv4();
    navigate(`/chat/${chatId}`, { state: { question } });
  };

  return (
    <div className="flex flex-col items-center justify-center h-full px-4">
      <h2 className="text-3xl sm:text-4xl font-semibold mb-8 text-center">What can I help with?</h2>

      <form onSubmit={handleNewChat} className="w-full max-w-2xl flex items-center rounded-2xl border border-gray-300 bg-white px-4 py-3 shadow-xl focus-within:ring-2 focus-within:ring-cyan-600 transition">
        <input type="text" placeholder="Ask anything..." className="flex-grow text-gray-700 placeholder-gray-400 focus:outline-none px-2" value={question} onChange={(e) => setQuestion(e.target.value)} />

        <button type="button" className="cursor-pointer text-gray-500 hover:text-cyan-700 mr-3" onClick={() => alert("Mic feature coming soon!")}>
          <MdOutlineMicNone className="w-6 h-6" />
        </button>

        <button type="submit" className="cursor-pointer bg-cyan-700 text-white p-2 rounded-xl hover:bg-cyan-800 transition hover:shadow-lg">
          <MdOutlineArrowUpward className="w-5 h-5" />
        </button>
      </form>
    </div>
  );
}
