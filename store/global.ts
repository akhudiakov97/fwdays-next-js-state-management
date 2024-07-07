import { create } from "zustand";
import { CounterState } from ".";

export type CounterStateRedux = CounterState & {
    dispatch: (args: any) => void;
}

export const reduxStoreType = { increment: 'INCREMENT', decrement: 'DECREMENT' } as const;

type ActionType = 'INCREMENT' | 'DECREMENT'

const reducer = (state: CounterState, { type }: { type: ActionType }) => {
  switch (type) {
    case reduxStoreType.increment:
      return { counter: state.counter + 1 }
    case reduxStoreType.decrement:
      return { counter: state.counter - 1 }
  }
}

export const useCounterStoreRedux = create<CounterStateRedux>((set) => ({
  counter: 0,
  dispatch: (args: any) => set((state: CounterState) => reducer(state, args)),
}));