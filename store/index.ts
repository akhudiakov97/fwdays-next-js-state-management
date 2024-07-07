import useCounterStoreSimple from "./simple";
import { useCounterStoreRedux } from "./global";
import { useCounterStoreHash } from "./urlHash";

export interface CounterState {
  counter: number;
}

export interface CounterActions {
  increment: () => void;
  decrement: () => void;
}

export { useCounterStoreHash, useCounterStoreRedux, useCounterStoreSimple };
