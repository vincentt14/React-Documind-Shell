export default function MainPage() {
  return (
    <div className="flex h-full items-center justify-center p-6">
      <div className="w-full max-w-2xl rounded-lg bg-white p-6 shadow">
        <h2 className="mb-4 text-xl font-semibold">Upload Your Documents</h2>
        <div className="flex h-40 items-center justify-center rounded border-2 border-dashed">
          <p className="text-gray-500">Drop your files here or click to browse</p>
        </div>
        <button className="mt-4 rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
          Process
        </button>
      </div>
    </div>
  );
}