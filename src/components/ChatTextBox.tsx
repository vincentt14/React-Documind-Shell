import { useEffect, useRef, useState, type FormEvent } from "react";
import { MdOutlineMicNone, MdOutlineArrowUpward } from "react-icons/md";
import { useTheme } from "../context/ThemeContext";

type ChatTextBoxProps = {
  placeholder?: string;
  onSubmit: (message: string) => void;
};

export default function ChatTextBox({ placeholder = "Ask anything...", onSubmit }: ChatTextBoxProps) {
  const { theme } = useTheme();
  const [message, setMessage] = useState("");

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [message]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    onSubmit(message);
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit} className={`w-full transition-all mx-auto flex flex-col border rounded-2xl shadow-xl px-4 py-3 focus-within:ring-2 ${theme === "light" ? "bg-white border-gray-300 focus-within:ring-cyan-600" : "bg-[#1F1F1F] border-gray-600 focus-within:ring-cyan-400"}`}>
      <textarea
        placeholder={placeholder}
        ref={textareaRef}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        rows={1}
        className={`resize-none placeholder-gray-400 focus:outline-none w-full pr-2 leading-relaxed ${theme === "light" ? "" : "text-white"}`}
        style={{ maxHeight: "200px", minHeight: "40px" }}
      />

      <div className="flex justify-end items-center mt-3">
        <button type="button" className={`cursor-pointer  mr-3 ${theme === "light" ? "text-gray-500 hover:text-cyan-700" : "text-gray-300 hover:text-cyan-500"} `} onClick={() => alert("Mic feature coming soon!")}>
          <MdOutlineMicNone className="w-6 h-6" />
        </button>

        <button type="submit" className={`cursor-pointer bg-cyan-700 text-white p-2 rounded-xl hover:bg-cyan-800 transition hover:shadow-lg`}>
          <MdOutlineArrowUpward className="w-5 h-5" />
        </button>
      </div>
    </form>
  );
}
