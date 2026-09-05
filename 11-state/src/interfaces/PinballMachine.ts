import { SoldOutState } from "../implementations/soldOutState";
import { CoinNotInsertedState } from "../implementations/CoinNotInsertedState";
import { CoinInsertedState } from "../implementations/CoinInsertedState";
import { LeverPulledState } from "../implementations/LeverPulledState";
import { WinnerState } from "../implementations/WinnerState";
import { PinballMachineState } from "./PinballMachineState";

// Identifies each concrete state so callers (states themselves, via
// setState()) can request a transition without importing every concrete
// state class or holding a direct reference to the instance they want.
export enum pinballStates {
  SOLD_OUT,
  COIN_INSERTED,
  COIN_NOT_INSERTED,
  LEVER_PULLED,
  WINNER,
}

// The "Context" role. It holds one instance of every concrete state -
// constructed eagerly in the constructor, rather than lazily on first
// transition - and always keeps exactly one of them (`state`) as the
// active one. Every public action (insertCoin, ejectCoin, pullLever,
// refill) just forwards to that active state; PinballMachine itself never
// contains an "if in state X" branch anywhere.
export class PinballMachine {
  private candiesCount: number;
  private soldOutState: PinballMachineState = new SoldOutState(this);
  private coinInsertedState: PinballMachineState = new CoinInsertedState(this);
  private coinNotInsertedState: PinballMachineState = new CoinNotInsertedState(
    this,
  );
  private leverPulled: PinballMachineState = new LeverPulledState(this);
  private winnerState: PinballMachineState = new WinnerState(this);
  private state: PinballMachineState;

  constructor(candiesCount?: number) {
    this.candiesCount = candiesCount ?? 0;
    if (candiesCount) {
      this.state = this.coinNotInsertedState;
    } else {
      this.state = this.soldOutState;
    }
  }

  // Swaps the active state to one of the pre-built instances above. Only
  // the concrete states call this (a state decides what it transitions to
  // next); the client in index.ts never calls it directly.
  setState = (state: pinballStates) => {
    switch (state) {
      case pinballStates.SOLD_OUT:
        console.log("transitionong to soldOut state");
        this.state = this.soldOutState;
        break;
      case pinballStates.COIN_INSERTED:
        console.log("transitionong to coinInserted state");
        this.state = this.coinInsertedState;
        break;
      case pinballStates.COIN_NOT_INSERTED:
        console.log("transitioning to coinNotInserted state");
        this.state = this.coinNotInsertedState;
        break;
      case pinballStates.LEVER_PULLED:
        console.log("transitioning to leverPulled state");
        this.state = this.leverPulled;
        break;
      case pinballStates.WINNER:
        console.log("transitioning to winner state");
        this.state = this.winnerState;
        break;
      default:
        console.log("transitioning to soldOut state");
        this.state = this.soldOutState;
        break;
    }
  };

  getCandiesCount: () => number = () => this.candiesCount;
  setCandiesCount: (candiesCount: number) => void = (candiesCount: number) => {
    this.candiesCount = candiesCount;
  };

  insertCoin: () => void = () => {
    this.state.insertCoin();
  };

  ejectCoin: () => void = () => {
    this.state.ejectCoin();
  };

  // pullLever() is the one action that chains two state calls: the active
  // state's pullLever() decides (e.g. CoinInsertedState's random winner
  // check) which state to transition to, and deployCandy() is then invoked
  // on whatever the *new* active state is - so the actual candy dispensing
  // always happens in LeverPulledState or WinnerState, never in the state
  // that was active when the lever was pulled.
  pullLever: () => void = () => {
    this.state.pullLever();
    this.state.deployCandy(); //internal action
  };

  refill: (refillCandiesCount: number) => void = (
    refillCandiesCount: number,
  ) => {
    this.state.refill(refillCandiesCount);
  };
}
