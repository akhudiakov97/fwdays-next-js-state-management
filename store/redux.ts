import { create } from "zustand";
import { CounterState } from "./";

export type CounterStateRedux = CounterState & {
    dispatch: (args: never) => void;
}

export const reduxStoreType = { increase: 'INCREASE', decrease: 'DECREASE' } as const;

type ActionType = 'INCREASE' | 'DECREASE'

const reducer = (state: CounterState, { type }: { type: ActionType }) => {
  switch (type) {
    case reduxStoreType.increase:
      return { counter: state.counter + 1 }
    case reduxStoreType.decrease:
      return { counter: state.counter - 1 }
  }
}

export const useCounterStoreRedux = create<CounterStateRedux>((set) => ({
  counter: 0,
  dispatch: (args: never) => set((state: CounterState) => reducer(state, args)),
}));