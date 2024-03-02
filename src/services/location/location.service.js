import camelize from "camelize";
// import { locations } from "./location.mock";

export const locationRequest = (searhTerm) => {
  // return new Promise((resolve, reject) => {
  //   const locationMock = locations[searhTerm];
  //   if (!locationMock) {
  //     reject("not found!");
  //   }
  //   resolve(locationMock);
  // });
  console.log(searhTerm);
  return fetch(
    `http://10.0.2.2:5001/mealstogo-cffb9/us-central1/geocode?city=${searhTerm}`
  )
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      console.log("ERROR", err);
    });
};

export const locationTransform = (result) => {
  const formattedResponse = camelize(result);
  const { geometry = {} } = formattedResponse.results[0];
  const { lng, lat } = geometry.location;

  return { lng, lat, viewport: geometry.viewport };
};
