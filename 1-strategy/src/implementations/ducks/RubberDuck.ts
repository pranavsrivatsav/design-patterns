import { NoFly } from "../behaviors/flying/NoFlyImpl";
import { SqueakSquak } from "../behaviors/squawking/SqueakSquawkImpl";
import { Duck } from "../../interfaces/Duck";

class RubberDuck extends Duck {
    constructor() {
        super(new NoFly(), new SqueakSquak());
    }
}