const locations = require("../../data/locations.json");
const itineraries = require("../../data/itineraries.json");

export default function request(url) {
  return new Promise((resolve, reject) => {
    if (url === "/locations") resolve(locations);
    if (url === "/itineraries") resolve(itineraries);
    reject("invalid URL");
  });
}
