import React from "react";
import {
  SimpleLineIcons,
  EvilIcons,
} from "@expo/vector-icons";
import background from "../../images/background.jpg";
import {
  View,
  Text,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  ImageBackground,
} from "react-native";
import { commonStyles } from "../../commonStyles";

export default function ProfileScreen() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{ flex: 1 }}>
          <ImageBackground
            source={background}
            resizeMode="cover"
            style={commonStyles.image}
          >
            <View style={styles.profileWrapper}>
              <Image
                style={styles.changeUser}
                source={require("./img/add.png")}
              />
              <Image
                style={commonStyles.avatar}
                source={require("./img/avatar.png")}
              />
              <Image
                style={styles.logout}
                source={require("./img/log-out.png")}
              />
              <Text style={styles.title}>Natali Romanova</Text>

              <View style={commonStyles.wrapper}>
                <Image source={require("./img/publicationPhoto.jpg")} />
                <Text style={commonStyles.publicationTitle}>Ліс</Text>

                <View style={styles.publicationInfo}>
                  <View style={commonStyles.row}>
                    <Image source={require("./img/commentsIcon.png")} />
                    <Text style={styles.commentsNumber}>8</Text>
                  </View>

                  <View style={styles.likes}>
                    <SimpleLineIcons name="like" size={20} color="#FF6C00" />
                    <Text style={styles.numberLikes}>153</Text>
                  </View>
                  <View style={commonStyles.row}>
                    <EvilIcons
                      name="location"
                      size={28}
                      style={commonStyles.locationIcon}
                    />
                    <Text style={styles.location}>Ukraine</Text>
                  </View>
                </View>
              </View>
            </View>
          </ImageBackground>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
  profileWrapper: {
    flex: 1,
    height: 100,
    marginTop: 147,
    backgroundColor: "white",
    borderTopLeftRadius: "25px",
    borderTopRightRadius: "25px"
  },
  changeUser: {
    position: "absolute",
    right: 126,
    top: 20,
    zIndex: 9,
  },
  logout: {
    position: "absolute",
    top: 22,
    right: 16,
  },
  title: {
    ...commonStyles.title,
    marginTop: 92,
    marginBottom: 32,
  },
  publicationInfo: {
    ...commonStyles.row,
    marginBottom: 32,
  },
  commentsNumber: {
    ...commonStyles.commentsNumber,
    color: "#212121",
  },
  likes: {
    ...commonStyles.row,
    marginLeft: 24,
  },
  numberLikes: {
    ...commonStyles.commentsNumber,
    marginLeft: 4,
    marginRight: 140,
    color: "#212121",
  },
  location: {
    ...commonStyles.location,
  },
});
