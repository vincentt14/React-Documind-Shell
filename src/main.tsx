import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import { router } from "./routes/Router";
import { ThemeProvider } from "./context/ThemeContext";
import { AuthProvider } from "./context/AuthContext";
import { SidebarProvider } from "./context/LayoutContext";
import { ChatProvider } from "./context/ChatContext";
import "./styles/index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <SidebarProvider>
          <ChatProvider>
            <RouterProvider router={router} />
          </ChatProvider>
        </SidebarProvider>
      </AuthProvider>
    </ThemeProvider>
  </StrictMode>
);
