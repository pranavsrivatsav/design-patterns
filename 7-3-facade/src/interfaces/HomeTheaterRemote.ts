import { Lights } from "./Lights";
import { PopcornMaker } from "./PopcornMaker";
import { Projector } from "./Projector";
import { Screen } from "./Screen";
import { Speakers } from "./Speakers";
export class HomeTheaterRemote {
  private lights: Lights;
  private popcornMaker: PopcornMaker;
  private projector: Projector;
  private screen: Screen;
  private speakers: Speakers;

  constructor(
    lights: Lights,
    popcornMaker: PopcornMaker,
    projector: Projector,
    screen: Screen,
    speakers: Speakers,
  ) {
    this.lights = lights;
    this.popcornMaker = popcornMaker;
    this.projector = projector;
    this.screen = screen;
    this.speakers = speakers;
  }

  playMovie() {
    console.log("\n--- Playing movie ---");
    this.lights.turnOff();
    this.screen.lower();
    this.projector.on();
    this.speakers.powerOn();
    this.speakers.setVolume(50);
    this.popcornMaker.on();
    console.log("\n");
  }

  stopMovie() {
    console.log("\n--- Stopping movie ---");
    this.lights.turnOn();
    this.projector.off();
    this.screen.raise();
    this.speakers.powerOff();
    this.popcornMaker.off();
    console.log("\n");
  }
}
