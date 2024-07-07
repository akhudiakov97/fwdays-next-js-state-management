import { create } from 'zustand';
import { CounterActions, CounterState } from '.';

const useCounterStoreSimple = create<CounterState & CounterActions>((set) => ({
    counter: 0,
    increment: () => set((state) => ({ counter: state.counter + 1 })),
    decrement: () => set((state) => {
        if (state.counter > 0) {
            return { counter: state.counter - 1 };
        } else {
            return { counter: state.counter };
        }
    }),
}));

export default useCounterStoreSimple;