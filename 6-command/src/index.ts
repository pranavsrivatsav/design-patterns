import { CeilingFanOffCommand } from "./Commands/CeilingFanOffCommand";
import { CeilingFanOnCommand } from "./Commands/CeilingFanOnCommand";
import { GarageDoorCloseCommand } from "./Commands/GarageDoorCloseCommand";
import { GarageDoorOpenCommand } from "./Commands/GarageDoorOpenCommand";
import { LightOffCommand } from "./Commands/LightOffCommand";
import { LightOnCommand } from "./Commands/LightOnCommand";
import { StereoOffCommand } from "./Commands/StereoOffCommand";
import { StereoOnCommand } from "./Commands/StereoOnCommand";
import { CeilingFan } from "./Receivers/CeilingFan";
import { GarageDoor } from "./Receivers/GarageDoor";
import { Light } from "./Receivers/Light";
import { Stereo } from "./Receivers/Stereo";
import { RemoteControl } from "./RemoteControl";

const remoteControl = new RemoteControl();

const light = new Light();
const ceilingFan = new CeilingFan();
const garageDoor = new GarageDoor();
const stereo = new Stereo();

const lightOnCommand = new LightOnCommand(light);
const lightOffCommand = new LightOffCommand(light);

const ceilingFanOnCommand = new CeilingFanOnCommand(ceilingFan);
const ceilingFanOffCommand = new CeilingFanOffCommand(ceilingFan);

const garageDoorOpenCommand = new GarageDoorOpenCommand(garageDoor);
const garageDoorCloseCommand = new GarageDoorCloseCommand(garageDoor);

const stereoOnCommand = new StereoOnCommand(stereo);
const stereoOffCommand = new StereoOffCommand(stereo);

remoteControl.setOnCommands([lightOnCommand, ceilingFanOnCommand, garageDoorOpenCommand, stereoOnCommand]);
remoteControl.setOffCommands([lightOffCommand, ceilingFanOffCommand, garageDoorCloseCommand, stereoOffCommand]);

console.log(remoteControl);

remoteControl.pressOnButton(0);
remoteControl.pressOffButton(0);
remoteControl.pressOnButton(3);

console.log(remoteControl);

remoteControl.pressUndoButton();
remoteControl.pressUndoButton();
remoteControl.pressUndoButton();

console.log(remoteControl);
