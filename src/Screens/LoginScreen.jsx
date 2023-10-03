import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { logIn } from "../redux/auth/authOperations";
import { commonStyles } from "../commonStyles";
import background from "../images/background.jpg";
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

export default function LoginScreen() {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isInputActive, setIsInputActive] = useState("");

  const onLogin = () => {
    dispatch(
      logIn({
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
            <View style={styles.loginform}>
              <Text style={styles.title}>Увійти</Text>

              <View style={styles.container}>
                <View>
                  <TextInput
                    style={[
                      styles.input,
                      isInputActive === "email" && styles.inputActive,
                    ]}
                    placeholder="Адреса електронної пошти"
                    value={email}
                    onChangeText={setEmail}
                    onFocus={() => onInputActive("email")}
                    onBlur={onInputBlur}
                  />
                  <View>
                    <TextInput
                      style={[
                        styles.input,
                        isInputActive === "password" && styles.inputActive,
                      ]}
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

                  <Pressable style={styles.button} onPress={onLogin}>
                    <Text style={styles.signin}>Увійти</Text>
                  </Pressable>
                </View>
              </View>

              <Text style={styles.noAccount}>
                Немає акаунту?{" "}
                <Text style={styles.signup}>
                  <Pressable
                    style={styles.signup}
                    onPress={() => navigation.navigate("Registration")}
                  >
                    <Text style={styles.register}>Зареєструватися</Text>
                  </Pressable>
                </Text>
              </Text>
            </View>
          </ImageBackground>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
  loginform: {
    ...commonStyles.form,
    position: "absolute",
    width: "100%",
    bottom: 0,
    paddingBottom: 147,
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
  register: {
    ...commonStyles.font,
    padding: 2,
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
  signin: {
    ...commonStyles.font,
    color: "white",
    fontFamily: "Roboto-Medium",
  },
});
