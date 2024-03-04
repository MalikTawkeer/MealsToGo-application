import stripeClient from "stripe-client";

const stripe = stripeClient(
  "pk_test_51OpwmzSELkGDm8xU5Ata7tkTrSN7E3uiVeAlstd4aOtEqwggIA4T5dSFmvfuQCU8nWVb2leG1npvTJ8NrlfbeV3A00paqjY88b"
);

export const cardTokenRequest = (card) => stripe.createToken({ card });

export const payRequest = (token, amount, name) => {
  console.log("kk");
  return fetch("http://10.0.2.2:5001/mealstogo-cffb9/us-central1/pay", {
    body: JSON.stringify({
      token,
      name,
      amount,
    }),
    method: "POST",
  }).then((res) => {
    if (res.status > 200) {
      return Promise.reject("somthing went wrong processing payment");
    }
    return res.json();
  });
};
