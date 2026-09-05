import { PinballMachine, pinballStates } from "../interfaces/PinballMachine";
import { PinballMachineState } from "../interfaces/PinballMachineState";

// "Concrete State" for the moment between the lever being pulled and candy
// actually dispensing. Every player-facing action just asks the player to
// wait; deployCandy() is the one that does real work, and it's only ever
// reached via PinballMachine.pullLever()'s internal follow-up call, not by
// a player directly calling deployCandy(). It decrements candiesCount and
// transitions to SoldOutState if that hits zero, otherwise back to
// CoinNotInsertedState for the next play.
class LeverPulledState implements PinballMachineState {
  pinballMachine: PinballMachine;

  constructor(pinballMachine: PinballMachine) {
    this.pinballMachine = pinballMachine;
  }

  insertCoin: () => void = () => console.log("Please wait, dispensing candy");
  ejectCoin: () => void = () => console.log("Please wait, dispensing candy");
  pullLever: () => void = () => console.log("Please wait, dispensing candy");
  deployCandy: () => void = () => {
    console.log("dispensing candy");
    const newCandiesCount = this.pinballMachine.getCandiesCount() - 1;
    this.pinballMachine.setCandiesCount(newCandiesCount);
    if (newCandiesCount === 0) {
      this.pinballMachine.setState(pinballStates.SOLD_OUT);
    } else {
      this.pinballMachine.setState(pinballStates.COIN_NOT_INSERTED);
    }
  };
  refill: (refillCandiesCount: number) => void = () =>
    console.log("Please wait, dispensing candy");
}

export { LeverPulledState };
