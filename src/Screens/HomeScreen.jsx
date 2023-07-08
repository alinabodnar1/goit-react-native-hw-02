import React from "react";
import { Text, View } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
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
          initialRouteName={"Home"}
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === "PostsScreen") {
                iconName = focused ? 'grid' : 'grid-outline';
                // return (
                //   <Pressable onPress={() => navigation.navigate("PostsScreen")}>
                //     <AntDesign name="appstore-o" size={24} color="#212121" />
                //   </Pressable>
                // );
              } else if (route.name === "CreatePostsScreen") {
                iconName = "ios-person";
              
                // return (
                  // <Pressable
                  //   style={commonStyles.plus}
                  //   onPress={() => navigation.navigate("CreatePostsScreen")}
                  // >
                  //   <AntDesign name="plus" size={20} color="#FFFFFF" />
                  // </Pressable>
                // );
              } else if (route.name === "ProfileScreen") {
                iconName = focused ? 'ios-add' : 'ios-add-outline';
                // return (
                //   <Pressable
                //     onPress={() => navigation.navigate("ProfileScreen")}
                //   >
                //     <Feather name="user" size={24} color="#212121" />
                //   </Pressable>
                // );
              }
              return <Ionicons name={iconName} size={24} color={color} />
            },
          })}
          tabBarOptions={{
            activeTintColor: "#FF6C00",
            inactiveTintColor: "gray",
            showLabel: false,
        style: { paddingTop: 20 },
            activeBackgroundColor: '#FF6C00',
            labelStyle: { borderRadius: 100 },
          }}
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
