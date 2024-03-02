const { locations: locationMocks } = require("./geocode.mock.js");
const url = require("url");

module.exports.geocodeRequest = (request, response) => {
  const { city } = url.parse(request.url, true).query;
  const locationMock = locationMocks[city.toLowerCase()];
  response.json(locationMock);
};

