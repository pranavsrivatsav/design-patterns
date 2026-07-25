export interface Projector {
  on(): void;
  off(): void;
  setInput(source: string): void;
  setVolume(level: number): void;
}
