import React from "react";
import {
  NativeBaseProvider,
  extendTheme,
  Text,
  Box,
  Button,
  Heading,
} from "native-base";

import LoginScreen from "./src/Screens/LoginScreen";
import AppButton from "./src/Components/AppButton";
import SignUpScreen from "./src/Screens/SignUpScreen";
import WelcomeScreen from "./src/Screens/WelcomeScreen";
import FeedScreen from "./src/Screens/FeedScreen";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AppNavigator from "./src/Navigations/AppNavigator";

const newColorTheme = {
  brand: {
    900: "#8287af",
    800: "#7c83db",
    700: "#b3bef6",
  },
};
const theme = extendTheme({ colors: newColorTheme });

export default function App() {
  const isAuthenticated = false;
  return (
    <NavigationContainer>
      <NativeBaseProvider theme={theme}>
        {isAuthenticated ? <AppNavigator /> : <FeedScreen />}
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
