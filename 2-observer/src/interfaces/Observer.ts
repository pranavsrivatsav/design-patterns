import { Subject } from "./Subject";

export abstract class Observer<T> {
  protected registeredSubject: Subject<T> | null = null;

  deregister(): void {
    this.registeredSubject = null;
  }

  register(subject: Subject<T>): void {
    this.registeredSubject = subject;
    this.update();
  }

  abstract update(): void;
}
