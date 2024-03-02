const { mocks, addMockImage } = require("./mock");
const url = require("url");

module.exports.placesNearby = (req, res) => {
  const { location } = url.parse(req.url, true).query;
  const data = mocks[location];
  if (data) {
    data.results = data.results.map(addMockImage);
  }
  res.json(data);
};
