import { SquawkingInterface } from "../../../interfaces/behaviors/SquawkingInterface";

export class Squawk implements SquawkingInterface {
  squawk = () => {
    console.log("It squawks");
  };
}
