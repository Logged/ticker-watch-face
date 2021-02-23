import { me } from "companion";
import * as messaging from "messaging";
import { props } from "./properties.js"

function fetchStockPrice() {
  fetch(props.url)
  .then(function (response) {
      response.json()
      .then(function(data) {
        let stockData = parseResponse(data);
        returnStockData(stockData);
      });
  })
  .catch(function (err) {
    console.error(`Error fetching weather: ${err}`);
  });
}

function parseResponse(data) {
  let currentPrice = data["latestPrice"];
  let open = data["previousClose"];
  let volume = data["latestVolume"];
  return {
    price: currentPrice,
    volume: volume,
    color: (open>currentPrice) ? "red" : "green"
  }
}

function returnStockData(data) {
  if (messaging.peerSocket.readyState === messaging.peerSocket.OPEN) {
    messaging.peerSocket.send(data);
  } else {
    console.error("Error: Connection is not open");
  }
}

messaging.peerSocket.onmessage = (evt) => {
  fetchStockPrice();
};

messaging.peerSocket.onopen = (evt) => {
  fetchStockPrice();
};