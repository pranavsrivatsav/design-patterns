import { FlyingInterface } from "../../../interfaces/behaviors/FlyingInterface";

export class WingsFly implements FlyingInterface {
    fly = () => {
        console.log("flying with wings");
    }
}