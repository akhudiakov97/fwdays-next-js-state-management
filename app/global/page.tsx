"use client";

import { useCounterStoreRedux } from "@/store";
import { CounterStateRedux, reduxStoreType } from "@/store/global";

export default function Global() {
  const counter = useCounterStoreRedux((state) => state.counter);
  const dispatch = useCounterStoreRedux(
    (state: CounterStateRedux) => state.dispatch
  );

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-500 to-pink-500">
      <h1 className="text-5xl font-bold text-white mb-8">
        Global State Management
      </h1>

      <div className="bg-white rounded-lg shadow-lg p-8">
        <h3 className="text-2xl text-black font-semibold mb-4">Counter: {counter}</h3>

        <div className="flex space-x-4">
          <button
            onClick={() => dispatch({ type: reduxStoreType.decrement })}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Decrement
          </button>
          <button
            onClick={() => dispatch({ type: reduxStoreType.increment })}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Increment
          </button>
        </div>
      </div>
    </main>
  );
}
