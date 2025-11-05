import { SquawkingInterface } from "../SquawkingInterface";

export class Squawk implements SquawkingInterface {
  squawk = () => {
    console.log("It squawks");
  };
}
