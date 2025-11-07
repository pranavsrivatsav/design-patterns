import { WingsFly } from "../behaviors/flying/WingsFlyImpl";
import { Squawk } from "../behaviors/squawking/SquawkImpl";
import { Duck } from "../../interfaces/Duck";

export class FlyingDuck extends Duck{
    constructor() {
        super(new WingsFly(), new Squawk());
    }
}