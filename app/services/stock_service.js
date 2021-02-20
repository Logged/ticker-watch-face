import { display } from "display";
import * as messaging from "messaging";

export default function setStockPriceDisplay(displayLabel) {
  displayLabel.text = "Loading...";

  display.addEventListener("change", () => {
      if (display.on) {
        displayLabel.text = "Loading...";
        messaging.peerSocket.send("");
      }
  });
}