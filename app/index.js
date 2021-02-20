import clock from "clock";
import document from "document";
import * as messaging from "messaging";
import { setDateDisplay, setHeartRateDisplay, setTimeDisplay, setStockPriceDisplay } from "./services"



const timeLabel = document.getElementById("timeLabel");
const dateLabel = document.getElementById("dateLabel");
const heartRateLabel = document.getElementById("heartRateLabel");
const stockPriceLabel = document.getElementById("stockPriceLabel");

clock.granularity = "seconds";

setHeartRateDisplay(heartRateLabel);
setStockPriceDisplay(stockPriceLabel);

clock.ontick = (evt) => {
  setTimeDisplay(timeLabel, evt);
  setDateDisplay(dateLabel, evt);
}

messaging.peerSocket.onmessage = (evt) => {
  if (evt.data) {
    stockPriceLabel.text = evt.data.price;
    stockPriceLabel.style.fill = evt.data.color;
  }
};