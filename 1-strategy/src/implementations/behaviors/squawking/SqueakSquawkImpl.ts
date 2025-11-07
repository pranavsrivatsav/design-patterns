import { SquawkingInterface } from "../../../interfaces/behaviors/SquawkingInterface";

export class SqueakSquak implements SquawkingInterface {
  squawk = () => {
    console.log("It squeaks");
  };
}
