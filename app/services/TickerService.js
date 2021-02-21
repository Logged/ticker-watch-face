import { isMarketOpen } from "../common/utils.js"

export default class TickerService {
  constructor(displayLabel) {
    this.cache = null;
    this.displayLabel = displayLabel;
    this.displayLabel.text = "Loading...";
    this.setStockPriceDisplay = this.setStockPriceDisplay.bind(this);
    this.parse = this.parse.bind(this);
  }

  setStockPriceDisplay(callback) {
    this.displayLabel.text = "Loading...";
    if (!isMarketOpen() && this.cache) {
      this.parse(this.cache);
    } else {
      callback();
    }
  };
  
  parse(data) {
    if (data) {
      this.displayLabel.text = data.price;
      this.displayLabel.style.fill = data.color;
      this.cache = data;
    }
  };
}