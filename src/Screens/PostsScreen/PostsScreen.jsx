import React from "react";
import { Feather, EvilIcons, AntDesign } from "@expo/vector-icons";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable
} from "react-native";
import { commonStyles } from "../../commonStyles";

export default function PostsScreen() {
  return (
        <View style={{flex: 1}}>
          <View style={commonStyles.header}>
            <Text style={commonStyles.headerTitle}>Публікації</Text>
            <Image style={styles.arrow} source={require("./img/log-out.png")} />
          </View>

          <View style={styles.main}>
            <View style={styles.wrapper}>
              <Image
                style={styles.avatar}
                source={require("./img/avatar.jpg")}
              />
              <View style={styles.nameEmail}>
                <Text style={styles.name}>Natali Romanova</Text>
                <Text style={styles.email}>email@example.com</Text>
              </View>
            </View>

            <Image source={require("./img/publicationPhoto.jpg")} />
            <Text style={styles.publicationTitle}>Ліс</Text>

            <View style={styles.publicationInfo}>
              <EvilIcons name="comment" size={24} color="#BDBDBD" />
              <Text style={styles.commentsNumber}>0</Text>
              <EvilIcons
                name="location"
                size={24}
                style={styles.locationIcon}
              />
              <Text style={styles.location}>
                Ivano-Frankivs'k Region, Ukraine
              </Text>
            </View>
        <Image style={styles.nextPublication} source={require("./img/sunset.jpg")} />
      </View>
      {/* tabNavigation */}
        <View style={styles.tabNavigation}>
          <AntDesign name="appstore-o" size={24} color="#212121" />
          <Pressable style={styles.plus}>
              <AntDesign name="plus" size={20} color="#FFFFFF" />
          </Pressable>
          <Feather name="user" size={24} color="#212121" />
          </View>    
        </View>
  );
}
const styles = StyleSheet.create({
  arrow: {
    position: "absolute",
    bottom: 9,
    right: 16,
  },
  main: {
    paddingLeft: 24,
    paddingRight: 24,
  },
  wrapper: {
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
  publicationTitle: {
    fontWeight: "bold",
    marginTop: 8,
    marginBottom: 8,
    color: "#212121",
  },
  publicationInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 34,
  },
  commentsNumber: {
    color: "#BDBDBD",
    marginRight: 45,
  },

  locationIcon: {
    color: "#BDBDBD",
  },
  location: {
    ...commonStyles.font,
    color: "#212121",

    textDecorationLine: "underline",
  },
  nextPublication: {
    overflow: "hidden",
    zIndex: 1,
  },
  tabNavigation: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'space-evenly',
    position: "absolute",
    bottom: 0,
    left: 0,
    minWidth: 390,
    backgroundColor: '#FFFFFF',
    marginLeft: 'auto',
   marginRight: 'auto',
    zIndex: 11,
    borderTopWidth: 0.5,
    borderColor: '#212121',
    paddingTop: 10,
    paddingBottom: 44,
  },
  plus: {
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    paddingBottom: 10,
    paddingTop: 10,
    paddingLeft: 25,
    paddingRight: 25,
  },
});
