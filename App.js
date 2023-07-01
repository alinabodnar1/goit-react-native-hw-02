import React from "react";
import 'react-native-gesture-handler';
import { useFonts } from "expo-font";
import RegistrationScreen from "./src/Screens/RegistrationScreen";
import LoginScreen from "./src/Screens/LoginScreen";
import Home from "./src/Screens/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import CreatePostsScreen from "./src/Screens/CreatePostsScreen/CreatePostsScreen";
import CommentsScreen from './src/Screens/CommentsScreen/CommentsScreen';
import ProfileScreen from "./src/Screens/ProfileScreen/ProfileScreen";
import PostsScreen from "./src/Screens/PostsScreen/PostsScreen";

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
    // <NavigationContainer>
    //   <MainStack.Navigator initialRouteName="Home">
    //     <MainStack.Screen name="Registration" component={RegistrationScreen} />
    //     <MainStack.Screen name="Login" component={LoginScreen} />
    //     <MainStack.Screen name="Home" component={Home} options={{ title: "Start screen" }}/>
    //   </MainStack.Navigator>
    // </NavigationContainer>
    // <RegistrationScreen />
    // <CreatePostsScreen />
    // <CommentsScreen />
    // <ProfileScreen />
    <PostsScreen />
  );
}
