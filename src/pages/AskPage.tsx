import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

export default function AskPage() {
  const navigate = useNavigate();

  const handleNewChat = () => {
    const chatId = uuidv4(); // generate unique chat id
    navigate(`/chat/${chatId}`);
  };

  return (
    <div className="flex h-full items-center justify-center">
      <button
        onClick={handleNewChat}
        className="rounded bg-green-600 px-4 py-2 text-white hover:bg-green-700"
      >
        Start New Chat
      </button>
    </div>
  );
}
