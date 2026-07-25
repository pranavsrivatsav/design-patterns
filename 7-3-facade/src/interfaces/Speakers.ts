export interface Speakers {
  powerOn(): void;
  powerOff(): void;
  setVolume(level: number): void;
  mute(): void;
}
