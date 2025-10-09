import { useParams } from "react-router-dom";

export default function ChatPage() {
  const { chatId } = useParams();

  return (
    <div className="flex h-full flex-col">
      <div className="flex-1 overflow-y-auto p-4">
        <p className="text-gray-500">Chat ID: {chatId}</p>
        {/* Daftar pesan chat di sini */}
      </div>
      <div className="border-t p-4">
        <input
          type="text"
          placeholder="Type your message..."
          className="w-full rounded border px-3 py-2"
        />
      </div>
    </div>
  );
}
