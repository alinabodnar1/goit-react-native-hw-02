import { Pressable, TextInput, View, StyleSheet, Text } from "react-native";
import React from "react";
import { commonStyles } from "../commonStyles";
import { Formik } from "formik";

export default function Loginform() {
  return (
    <View style={styles.container}>
      <Formik
        onSubmit={(values, action) => {
          console.log(values);
          action.resetForm();
        }}
        initialValues={{ email: "", password: "" }}
      >
        {(props) => (
          <View>
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
              <Text style={styles.signin} onPress={props.handleSubmit}>
                Увійти
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
  signin: {
    ...commonStyles.font,
    color: "white",
    fontFamily: "Roboto-Medium",
  },
});
