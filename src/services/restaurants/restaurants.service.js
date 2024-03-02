import { mocks, mockImages } from "./mock";
import camelize from "camelize";

export const restaurentsService = (location) => {
  // return new Promise((resolve, reject) => {
  //   const mock = mocks[location];
  //   if (!mock) {
  //     reject("not found");
  //   }
  //   resolve(mock);
  // });
  return fetch(
    `http://10.0.2.2:5001/mealstogo-cffb9/us-central1/placesNearby?location=${location}`
  ).then((res) => {
    return res.json();
  });
};

export const restaurantTransform = ({ results = [] }) => {
  const mappedResult = results.map((restaurant) => {
    // restaurant.photos = restaurant.photos.map((p) => {
    //   return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];
    // });
    return {
      ...restaurant,
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
      address: restaurant.vicinity,
    };
  });
  return camelize(mappedResult);
};
