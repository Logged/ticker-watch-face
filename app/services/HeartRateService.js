import { HeartRateSensor } from "heart-rate";
import { me as appbit } from "appbit";
import { display } from "display";

export default function setHeartRateDisplay(displayLabel) {
  if (HeartRateSensor && appbit.permissions.granted("access_heart_rate")) {
    const hrm = new HeartRateSensor();
    
    hrm.addEventListener("reading", () => {
      displayLabel.text = "\u2665 " + `${hrm.heartRate}`;
    });
    
    display.addEventListener("change", () => {
      display.on ? hrm.start() : hrm.stop();
    });

    hrm.start();
  }
}