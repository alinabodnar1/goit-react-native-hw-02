import React, { useState } from "react";
import { Pressable, TextInput, View, StyleSheet, Text } from "react-native";
import { commonStyles } from "../commonStyles";
import { useNavigation } from "@react-navigation/native";

export default function RegistrationForm() {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();

  // const handleSubmit = (evt) => {
  //   console.log(login, email, password);
  //   setLogin("");
  //   setEmail("");
  //   setPassword("");
  // };

  return (
    <View style={styles.container}>
      <View>
        <TextInput
          style={styles.input}
          placeholder="Логін"
          value={login}
          onChangeText={setLogin}
        />
        <TextInput
          style={styles.input}
          placeholder="Адреса електронної пошти"
          value={email}
          onChangeText={setEmail}
        />
        <View>
          <TextInput
            style={styles.input}
            placeholder="Пароль"
            value={password}
            onChangeText={setPassword}
          />
          <Pressable style={styles.show}>
            <Text style={styles.showText}>Показати</Text>
          </Pressable>
        </View>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.signup}>Зареєструватися</Text>
        </Pressable>
      </View>
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
