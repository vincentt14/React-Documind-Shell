import { createContext, useContext, useState, type ReactNode } from "react";
import { v4 as uuidv4 } from "uuid";

type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: string;
};

type Chat = {
  id: string;
  title: string;
  messages: Message[];
  createdAt: string;
};

type ChatContextType = {
  chats: Record<string, Chat>;
  newChat: (firstMessage: string) => string;
  sendMessage: (chatId: string, message: string) => void;
  getChatList: () => Chat[];
};

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export function ChatProvider({ children }: { children: ReactNode }) {
  const [chats, setChats] = useState<Record<string, Chat>>({});

  const newChat = (firstMessage: string): string => {
    const id = uuidv4();
    const now = new Date().toISOString();

    const chat: Chat = {
      id,
      title: firstMessage.slice(0, 40),
      createdAt: now,
      messages: [
        {
          id: uuidv4(),
          role: "user",
          content: firstMessage,
          timestamp: now,
        },
        {
          id: uuidv4(),
          role: "assistant",
          content: "Processing your question with Documind AI...",
          timestamp: now,
        },
      ],
    };

    setChats((prev) => ({ ...prev, [id]: chat }));
    return id;
  };

  const sendMessage = (chatId: string, message: string) => {
    setChats((prev) => {
      const chat = prev[chatId];
      if (!chat) return prev;

      const now = new Date().toISOString();

      const updatedChat: Chat = {
        ...chat,
        messages: [
          ...chat.messages,
          {
            id: uuidv4(),
            role: "user",
            content: message,
            timestamp: now,
          },
          {
            id: uuidv4(),
            role: "assistant",
            content: `Arlen AI: "${message}"`,
            timestamp: now,
          },
        ],
      };

      return { ...prev, [chatId]: updatedChat };
    });
  };

  const getChatList = (): Chat[] => Object.values(chats).sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));

  return (
    <ChatContext.Provider value={{ chats, newChat, sendMessage, getChatList }}>
      {children}
    </ChatContext.Provider>
  );
}

export const useChat = () => {
  const ctx = useContext(ChatContext);
  if (!ctx) throw new Error("useChat must be used within ChatProvider");
  return ctx;
};
