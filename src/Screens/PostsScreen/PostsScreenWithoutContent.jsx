import React from "react";
import { Feather, EvilIcons, AntDesign } from "@expo/vector-icons";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { commonStyles } from "../../commonStyles";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";

export default function PostsScreenWithoutContent() {
  const Tabs = createBottomTabNavigator();
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1 }}>
      <View style={commonStyles.header}>
        <Text style={commonStyles.headerTitle}>Публікації</Text>
        <Image style={styles.logout} source={require("./img/log-out.png")} />
      </View>

      <View style={commonStyles.wrapper}>
        <View style={styles.person}>
          <Image style={styles.avatar} source={require("./img/avatar.jpg")} />
          <View style={styles.nameEmail}>
            <Text style={styles.name}>Natali Romanova</Text>
            <Text style={styles.email}>email@example.com</Text>
          </View>
        </View>
      </View>
      {/* tabNavigation */}
      <View style={commonStyles.tabNavigation}>
        <Pressable onPress={() => navigation.navigate("PostsScreen")}>
          <AntDesign name="appstore-o" size={24} color="#212121" />
        </Pressable>
        <Pressable
          style={commonStyles.plus}
          onPress={() => navigation.navigate("CreatePostsScreen")}
        >
          <AntDesign name="plus" size={20} color="#FFFFFF" />
        </Pressable>
        <Pressable onPress={() => navigation.navigate("ProfileScreen")}>
          <Feather name="user" size={24} color="#212121" />
        </Pressable>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  logout: {
    position: "absolute",
    bottom: 9,
    right: 16,
  },
  person: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 32,
    marginBottom: 32,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 16,
  },
  nameEmail: {
    marginLeft: 8,
  },
  name: {
    ...commonStyles.font,
    fontSize: 13,
    fontWeight: "bold",
  },
  email: {
    fontSize: 11,
    color: "#212121",
  },
  commentsNumber: {
    ...commonStyles.commentsNumber,
    marginRight: 45,
  },
  nextPublication: {
    overflow: "hidden",
    zIndex: 1,
  },
});
