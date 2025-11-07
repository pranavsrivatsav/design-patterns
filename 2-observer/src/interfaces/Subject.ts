import { Observer } from "./Observer";

export class Subject<T> {
    private registeredObservers: Observer<T>[] = [];
    
    registerObserver(observer: Observer<T>) {
        this.registeredObservers.push(observer);
        observer.register(this);
    }

    removeObserver(observer: Observer<T>) {
        const index = this.registeredObservers.findIndex((l) => l === observer);
        const observerToRemove = this.registeredObservers[index];
        observerToRemove.deregister();
        this.registeredObservers = [...this.registeredObservers.slice(0, index), ...this.registeredObservers.slice(index + 1)]; 
    }

    protected state: T;

    getState() {
        return this.state;
    }

    setState(state: T) {
        this.state = state;

        // update all observers
        for(let o of this.registeredObservers) {
            o.update();
        }
    }

    constructor(state: T) {
        this.state = state;
    }

}