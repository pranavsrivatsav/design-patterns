import { WingsFly } from "../behaviors/flying/implementations/WingsFlyImpl";
import { Squawk } from "../behaviors/squawking/implementations/SquawkImpl";
import { Duck } from "../Duck";

export class FlyingDuck extends Duck{
    constructor() {
        super(new WingsFly(), new Squawk());
    }
}