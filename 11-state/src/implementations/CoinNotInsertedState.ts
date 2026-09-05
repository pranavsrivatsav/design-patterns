import { PinballMachine, pinballStates } from "../interfaces/PinballMachine";
import { PinballMachineState } from "../interfaces/PinballMachineState";

// "Concrete State" for the idle machine (candy in stock, no coin in yet).
// insertCoin() is the only action that transitions anywhere, moving to
// CoinInsertedState; refill() tops up candiesCount without changing state,
// since restocking doesn't require a coin.
class CoinNotInsertedState implements PinballMachineState {
  pinballMachine: PinballMachine;

  constructor(pinballMachine: PinballMachine) {
    this.pinballMachine = pinballMachine;
  }

  insertCoin: () => void = () => {
    this.pinballMachine.setState(pinballStates.COIN_INSERTED);
  };
  ejectCoin: () => void = () => console.log("No coin inserted");
  pullLever: () => void = () => console.log("No coin inserted");
  deployCandy: () => void = () => console.log("No coin inserted");
  refill: (refillCandiesCount: number) => void = (
    refillCandiesCount: number,
  ) => {
    const newCandiesCount =
      this.pinballMachine.getCandiesCount() + refillCandiesCount;
    this.pinballMachine.setCandiesCount(newCandiesCount);
  };
}

export { CoinNotInsertedState };
