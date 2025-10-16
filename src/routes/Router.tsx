import { createBrowserRouter, Navigate } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import LoginPage from "../pages/LoginPage";
import MainPage from "../pages/MainPage";
import SummaryPage from "../pages/SummaryPage";
import AskPage from "../pages/AskPage";
import ChatPage from "../pages/ChatPage";
import ProtectedRoute from "./ProtectedRoute";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: "/",
        element: <RootLayout />,
        children: [
          { index: true, element: <Navigate to="uploadDocument" replace /> },
          { path: "uploadDocument", element: <MainPage /> },
          { path: "summarySearch", element: <SummaryPage /> },
          { path: "askPage", element: <AskPage /> },
          { path: "chat/:chatId", element: <ChatPage /> },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/login" replace />,
  },
]);
