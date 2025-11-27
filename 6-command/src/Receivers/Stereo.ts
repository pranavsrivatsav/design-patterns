export class Stereo {
  private isCDloaded: boolean = false;
  private volume: number = 0;

  on(): void {
    console.log("Stereo is on");
  }

  off(): void {
    console.log("Stereo is off");
  }

  loadCD(): void {
    console.log("CD loaded into stereo");
    this.isCDloaded = true;
  }

  unloadCD(): void {
    console.log("CD unloaded from stereo");
    this.isCDloaded = false;
  }

  setVolume(volume: number): void {
    console.log(`Setting stereo volume to ${volume}`);
    this.volume = volume;
  }

  getVolume(): number {
    console.log(`Current stereo volume is ${this.volume}`);
    return this.volume;
  }
}

