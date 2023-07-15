import React from "react";
import { Text, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import PostsScreen from "./PostsScreen/PostsScreen";
import CreatePostsScreen from "./CreatePostsScreen/CreatePostsScreen";
import ProfileScreen from "./ProfileScreen/ProfileScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

export default function HomeScreen() {
  const Tabs = createBottomTabNavigator();

  return (
    <Tabs.Navigator
      initialRouteName={"Posts"}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let iconName;

          if (route.name === "Posts") {
            iconName = focused ? "grid" : "grid-outline";
          } else if (route.name === "CreatePosts") {
              iconName = focused ? "ios-add" : "ios-add-outline";
          } else if (route.name === "Profile") {
            iconName = "ios-person";
          }
          return <Ionicons name={iconName} size={24} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "#FFFFFF",
        activeBackgroundColor: "#FF6C00",
        inactiveBackgroundColor: "#FFFFFF",
        inactiveTintColor: "gray",
        showLabel: false,
        tabStyle: {
          borderRadius: 100,
        },
        style: {
          height: "70px",
        }, 
      }}
    >
      <Tabs.Screen
        name="Posts"
        component={PostsScreen}
        options={{ headerShown: false }}
      />
      <Tabs.Screen
        name="CreatePosts"
        component={CreatePostsScreen}
        options={{ headerShown: false, tabBarStyle: { display: 'none' } }}
        
       />
      <Tabs.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
    </Tabs.Navigator>
  );
}
