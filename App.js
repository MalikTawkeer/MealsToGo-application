import React, { useEffect } from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";

import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";

import { Navigation } from "./src/infrastructure/navigation/";

import { ReastaurantsContextProvider } from "./src/services/restaurants/restaurants.context";
import { LocationContextProvider } from "./src/services/location/location.context";
import { FavouritesContextProvider } from "./src/services/favourites/favourites.context";

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

const auth = getAuth(app);

export default function App() {
  useEffect(() => {
    signInWithEmailAndPassword(auth, "malik1@gmail.com", "malik1@gmail.com")
      .then((user) => {
        console.log(user);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
  });
  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <FavouritesContextProvider>
          <LocationContextProvider>
            <ReastaurantsContextProvider>
              <Navigation />
            </ReastaurantsContextProvider>
          </LocationContextProvider>
        </FavouritesContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
