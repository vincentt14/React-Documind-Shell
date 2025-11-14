import { useTheme } from "../context/ThemeContext";

export default function MainPage() {
  const user = "Admin";
  const { theme } = useTheme();

  return (
    <div className="flex h-full items-center justify-center p-6">
      <div className={`w-full max-w-2xl rounded-xl p-8 border  shadow-xl ${theme === "light" ? "bg-white border-gray-300":"bg-[#1F1F1F] border-gray-600 text-white"} `}>

        <h2 className="mb-3 text-xl font-semibold">Upload Your Documents Here</h2>
        <p className={`${theme === "light" ? "text-gray-500" : "text-gray-200"}`}>Hi {user}, welcome to your AI-powered for documents operation</p>

        <hr className="mt-5 border-gray-300 " />

        <div className={`mt-5 flex h-40 items-center justify-center rounded-xl border-2 border-dashed  cursor-pointer ${theme === "light" ? "border-gray-300 bg-gray-50 hover:bg-gray-100 text-gray-500":"border-gray-600 text-gray-200"}`}>
          <p>Drop your files here or click to browse</p>
        </div>

        <button className="cursor-pointer mt-5 rounded-xl bg-cyan-700 px-4 py-2 text-white hover:bg-cyan-800 hover:shadow-lg">
          Process
        </button>
      </div>
    </div>
  );
}