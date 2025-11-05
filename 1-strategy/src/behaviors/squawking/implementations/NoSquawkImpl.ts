import { SquawkingInterface } from "../SquawkingInterface";

export class NoSquawk implements SquawkingInterface {
  squawk = () => {
    console.log("Does not squawk");
  };
}
