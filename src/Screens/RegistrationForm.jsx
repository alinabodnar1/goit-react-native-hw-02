import React from "react";
import { Pressable, TextInput, View, StyleSheet, Text } from "react-native";
import { commonStyles } from "../commonStyles";
import { Formik } from "formik";

export default function RegistrationForm() {
  return (
    <View style={styles.container}>
      <Formik
        onSubmit={(values, action) => {
          console.log(values);
          action.resetForm();
        }}
        initialValues={{ login: "", email: "", password: "" }}
      >
        {(props) => (
          <View>
            <TextInput
              style={styles.input}
              placeholder="Логін"
              value={props.values.login}
              onChangeText={props.handleChange("login")}
            />
            <TextInput
              style={styles.input}
              placeholder="Адреса електронної пошти"
              value={props.values.email}
              onChangeText={props.handleChange("email")}
            />
            <View>
              <TextInput
                style={styles.input}
                placeholder="Пароль"
                value={props.values.password}
                onChangeText={props.handleChange("password")}
              />
              <Pressable style={styles.show}>
                <Text style={styles.showText}>Показати</Text>
              </Pressable>
            </View>

            <Pressable style={styles.button}>
              <Text style={styles.signup} onPress={props.handleSubmit}>
                Зареєструватися
              </Text>
            </Pressable>
          </View>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...commonStyles.container,
  },
  input: {
    ...commonStyles.input,
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
