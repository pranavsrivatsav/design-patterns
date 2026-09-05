import { PinballMachine, pinballStates } from "../interfaces/PinballMachine";
import { PinballMachineState } from "../interfaces/PinballMachineState";

// "Concrete State" for the winning-roll outcome from
// CoinInsertedState.pullLever(). Structurally a mirror of
// LeverPulledState - deployCandy() is reached the same way, via
// PinballMachine.pullLever()'s internal follow-up call - except it
// dispenses two candies instead of one, which is the whole reason this is
// a separate state rather than a branch inside LeverPulledState.
class WinnerState implements PinballMachineState {
  pinballMachine: PinballMachine;

  constructor(pinballMachine: PinballMachine) {
    this.pinballMachine = pinballMachine;
  }

  insertCoin: () => void = () => console.log("Please wait, dispensing candy");
  ejectCoin: () => void = () => console.log("Please wait, dispensing candy");
  pullLever: () => void = () => console.log("Please wait, dispensing candy");
  deployCandy: () => void = () => {
    console.log("You are a winner! Dispensing two candies");
    const newCandiesCount = this.pinballMachine.getCandiesCount() - 2;
    this.pinballMachine.setCandiesCount(newCandiesCount);
    if (newCandiesCount <= 0) {
      this.pinballMachine.setState(pinballStates.SOLD_OUT);
    } else {
      this.pinballMachine.setState(pinballStates.COIN_NOT_INSERTED);
    }
  };
  refill: (refillCandiesCount: number) => void = () =>
    console.log("Please wait, dispensing candy");
}

export { WinnerState };
