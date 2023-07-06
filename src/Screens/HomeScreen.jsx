import React from "react";
import {  Pressable, Text, View } from "react-native";
import { Feather, AntDesign } from "@expo/vector-icons";
import PostsScreen from "./PostsScreen/PostsScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CreatePostsScreen from "./CreatePostsScreen/CreatePostsScreen";
import ProfileScreen from "./ProfileScreen/ProfileScreen";
import { commonStyles } from "../../src/commonStyles";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
  const Tabs = createBottomTabNavigator();
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1 }}>
      <Text>Home page</Text>
      <View style={commonStyles.tabNavigation}>
        <Tabs.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: () => {
              if (route.name === "PostsScreen") {
                return (
                  <Pressable onPress={() => navigation.navigate("PostsScreen")}>
                    <AntDesign name="appstore-o" size={24} color="#212121" />
                  </Pressable>
                );
              } else if (route.name === "CreatePostsScreen") {
                return (
                  <Pressable
                    style={commonStyles.plus}
                    onPress={() => navigation.navigate("CreatePostsScreen")}
                  >
                    <AntDesign name="plus" size={20} color="#FFFFFF" />
                  </Pressable>
                );
              } else if (route.name === "ProfileScreen") {
                return (
                  <Pressable
                    onPress={() => navigation.navigate("ProfileScreen")}
                  >
                    <Feather name="user" size={24} color="#212121" />
                  </Pressable>
                );
              }
            },
          })}
        >
          <Tabs.Screen
            name="PostsScreen"
            component={PostsScreen}
            options={{ headerShown: false }}
          />
          <Tabs.Screen
            name="CreatePostsScreen"
            component={CreatePostsScreen}
            options={{ headerShown: false }}
          />
          <Tabs.Screen
            name="ProfileScreen"
            component={ProfileScreen}
            options={{ headerShown: false }}
          />
        </Tabs.Navigator>
      </View>
    </View>
  );
}
