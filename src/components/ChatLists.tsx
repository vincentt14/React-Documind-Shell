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
  return (
    <div className="space-y-5">
      {messages.map((msg) => (
        <div key={msg.id} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
          <div
            className={`py-3 px-4 rounded-2xl text-sm text-black whitespace-pre-wrap break-words ${
              msg.role === "user"
                ? "bg-gray-100 text-black max-w-[75%] border border-gray-300"
                : "max-w-full"
            }`}
          >
            {msg.content}
          </div>
        </div>
      ))}
    </div>
  );
}
