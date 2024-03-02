const { onRequest } = require("firebase-functions/v2/https");

const { geocodeRequest } = require("./geocode");
const { placesNearby } = require("./places");

exports.geocode = onRequest((request, response) => {
  geocodeRequest(request, response);
});

exports.placesNearby = onRequest((request, response) => {
  placesNearby(request, response);
});
