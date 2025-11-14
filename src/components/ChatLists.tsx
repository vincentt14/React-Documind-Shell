import { useEffect, useRef } from "react";
import { useTheme } from "../context/ThemeContext";

type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: string;
};

type ChatListProps = {
  messages: Message[];
};

export default function ChatList({ messages }: ChatListProps) {
  const bottomRef = useRef<HTMLDivElement | null>(null);
  const { theme } = useTheme();

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="space-y-5">
      {messages.map((msg) => (
        <div key={msg.id} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
          <div
            className={`py-3 px-4 rounded-2xl text-sm whitespace-pre-wrap break-words ${
              theme === "light"
                ? msg.role === "user"
                  ? "bg-gray-100 text-black max-w-[75%] border border-gray-300"
                  : "max-w-full text-black"
                : msg.role === "user"
                ? "bg-[#1F1F1F] text-white max-w-[75%] border border-gray-600"
                : "max-w-full text-white"
            }`}
          >
            {msg.content}
          </div>
        </div>
      ))}

      <div ref={bottomRef} />
    </div>
  );
}
