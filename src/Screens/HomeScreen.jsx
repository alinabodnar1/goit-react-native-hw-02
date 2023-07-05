import React from 'react';
import { Text } from "react-native";
import PostsScreen from './PostsScreen/PostsScreen';

export default function HomeScreen() {
  return (
    <div>
      <Text>
        This is Home page
        < PostsScreen/>
      </Text>
    </div>
  )
}
