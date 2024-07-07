import { create } from "zustand";
import { persist, StateStorage, createJSONStorage } from "zustand/middleware";
import { CounterActions, CounterState } from ".";

const hashStorage: StateStorage = {
  getItem: (key): string => {
    const searchParams = new URLSearchParams(location.hash.slice(1));
    const storedValue = searchParams.get(key) ?? "";
    return JSON.parse(storedValue);
  },
  setItem: (key, newValue): void => {
    const searchParams = new URLSearchParams(location.hash.slice(1));
    searchParams.set(key, JSON.stringify(newValue));
    location.hash = searchParams.toString();
  },
  removeItem: (key): void => {
    const searchParams = new URLSearchParams(location.hash.slice(1));
    searchParams.delete(key);
    location.hash = searchParams.toString();
  },
};

export const useCounterStoreHash = create(
  persist(
    (set, get: () => CounterState & CounterActions) => ({
      counter: 0,
      increment: () => set({ counter: get().counter + 1 }),
      decrement: () => set({ counter: get().counter - 1 }),
    }),
    {
      name: "counter-storage", // unique name
      storage: createJSONStorage(() => hashStorage),
    }
  )
);
