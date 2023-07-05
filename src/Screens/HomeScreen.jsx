import React from "react";
import { Text } from "react-native";
import PostsScreen from "./PostsScreen/PostsScreen";

export default function HomeScreen() {
  return (
    <View style={{ flex: 1 }}>
      <Text>
        This is Home page
        <PostsScreen />
      </Text>
    </View>
  );
}
