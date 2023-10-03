import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { register } from "../redux/auth/authOperations";
import { commonStyles } from "../commonStyles";
import background from "../images/background.jpg";
import { Ionicons } from "@expo/vector-icons";
// import RegistrationForm from "./RegistrationForm";
import {
  View,
  ImageBackground,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Pressable,
  TextInput,
} from "react-native";

export default function RegistrationScreen() {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isInputActive, setIsInputActive] = useState("");

  const onRegistration = () => {
    dispatch(
      register({
        login,
        email,
        password,
      })
    );

    navigation.navigate("Home");
  };

  const onInputActive = (input) => {
    setIsInputActive(input);
  };
  const onInputBlur = () => {
    setIsInputActive("");
  };

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
              {/* <RegistrationForm /> */}
              <View style={styles.container}>
                <View>
                  <TextInput
                    // style={styles.input}
                    style={[
                      styles.input,
                      isInputActive === "login" && styles.inputActive,
                    ]}
                    type="text"
                    placeholder="Логін"
                    value={login}
                    onChangeText={setLogin}
                    onFocus={() => onInputActive("login")}
                    onBlur={onInputBlur}
                  />
                  <TextInput
                    // style={styles.input}
                    style={[
                      styles.input,
                      isInputActive === "email" && styles.inputActive,
                    ]}
                    type="email"
                    placeholder="Адреса електронної пошти"
                    value={email}
                    onChangeText={setEmail}
                    onFocus={() => onInputActive("email")}
                    onBlur={onInputBlur}
                  />
                  <View>
                    <TextInput
                      // style={styles.input}
                      style={[
                        styles.input,
                        isInputActive === "password" && styles.inputActive,
                      ]}
                      type="password"
                      placeholder="Пароль"
                      value={password}
                      onChangeText={setPassword}
                      onFocus={() => onInputActive("password")}
                      onBlur={onInputBlur}
                    />
                    <Pressable style={styles.show}>
                      <Text style={styles.showText}>Показати</Text>
                    </Pressable>
                  </View>
                  <Pressable
                    style={styles.button}
                    onPress={onRegistration}
                  >
                    <Text style={styles.signup}>Зареєструватися</Text>
                  </Pressable>
                </View>
              </View>
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
    color: "#1B4371",
  },

  container: {
    ...commonStyles.container,
  },
  input: {
    ...commonStyles.input,
  },
  inputActive: {
    ...commonStyles.inputActive,
  },
  show: {
    ...commonStyles.showPosition,
  },
  showText: {
    ...commonStyles.showText,
    ...commonStyles.font,
  },
  button: {
    ...commonStyles.heroButton,
  },
  signup: {
    ...commonStyles.font,
    color: "white",
    fontFamily: "Roboto-Medium",
  },
});
