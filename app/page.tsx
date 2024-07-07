import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-400 to-indigo-600">
      <h1 className="text-4xl font-bold text-white mb-8">
        Next.js State Management
      </h1>

      <div className="bg-white rounded-lg shadow-lg p-8 space-y-4">
        <Link
          href="/simple"
          className="block text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Simple State Management
        </Link>

        <Link
          href="/global"
          className="block text-center bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
        >
          Global State Management
        </Link>

        <Link
          href="/hash"
          className="block text-center bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded"
        >
          Hash State Management
        </Link>
      </div>
    </main>
  );
}
