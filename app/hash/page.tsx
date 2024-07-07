"use client";

import { useCounterStoreHash } from "@/store";
import { useEffect, useState } from "react";

export default function Hash() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const counter = useCounterStoreHash((state) => state.counter);
  const increment = useCounterStoreHash((state) => state.increment);
  const decrement = useCounterStoreHash((state) => state.decrement);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-green-400 to-teal-500">
      <h1 className="text-4xl font-bold text-white mb-8">
        Hash State Management
      </h1>

      <div className="bg-white rounded-lg shadow-lg p-8">
        {isClient ? (
          <h3 className="text-2xl text-black font-semibold mb-4">
            Counter: {counter}
          </h3>
        ) : null}

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
