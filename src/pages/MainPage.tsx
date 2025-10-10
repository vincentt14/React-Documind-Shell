export default function MainPage() {
  const user = "Admin";

  return (
    <div className="flex h-full items-center justify-center p-6">
      <div className="w-full max-w-2xl rounded-xl bg-white p-8 border border-gray-300 shadow-xl">
        <h2 className="mb-3 text-xl font-semibold">Upload Your Documents Here</h2>
        <p className="text-gray-500">Hi {user}, welcome to your AI-powered for documents operation</p>

        <hr className="mt-5 border-gray-300 " />

        <div className="mt-5 flex h-40 items-center justify-center rounded-xl border-2 border-dashed border-gray-300 bg-gray-50 cursor-pointer hover:bg-gray-100">
          <p className="text-gray-500">Drop your files here or click to browse</p>
        </div>

        <button className="mt-5 rounded-xl bg-cyan-700 px-4 py-2 text-white hover:bg-cyan-800 hover:shadow-lg">
          Process
        </button>
      </div>
    </div>
  );
}