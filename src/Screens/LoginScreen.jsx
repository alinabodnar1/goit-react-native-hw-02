import React from "react";
import background from "../images/background.jpg";
import {
  View,
  ImageBackground,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Loginform from "./Loginform";
import { commonStyles } from "../commonStyles";

export default function LoginScreen() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <ImageBackground
            source={background}
            resizeMode="cover"
            style={styles.image}
          >
            <View style={styles.loginform}>
              <Text style={styles.title}>Увійти</Text>
              <Loginform />

              <Text style={styles.noAccount}>
                Немає акаунту?{" "}
                <Text style={styles.signup}>Зареєструватися</Text>
              </Text>
            </View>
          </ImageBackground>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    ...commonStyles.image,
  },
  loginform: {
    ...commonStyles.form,
    position: "absolute",
    width: "100%",
    bottom: 0,
    paddingBottom: 156,
  },
  title: {
    ...commonStyles.title,
    marginTop: 32,
    marginBottom: 32,
  },
  noAccount: {
    ...commonStyles.font,
    marginTop: 16,
    color: "#1B4371",
    fontFamily: "Roboto-Light",
  },
  signup: {
    textDecorationLine: "underline",
  },
});
