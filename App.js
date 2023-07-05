import React from "react";
import "react-native-gesture-handler";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import RegistrationScreen from "./src/Screens/RegistrationScreen";
import LoginScreen from "./src/Screens/LoginScreen";
import HomeScreen from "./src/Screens/HomeScreen";
import CreatePostsScreen from "./src/Screens/CreatePostsScreen/CreatePostsScreen";
import CommentsScreen from "./src/Screens/CommentsScreen/CommentsScreen";
import ProfileScreen from "./src/Screens/ProfileScreen/ProfileScreen";
import PostsScreen from "./src/Screens/PostsScreen/PostsScreen";
import PostsScreenWithoutContent from "./src/Screens/PostsScreen/PostsScreenWithoutContent";

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
      <MainStack.Navigator initialRouteName="Registration">
        <MainStack.Screen
          name="Registration"
          component={RegistrationScreen}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <MainStack.Screen name="CreatePosts" component={CreatePostsScreen} />
        <MainStack.Screen name="Profile" component={ProfileScreen} />
        <MainStack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        >
          <Tabs.Navigator>
            <Tabs.Screen name="Posts" component={PostsScreen} />
            <Tabs.Screen name="CreatePosts" component={CreatePostsScreen} />
            <Tabs.Screen
              name="Profile"
              component={ProfileScreen}
              options={{ headerShown: false }}
            />
          </Tabs.Navigator>
        </MainStack.Screen>
        {/* <MainStack.Screen name="PostsWithoutContent" component={PostsScreenWithoutContent}></MainStack.Screen> */}
        {/* <MainStack.Screen name="Comments" component={CommentsScreen} /> */}
      </MainStack.Navigator>
    </NavigationContainer>
  );
}
