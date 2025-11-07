import { FlyingInterface } from "../../../interfaces/behaviors/FlyingInterface";

export class NoFly implements FlyingInterface {
    fly = () => {
        console.log('does not fly');
    }
}