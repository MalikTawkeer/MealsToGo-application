const { onRequest } = require("firebase-functions/v2/https");

const stripeClient = require("stripe")(
  "sk_test_51OpwmzSELkGDm8xULjFL3R7Iz7ly7zIaU5MSBDdYcsH1R19vhI1f1BVPTmguOyvincfTWnQ4kI0VIPZrFOyjreCm00jsePjvZ9"
);
const { geocodeRequest } = require("./geocode");
const { placesNearby } = require("./places");
const { payRequest } = require("./pay");

exports.geocode = onRequest((request, response) => {
  geocodeRequest(request, response);
});

exports.placesNearby = onRequest((request, response) => {
  placesNearby(request, response);
});

exports.pay = onRequest((request, response) => {
  payRequest(request, response, stripeClient);
});
