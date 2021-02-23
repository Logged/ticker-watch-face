import { isMarketOpen, volumeParse, priceParse} from "../common/utils.js"

export default class TickerService {
  constructor(priceLabel, volumeLabel) {
    this.cache = null;
    this.priceLabel = priceLabel;
    this.volumeLabel = volumeLabel;
    this.priceLabel.text = "Loading...";
    this.setStockPriceDisplay = this.setStockPriceDisplay.bind(this);
    this.parse = this.parse.bind(this);
  }

  setStockPriceDisplay(callback) {
    this.priceLabel.text = "Loading...";
    this.volumeLabel.text = "";
    if (!isMarketOpen() && this.cache) {
      this.parse(this.cache);
    } else {
      callback();
    }
  };
  
  parse(data) {
    if (data) {
      this.priceLabel.text = priceParse(data.price);
      this.priceLabel.style.fill = data.color;
      this.volumeLabel.text = volumeParse(data.volume);
      this.volumeLabel.style.fill = data.color;
      this.cache = data;
    }
  };
}