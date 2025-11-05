import { SquawkingInterface } from "../SquawkingInterface";

export class SqueakSquak implements SquawkingInterface {
  squawk = () => {
    console.log("It squeaks");
  };
}
