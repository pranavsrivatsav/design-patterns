import { SquawkingInterface } from "../../../interfaces/behaviors/SquawkingInterface";

export class NoSquawk implements SquawkingInterface {
  squawk = () => {
    console.log("Does not squawk");
  };
}
