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
  Pressable,
} from "react-native";
import { commonStyles } from "../commonStyles";
import { useNavigation } from "@react-navigation/native";

export default function RegistrationScreen() {
  const navigation = useNavigation();
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
      keyboardVerticalOffset={-250}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{ flex: 1 }}>
          <ImageBackground
            source={background}
            resizeMode="cover"
            style={commonStyles.image}
          >
            <View style={styles.form}>
              <View style={styles.avatar}>
                <Ionicons
                  name="ios-add-circle-outline"
                  size={24}
                  style={styles.adduser}
                />
              </View>
              <Text style={styles.title}>Реєстрація</Text>
              <RegistrationForm />

              <Text style={styles.signin}>
                Вже є акаунт?
                <Pressable
                  style={styles.signin}
                  onPress={() => navigation.navigate("Login")}
                >
                  <Text style={styles.enter}>Увійти</Text>
                </Pressable>
              </Text>
            </View>
          </ImageBackground>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
  form: {
    ...commonStyles.form,
    position: "absolute",
    bottom: 0,
    width: "100%",
    paddingBottom: 147,
  },
  avatar: {
    ...commonStyles.avatar,
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
  enter: {
    ...commonStyles.font,
    marginTop: 3,
    marginLeft: 5,
    color: '#1B4371',
  },
});
