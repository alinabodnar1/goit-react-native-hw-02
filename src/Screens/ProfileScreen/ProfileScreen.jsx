import React from "react";
import publicationPhoto from "./img/publicationPhoto.jpg";
import { Ionicons, EvilIcons, AntDesign } from "@expo/vector-icons";
import {
  View,
  Text,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Pressable,
  TextInput,
} from "react-native";
import { commonStyles } from "../../commonStyles";

export default function ProfileScreen() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Ionicons name="arrow-back" size={24} style={styles.back} />
            <Text style={styles.title}>Створити публікацію</Text>
          </View>
          <View style={styles.wrapper}>
            <Image style={styles.publicationPhoto} source={publicationPhoto} />
            <Pressable>
              <Text style={styles.loadPhoto}>Редагувати фото</Text>
            </Pressable>
            <TextInput style={styles.inputName} placeholder="Назва..." />
            <View style={styles.locationWraper}>
              <EvilIcons
                name="location"
                size={24}
                style={styles.locationIcon}
              />
              <TextInput style={styles.location} placeholder="Місцевість..." />
            </View>
            <Pressable style={styles.button}>
              <Text style={styles.publish}>Опубліковати</Text>
            </Pressable>
            <Pressable style={styles.delete}>
              <AntDesign name="delete" size={24} color="#BDBDBD" />
            </Pressable>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingTop: 44,
    borderBottomWidth: 0.3,
    borderBottomColor: "E5E5E5",
  },
  back: {
    color: "#808080",
    position: "absolute",
    bottom: 5,
    left: 16,
  },
  title: {
    ...commonStyles.font,
    paddingTop: 11,
    paddingBottom: 11,
  },
  wrapper: {
    paddingLeft: 24,
    paddingRight: 24,
  },
  publicationPhoto: {
    marginTop: 32,
    marginBottom: 8,
    width: 343,
    height: 240,
    borderRadius: 8,
  },
  loadPhoto: {
    ...commonStyles.font,
    textAlign: "left",
    color: "#BDBDBD",
  },
  inputName: {
    ...commonStyles.font,
    textAlign: "left",
    marginTop: 48,
    marginBottom: 32,
    borderBottomWidth: 1,
    borderBottomColor: "#E8E8E8",
    paddingBottom: 15,
  },
  locationWraper: {
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#E8E8E8",
  },
  location: {
    ...commonStyles.font,
    textAlign: "left",
    marginLeft: 22,
  },
  locationIcon: {
    ...commonStyles.zeroLeftPosition,
    color: "gray",
  },
  button: {
    ...commonStyles.heroButton,
    marginTop: 32,
    marginBottom: 120,
    backgroundColor: "#FF6C00",
  },
  publish: {
    ...commonStyles.font,
    color: "#FFFFFF",
  },
  delete: {
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: "#F6F6F6",
    textAlign: "center",
    borderRadius: 100,
    paddingBottom: 8,
    paddingTop: 8,
    paddingLeft: 23,
    paddingRight: 23,
  },
});
