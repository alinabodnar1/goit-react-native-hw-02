import React from "react";
import "react-native-gesture-handler";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import RegistrationScreen from "./src/Screens/RegistrationScreen";
import LoginScreen from "./src/Screens/LoginScreen";
import HomeScreen from "./src/Screens/HomeScreen";
import CreatePostsScreen from "./src/Screens/CreatePostsScreen/CreatePostsScreen";
// import CreatePostsScreen from "./src/Screens/CreatePostsScreen/CreatePostsScreen";
// import CommentsScreen from "./src/Screens/CommentsScreen/CommentsScreen";
// import ProfileScreen from "./src/Screens/ProfileScreen/ProfileScreen";
// import PostsScreen from "./src/Screens/PostsScreen/PostsScreen";
// import PostsScreenWithoutContent from "./src/Screens/PostsScreen/PostsScreenWithoutContent";
// import Location from "./src/Screens/location";

const MainStack = createStackNavigator();

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
    <NavigationContainer>
      <MainStack.Navigator>
        <MainStack.Screen
          name="Registration"
          component={RegistrationScreen}
          options={{headerShown: false }}
        />
        <MainStack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        >
        </MainStack.Screen>
      </MainStack.Navigator>
    </NavigationContainer>
  );
}
