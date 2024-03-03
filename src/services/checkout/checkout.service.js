import stripeClient from "stripe-client";

const stripe = stripeClient(
  "pk_test_51OpwmzSELkGDm8xU5Ata7tkTrSN7E3uiVeAlstd4aOtEqwggIA4T5dSFmvfuQCU8nWVb2leG1npvTJ8NrlfbeV3A00paqjY88b"
);

export const cardTokenRequest = (card) => stripe.createToken({ card });
