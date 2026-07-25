export interface Lights {
  turnOn(): void;
  turnOff(): void;
  dim(level: number): void;
}
