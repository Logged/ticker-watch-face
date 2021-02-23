import clock from "clock";
import document from "document";
import { display } from "display";
import * as messaging from "messaging";
import TickerService from "./services/TickerService.js";
import { setDateDisplay, setHeartRateDisplay, setTimeDisplay } from "./services"

const timeLabel = document.getElementById("timeLabel");
const dateLabel = document.getElementById("dateLabel");
const heartRateLabel = document.getElementById("heartRateLabel");
const stockPriceLabel = document.getElementById("stockPriceLabel");
const stockVolumeLabel = document.getElementById("stockVolumeLabel");

const ts = new TickerService(stockPriceLabel, stockVolumeLabel);

clock.granularity = "seconds";
setHeartRateDisplay(heartRateLabel);

clock.ontick = (evt) => {
  setTimeDisplay(timeLabel, evt);
  setDateDisplay(dateLabel, evt);
};

display.onchange = () => {
  if (display.on) {
    ts.setStockPriceDisplay(()=>{messaging.peerSocket.send("")});
  }
};

messaging.peerSocket.onmessage = (evt) => {
  ts.parse(evt.data);
};