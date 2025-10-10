import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import idmLogo from "../assets/idm_logo.png";

export default function LoginPage() {
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
      alert("Invalid credentials");
    }
  };

  const inputClassName = "w-full rounded-xl border border-gray-300 bg-white px-4 py-3 focus-within:ring-2 focus-within:ring-cyan-600 transition focus:outline-none";

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-sm rounded-xl bg-white p-8 shadow-lg">
        <img src={idmLogo} alt="Indomaret" className="mb-4 mx-auto max-w-[250px] w-full h-auto object-contain" />

        <h1 className="mb-4 text-center text-4xl font-bold">Login</h1>
        <form onSubmit={handleLogin} className="space-y-4">
          <div className="my-4 flex flex-col gap-y-3">
            <label htmlFor="username" className="font-medium">
              Username <span className="text-red-500">*</span>
            </label>
            <input id="username" type="text" placeholder="Enter your username" className={inputClassName} value={username} onChange={(e) => setUsername(e.target.value)} required />
          </div>

          <div className="my-4 flex flex-col gap-y-2">
            <label htmlFor="password" className="font-medium">
              Password <span className="text-red-500">*</span>
            </label>
            <input id="password" type="password" placeholder="Enter your password" className={inputClassName} value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>

          <button className="w-full rounded-xl bg-cyan-700 mt-2 py-3 text-white font-bold cursor-pointer hover:bg-cyan-800 hover:shadow-lg">Sign In</button>
        </form>
      </div>
    </div>
  );
}
