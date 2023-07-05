import React from "react";
import "react-native-gesture-handler";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import RegistrationScreen from "./src/Screens/RegistrationScreen";
import LoginScreen from "./src/Screens/LoginScreen";
import HomeScreen from "./src/Screens/HomeScreen";
import CreatePostsScreen from "./src/Screens/CreatePostsScreen/CreatePostsScreen";
import CommentsScreen from "./src/Screens/CommentsScreen/CommentsScreen";
import ProfileScreen from "./src/Screens/ProfileScreen/ProfileScreen";
import PostsScreen from "./src/Screens/PostsScreen/PostsScreen";
import PostsScreenWithoutContent from "./src/Screens/PostsScreen/PostsScreenWithoutContent";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const MainStack = createStackNavigator();
const Tabs = createBottomTabNavigator();

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
      <MainStack.Navigator initialRouteName="Login">
        <MainStack.Screen name="Registration" component={RegistrationScreen} />
        <MainStack.Screen name="Login" component={LoginScreen} />
        <MainStack.Screen name="Home" component={HomeScreen} />
        <MainStack.Screen name="CreatePosts" component={CreatePostsScreen} />
        <MainStack.Screen name="Profile" component={ProfileScreen} />
        {/* <MainStack.Screen name="PostsWithoutContent" component={PostsScreenWithoutContent}>
          <Tabs.Navigator>
            <Tabs.Screen name="Posts" component={PostsScreen} />
            <Tabs.Screen name="CreatePosts" component={CreatePostsScreen} />
            <Tabs.Screen name="Profile" component={ProfileScreen} />
          </Tabs.Navigator>
        </MainStack.Screen> */}
        <MainStack.Screen name="Comments" component={CommentsScreen} />
      </MainStack.Navigator>
    </NavigationContainer>
    // <PostsScreenWithoutContent />
  );
}
