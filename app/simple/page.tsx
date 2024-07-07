"use client";

import { useCounterStoreSimple } from "@/store";

export default function Simple() {
  const counter = useCounterStoreSimple((state) => state.counter);
  const increment = useCounterStoreSimple((state) => state.increment);
  const decrement = useCounterStoreSimple((state) => state.decrement);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-yellow-300 to-orange-400">
      <h1 className="text-4xl font-bold text-white mb-8">Simple Example</h1>

      <div className="bg-white rounded-lg shadow-lg p-8">
        <h3 className="text-2xl text-black font-semibold mb-4">Counter: {counter}</h3>

        <div className="flex space-x-4">
          <button
            onClick={decrement}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Decrement
          </button>
          <button
            onClick={increment}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Increment
          </button>
        </div>
      </div>
    </main>
  );
}
