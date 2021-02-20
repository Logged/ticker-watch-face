import { preferences } from "user-settings";
import * as util from "../common/utils";

export default function setTimeDisplay(displayLabel, evt) {
  let today = evt.date;
  let hours = today.getHours();

  if (preferences.clockDisplay === "12h") {
    hours = hours % 12 || 12;
  } else {
    hours = util.zeroPad(hours);
  }

  let minutes = util.zeroPad(today.getMinutes());
  let seconds = util.zeroPad(today.getSeconds());

  displayLabel.text = `${hours}:${minutes}:${seconds}`;
}