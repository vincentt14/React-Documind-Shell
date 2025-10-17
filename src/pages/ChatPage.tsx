import { useParams } from "react-router-dom";
import { useChat } from "../context/ChatContext";
import ChatList from "../components/ChatLists";
import ChatTextBox from "../components/ChatTextBox";

export default function ChatPage() {
  const { chatId } = useParams();
  const { sendMessage, chats } = useChat();
  const messages = chats[chatId ?? ""]?.messages || [];

  return (
    <div className="flex flex-col h-screen overflow-y-auto">
      <div className="flex-1 px-50 py-10">
        <ChatList messages={messages} />
      </div>

      <div className="sticky bottom-0 px-50 pb-10">
        <ChatTextBox onSubmit={(msg) => sendMessage(chatId!, msg)} />
      </div>
    </div>
  );
}
