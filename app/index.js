import clock from "clock";
import document from "document";
import { setDateDisplay, setHeartRateDisplay, setTimeDisplay, setStockPriceDisplay } from "../services"



const timeLabel = document.getElementById("timeLabel");
const dateLabel = document.getElementById("dateLabel");
const heartRateLabel = document.getElementById("heartRateLabel");
const stockPriceLabel = document.getElementById("stockPriceLabel");

clock.granularity = "seconds";

setStockPriceDisplay(stockPriceLabel);
setHeartRateDisplay(heartRateLabel);

clock.ontick = (evt) => {
  setTimeDisplay(timeLabel, evt);
  setDateDisplay(dateLabel, evt);
}