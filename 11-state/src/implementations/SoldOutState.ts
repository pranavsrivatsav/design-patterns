import { PinballMachine, pinballStates } from "../interfaces/PinballMachine";
import { PinballMachineState } from "../interfaces/PinballMachineState";

// "Concrete State" for when candiesCount has hit zero. Every player action
// reports failure - only refill() does anything, restocking candiesCount
// and transitioning to CoinNotInsertedState so the machine becomes usable
// again.
class SoldOutState implements PinballMachineState {
  pinballMachine: PinballMachine;

  constructor(pinballMachine: PinballMachine) {
    this.pinballMachine = pinballMachine;
  }

  insertCoin: () => void = () =>
    console.log("Candies sold out, please try later.");
  ejectCoin: () => void = () => console.log("No coin inserted");
  pullLever: () => void = () => console.log("No coin inserted");
  deployCandy: () => void = () => console.log("No coin inserted");
  refill: (refillCandiesCount: number) => void = (
    refillCandiesCount: number,
  ) => {
    const newCandiesCount =
      this.pinballMachine.getCandiesCount() + refillCandiesCount;
    this.pinballMachine.setCandiesCount(newCandiesCount);
    this.pinballMachine.setState(pinballStates.COIN_NOT_INSERTED);
  };
}

export { SoldOutState };
