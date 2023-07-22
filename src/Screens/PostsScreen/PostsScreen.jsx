import React from "react";
import { EvilIcons } from "@expo/vector-icons";
import { View, Text, StyleSheet, Image } from "react-native";
import { commonStyles } from "../../commonStyles";

export default function PostsScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <View style={commonStyles.wrapper}>
        <View style={styles.person}>
          <Image style={styles.avatar} source={require("./img/avatar.jpg")} />
          <View style={styles.nameEmail}>
            <Text style={styles.name}>Natali Romanova</Text>
            <Text style={styles.email}>email@example.com</Text>
          </View>
        </View>

        <Image source={require("./img/publicationPhoto.jpg")} />
        <Text style={commonStyles.publicationTitle}>Ліс</Text>

        <View style={commonStyles.publicationInfo}>
          <EvilIcons name="comment" size={24} color="#BDBDBD" />
          <Text style={styles.commentsNumber}>0</Text>
          <EvilIcons
            name="location"
            size={28}
            style={commonStyles.locationIcon}
          />
          <Text style={commonStyles.location}>
            Ivano-Frankivs'k Region, Ukraine
          </Text>
        </View>
        <Image
          style={styles.nextPublication}
          source={require("./img/sunset.jpg")}
        />
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
    zIndex: 10,
  },
});
