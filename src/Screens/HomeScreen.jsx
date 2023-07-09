import React from "react";
import { Text, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import PostsScreen from "./PostsScreen/PostsScreen";
import CreatePostsScreen from "./CreatePostsScreen/CreatePostsScreen";
import ProfileScreen from "./ProfileScreen/ProfileScreen";
import { commonStyles } from "../../src/commonStyles";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

export default function HomeScreen() {
  const Tabs = createBottomTabNavigator();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home page</Text>
      <View style={commonStyles.tabNavigation}>
        <Tabs.Navigator
          initialRouteName={"Posts"}
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color }) => {
              let iconName;
              
              if (route.name === "Posts") {
                iconName = focused ? "grid" : "grid-outline";
              } else if (route.name === "CreatePosts") {
                iconName = "ios-person";
              } else if (route.name === "Profile") {
                iconName = focused ? "ios-add" : "ios-add-outline";
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
            tabStyle: { borderRadius: 100, paddingTop: 8, paddingBottom: 8 },
          }}
        >
          <Tabs.Screen name="Posts" component={PostsScreen} />
          <Tabs.Screen name="CreatePosts" component={CreatePostsScreen} />
          <Tabs.Screen name="Profile" component={ProfileScreen} />
        </Tabs.Navigator>
      </View>
    </View>
  );
}
