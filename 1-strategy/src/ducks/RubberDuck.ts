import { NoFly } from "../behaviors/flying/implementations/NoFlyImpl";
import { SqueakSquak } from "../behaviors/squawking/implementations/SqueakSquawkImpl";
import { Duck } from "../Duck";

class RubberDuck extends Duck {
    constructor() {
        super(new NoFly(), new SqueakSquak());
    }
}