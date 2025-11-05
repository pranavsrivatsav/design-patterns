import { FlyingInterface } from "../FlyingInterface";

export class NoFly implements FlyingInterface {
    fly = () => {
        console.log('does not fly');
    }
}