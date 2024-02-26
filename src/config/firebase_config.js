import { initializeApp } from "firebase/app";

import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpgg5HzLYhaTLk1n3DdqmH4NCqxEX42f8",
  authDomain: "mealstogo-cffb9.firebaseapp.com",
  projectId: "mealstogo-cffb9",
  storageBucket: "mealstogo-cffb9.appspot.com",
  messagingSenderId: "363080267891",
  appId: "1:363080267891:web:6b665c9f15c87613175206",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

export { app, auth };
