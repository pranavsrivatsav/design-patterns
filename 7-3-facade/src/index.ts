//TODO: Implement the facade design pattern
// Scenario: Home theatre facade that simplifies the usage of multiple components like light, stereo, projector, popcorn maker, etc.

import { AcmePopcornMaker } from "./implementations/AcmePopcornMaker";
import { BoseSpeakers } from "./implementations/BoseSpeakers";
import { ElectricScreen } from "./implementations/ElectricScreen";
import { LivingRoomLights } from "./implementations/LivingRoomLights";
import { SonyProjector } from "./implementations/SonyProjector";
import { HomeTheaterRemote } from "./interfaces/HomeTheaterRemote";

// using a single interface.
const popcornMaker = new AcmePopcornMaker();
const speakers = new BoseSpeakers();
const screen = new ElectricScreen();
const lights = new LivingRoomLights();
const projector = new SonyProjector();

const customHomeTheater = new HomeTheaterRemote(
  lights,
  popcornMaker,
  projector,
  screen,
  speakers,
);

customHomeTheater.playMovie();
customHomeTheater.stopMovie();
