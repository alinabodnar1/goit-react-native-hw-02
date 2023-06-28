import React from "react";
import background from "../images/background.jpg";
import { Ionicons } from "@expo/vector-icons";
import RegistrationForm from "./RegistrationForm";
import {
  View,
  ImageBackground,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { commonStyles } from "../commonStyles";

export default function RegistrationScreen() {
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
            <View style={styles.form}>
              <View style={styles.addphoto}>
                <Ionicons
                  name="ios-add-circle-outline"
                  size={24}
                  style={styles.adduser}
                />
              </View>
              <Text style={styles.title}>Реєстрація</Text>
              <RegistrationForm />
              <Text style={styles.signin}>Вже є акаунт? Увійти</Text>
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
  form: {
    ...commonStyles.form,
    position: "absolute",
    // top: 263,
    bottom: 0,
    width: "100%",
    paddingBottom: 144,
  },
  addphoto: {
    position: "absolute",
    width: 120,
    height: 120,
    left: 128,
    top: -60,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },
  adduser: {
    position: "absolute",
    right: -12,
    bottom: 14,
    color: "rgba(255, 108, 0, 1)",
  },
  title: {
    marginTop: 62,
    marginBottom: 32,
    ...commonStyles.title,
  },
  signin: {
    ...commonStyles.font,
    marginTop: 16,
    color: "#1B4371",
    fontFamily: "Roboto-Light",
  },
});
