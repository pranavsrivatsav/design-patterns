// The "State" role. One shared interface for every concrete state so the
// Context (PinballMachine) can hold a plain PinballMachineState reference
// and call the same five methods no matter which state is actually active -
// it never needs to know or branch on what state that is.
export interface PinballMachineState {
  insertCoin: () => void;
  ejectCoin: () => void;
  pullLever: () => void;
  deployCandy: () => void;
  refill: (refillCandiesCount: number) => void;
}
