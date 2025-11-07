import { FlyingInterface } from "./behaviors/FlyingInterface";
import { SquawkingInterface } from "./behaviors/SquawkingInterface";

export class Duck {
    // Behaviours that can change across ducks - hence we use interfaces 
    // - and a type of duck can tag the respective behavior implementations
    // - that is relevant
    protected flyingBehavior: FlyingInterface;
    protected squawkingBehavior: SquawkingInterface;

    constructor(flyingBehavior: FlyingInterface, squawkingBehavior: SquawkingInterface) {
        this.flyingBehavior = flyingBehavior;
        this.squawkingBehavior = squawkingBehavior;
    }

    fly() {
        this.flyingBehavior.fly();
    }

    squawk() {
        this.squawkingBehavior.squawk();
    }

    // Universal behavior - is not expected to change - hence implementation in the super class
    private float() {
        console.log("It floats");
    }

    //setters of behaviors that will help us change the behavior of any duck during runtime if necessary
    setFlyingBehavior(flyingBehavior: FlyingInterface) {
        this.flyingBehavior = flyingBehavior;
    }

    setSquawkingBehavior(squawkingBehavior: SquawkingInterface) {
        this.squawkingBehavior = squawkingBehavior;
    }
}