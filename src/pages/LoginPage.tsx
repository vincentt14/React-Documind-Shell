import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { useAuth } from "../context/AuthContext";
import idmLogo from "../assets/logo_indomaret.png";

export default function LoginPage() {
  const { theme } = useTheme();
  const { login } = useAuth();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username && password) {
      login(username);
      navigate("/uploadDocument");
    } else {
      ("");
      alert("Invalid credentials");
    }
  };

  const inputClassName = `w-full rounded-lg border p-2.5 focus-within:ring-2 transition focus:outline-none ${theme === "light" ? "bg-white border-gray-300 focus-within:ring-cyan-600" : "bg-[#1F1F1F] border-gray-600 focus-within:ring-cyan-500"}`;

  return (
    <div className={`flex h-screen items-center justify-center ${theme === "light" ? "bg-gray-100 text-black" : "bg-[#262626] text-white"}`}>
      <div className={`w-full max-w-sm rounded-xl p-8 shadow-lg ${theme === "light" ? "bg-white" : "bg-[#1F1F1F]"}`}>
        <img src={idmLogo} alt="Indomaret" className="mb-4 mx-auto max-w-[250px] w-full h-auto object-contain" />

        <h1 className="mb-4 text-center text-3xl font-bold">Login</h1>

        <form onSubmit={handleLogin}>
          <div className="my-4 flex flex-col gap-y-1.5">
            <label htmlFor="username">
              Username <span className="text-red-500">*</span>
            </label>
            <input id="username" type="text" placeholder="Enter your username" className={inputClassName} value={username} onChange={(e) => setUsername(e.target.value)} required />
          </div>

          <div className="my-4 flex flex-col gap-y-1.5">
            <label htmlFor="password">
              Password <span className="text-red-500">*</span>
            </label>
            <input id="password" type="password" placeholder="Enter your password" className={inputClassName} value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>

          <button className="w-full rounded-lg bg-cyan-700 mt-2 p-2.5 text-white font-bold cursor-pointer hover:bg-cyan-800 hover:shadow-lg">Sign In</button>
        </form>
      </div>
    </div>
  );
}
