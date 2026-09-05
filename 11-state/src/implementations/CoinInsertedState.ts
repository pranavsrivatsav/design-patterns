import { PinballMachine, pinballStates } from "../interfaces/PinballMachine";
import { PinballMachineState } from "../interfaces/PinballMachineState";

// "Concrete State" once a coin has been inserted. ejectCoin() backs out to
// CoinNotInsertedState. pullLever() is where the game's payoff logic
// lives: a 1-in-10 roll transitions to WinnerState, otherwise to
// LeverPulledState - deployCandy() itself is a no-op here, since dispensing
// only happens once PinballMachine.pullLever() re-invokes it against
// whichever of those two states this just transitioned into.
class CoinInsertedState implements PinballMachineState {
  pinballMachine: PinballMachine;

  constructor(pinballMachine: PinballMachine) {
    this.pinballMachine = pinballMachine;
  }

  insertCoin: () => void = () => console.log("Coin already inserted");
  ejectCoin: () => void = () => {
    console.log("Coin ejected");
    this.pinballMachine.setState(pinballStates.COIN_NOT_INSERTED);
  };
  pullLever: () => void = () => {
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    if (randomNumber === 5) {
      this.pinballMachine.setState(pinballStates.WINNER);
    } else {
      this.pinballMachine.setState(pinballStates.LEVER_PULLED);
    }
  };
  deployCandy: () => void = () => console.log("Pull the lever first");
  refill: (refillCandiesCount: number) => void = () =>
    console.log("Cannot refill while a coin is inserted");
}

export { CoinInsertedState };
