import { useNavigate } from "react-router-dom";
import { useChat } from "../context/ChatContext";

import ChatTextBox from "../components/ChatTextBox";
import { useTheme } from "../context/ThemeContext";

export default function AskPage() {
  const { theme } = useTheme();
  const navigate = useNavigate();
  const { newChat } = useChat();

  const handleNewChat = (message: string) => {
    const chatId = newChat(message);
    navigate(`/chat/${chatId}`);
  };

  return (
    <div className="flex flex-col items-center justify-center h-full px-4">
      <h2 className={`text-3xl sm:text-4xl font-semibold mb-8 text-center ${theme === "light" ? "" : "text-white"} `}>What can I help with?</h2>

      <div className="w-full max-w-2xl">
        <ChatTextBox placeholder="Ask anything..." onSubmit={handleNewChat} />
      </div>
    </div>
  );
}
