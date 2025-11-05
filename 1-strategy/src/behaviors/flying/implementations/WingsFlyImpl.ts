import { FlyingInterface } from "../FlyingInterface";

export class WingsFly implements FlyingInterface {
    fly = () => {
        console.log("flying with wings");
    }
}