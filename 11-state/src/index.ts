// STATE PATTERN
//
// Lets an object alter its behavior when its internal state changes, so it
// appears to change its class. Rather than one class full of conditionals
// checking "what state am I in", each state's behavior lives in its own
// class implementing a shared interface, and the context simply delegates
// every state-dependent call to whichever state object is currently active.
//
// How this example simulates it:
// - interfaces/PinballMachineState.ts - the "State" role: the shared
//     interface (insertCoin, ejectCoin, pullLever, deployCandy, refill)
//     every concrete state must implement.
// - interfaces/PinballMachine.ts     - the "Context" role: holds a
//     reference to the currently active state and forwards each public
//     action straight to it. It eagerly constructs one instance of every
//     concrete state up front and swaps between those same instances via
//     setState() instead of creating a new one on each transition.
// - implementations/SoldOutState.ts       - "Concrete State" for when
//     there's no candy left; every action fails except refill(), which
//     restocks and transitions to CoinNotInsertedState.
// - implementations/CoinNotInsertedState.ts - "Concrete State" for the idle
//     state; insertCoin() is the only action that transitions (to
//     CoinInsertedState) - refill() just tops up candiesCount in place.
// - implementations/CoinInsertedState.ts  - "Concrete State" once a coin is
//     in; pullLever() is where the machine's randomness lives, branching to
//     either WinnerState or LeverPulledState, and ejectCoin() backs out to
//     CoinNotInsertedState.
// - implementations/LeverPulledState.ts   - "Concrete State" for the
//     mid-dispense moment; every player-facing action is blocked except
//     deployCandy(), which PinballMachine calls internally right after
//     pullLever() (see PinballMachine.pullLever() below) to decrement
//     candiesCount and transition onward.
// - implementations/WinnerState.ts        - "Concrete State" mirroring
//     LeverPulledState's deployCandy(), but dispensing two candies instead
//     of one - the pattern's reward-path branch.
// - index.ts (this file)     - the client. It only ever calls
//     PinballMachine's public methods; it never touches a state class
//     directly, and what each call actually does - and whether it
//     transitions anywhere - is entirely decided by whichever state object
//     is currently active.
import { PinballMachine } from "./interfaces/PinballMachine";

const pinball = new PinballMachine();
pinball.insertCoin();
pinball.pullLever();
pinball.ejectCoin();
pinball.refill(10);
pinball.insertCoin();
pinball.pullLever();
pinball.insertCoin();
pinball.ejectCoin();
