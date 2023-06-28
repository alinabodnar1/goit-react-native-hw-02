import React from "react";
import RegistrationScreen from "./src/Screens/RegistrationScreen";
import { useFonts } from "expo-font";
import LoginScreen from "./src/Screens/LoginScreen";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Light": require("./src/assets/fonts/Roboto-Light.ttf"),
  });
  const [RobotoMedium] = useFonts({
    "Roboto-Medium": require("./src/assets/fonts/Roboto-Medium.ttf"),
  });
  if (!fontsLoaded || !RobotoMedium) {
    return null;
  }

  return (
    // <RegistrationScreen />
    <LoginScreen />
  );
}
